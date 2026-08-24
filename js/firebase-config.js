/**
 * Configuração e Conexão com o Firebase Firestore
 * 
 * INSTRUÇÕES PARA O USUÁRIO:
 * Substitua os valores das propriedades abaixo (apiKey, authDomain, etc.)
 * pelas credenciais do seu projeto criado no Firebase Console (https://console.firebase.google.com).
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Credenciais ativas do projeto Firebase (vigostky-estudo)
export const firebaseConfig = {
  apiKey: "AIzaSyAkrNjB7Z0tsUXv_5Dj9Z-bwkDTIvFZYMo",
  authDomain: "vigostky-estudo.firebaseapp.com",
  projectId: "vigostky-estudo",
  storageBucket: "vigostky-estudo.firebasestorage.app",
  messagingSenderId: "66034278088",
  appId: "1:66034278088:web:8fb56fa49a327dd5bc0ffd",
  measurementId: "G-85Q63T4W0X"
};

// Verifica se o usuário substituiu as credenciais padrão
export function isFirebaseConfigured() {
  return (
    firebaseConfig.apiKey !== "SUA_API_KEY_AQUI" &&
    firebaseConfig.projectId !== "SEU_PROJETO_ID" &&
    firebaseConfig.apiKey.trim() !== ""
  );
}

let db = null;

try {
  if (isFirebaseConfigured()) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("🔥 Firebase inicializado com sucesso!");
  } else {
    console.warn("⚠️ Credenciais do Firebase pendentes. O jogo utilizará o modo de Ranking Demonstrativo Local.");
  }
} catch (error) {
  console.error("Erro ao inicializar Firebase:", error);
}

/**
 * Envia uma nova pontuação para a coleção 'ranking' no Firestore
 * @param {string} nome 
 * @param {number} pontuacao 
 */
export async function salvarPontuacaoFirestore(nome, pontuacao) {
  if (!db || !isFirebaseConfigured()) {
    console.log("Salvar Local Fallback:", { nome, pontuacao });
    salvarPontuacaoLocal(nome, pontuacao);
    return { success: true, isLocal: true };
  }

  try {
    const rankingRef = collection(db, "ranking");
    await addDoc(rankingRef, {
      nome: nome.trim(),
      pontuacao: Number(pontuacao),
      data: serverTimestamp()
    });
    return { success: true, isLocal: false };
  } catch (error) {
    console.error("Erro ao salvar no Firestore:", error);
    // Em caso de falha de conexão, salva no localStorage como fallback
    salvarPontuacaoLocal(nome, pontuacao);
    return { success: false, error: error.message, isLocal: true };
  }
}

/**
 * Busca o Top 10 jogadores ordenados pela maior pontuação
 */
export async function buscarTopRanking(limite = 10) {
  if (!db || !isFirebaseConfigured()) {
    return buscarTopRankingLocal(limite);
  }

  try {
    const rankingRef = collection(db, "ranking");
    const q = query(rankingRef, orderBy("pontuacao", "desc"), limit(limite));
    const querySnapshot = await getDocs(q);

    const lista = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      lista.push({
        id: doc.id,
        nome: data.nome || "Anônimo",
        pontuacao: data.pontuacao || 0,
        data: data.data ? data.data.toDate() : new Date()
      });
    });

    return { success: true, data: lista, isLocal: false };
  } catch (error) {
    console.error("Erro ao buscar ranking do Firestore:", error);
    return { success: false, data: buscarTopRankingLocal(limite), isLocal: true, error: error.message };
  }
}

// Fallback Local Storage
function salvarPontuacaoLocal(nome, pontuacao) {
  const salvas = JSON.parse(localStorage.getItem("vygotsky_ranking") || "[]");
  salvas.push({
    id: "local_" + Date.now(),
    nome: nome.trim(),
    pontuacao: Number(pontuacao),
    data: new Date().toISOString()
  });
  salvas.sort((a, b) => b.pontuacao - a.pontuacao);
  localStorage.setItem("vygotsky_ranking", JSON.stringify(salvas.slice(0, 50)));
}

function buscarTopRankingLocal(limite = 10) {
  const salvas = JSON.parse(localStorage.getItem("vygotsky_ranking") || "[]");
  
  // Se estiver completamente vazio, inclui dados de exemplo demonstrativos
  if (salvas.length === 0) {
    const demos = [
      { id: "d1", nome: "Prof. Lev (Demo)", pontuacao: 1000, data: new Date() },
      { id: "d2", nome: "Maria Montessori (Demo)", pontuacao: 850, data: new Date() },
      { id: "d3", nome: "Jean Piaget (Demo)", pontuacao: 700, data: new Date() },
      { id: "d4", nome: "Estudante Pedagogo (Demo)", pontuacao: 500, data: new Date() }
    ];
    return demos.slice(0, limite);
  }

  return salvas.slice(0, limite);
}

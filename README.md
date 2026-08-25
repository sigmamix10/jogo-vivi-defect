# 🧠 Vygotsky e a Defectologia - Flashcards & Quiz Interativo

![Versão](https://img.shields.io/badge/vers%C3%A3o-1.0.0-purple.svg)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue.svg)
![Acessibilidade](https://img.shields.io/badge/acessibilidade-WAI--ARIA%20%7C%20LIBRAS%20%7C%20Voz-green.svg)
![Firebase](https://img.shields.io/badge/database-Firebase%20Firestore-orange.svg)

Um aplicativo web interativo, lúdico e acessível desenvolvido no **Antigravity IDE** para o estudo e fixação dos conceitos fundamentais da **Teoria Defectológica de Lev Vygotsky** (Psicologia Histórico-Cultural e Educação Especial).

---

## 📋 Sumário
- [Recursos Principais](#-recursos-principais)
- [Fundamentação Teórica](#-fundamentação-teórica)
- [Fluxo de Jogo & Funcionalidades](#-fluxo-de-jogo--funcionalidades)
- [Recursos de Acessibilidade](#-recursos-de-acessibilidade)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Configuração do Firebase Firestore](#-configuração-do-firebase-firestore)
- [Como Executar Localmente](#-como-executar-localmente)
- [Licença](#-licença)

---

## ✨ Recursos Principais

- 🎴 **Modo Estudo (Flashcards 3D):** Cartões ilustrados com efeito de rotação 3D (`rotateY`), cores temáticas vibrantes, áudio narração e botão lúdico *"Marcar como Aprendido"*.
- ⚡ **Modo Desafio (Quiz Interativo Acessível):** Banco de 26 perguntas pedagógicas, apresentando 5 questões sorteadas sem repetição a cada nova tentativa, temporizador estendido de 3 minutos (180s), botão de confirmação *"Responder"*, áudio narração, bônus de velocidade, multiplicador por combo de acertos e explicações pedagógicas.
- 🎉 **Efeito de Confetes & Celebrativo:** Animação de confetes em Canvas 2D ao concluir o Quiz com bom desempenho.
- 📜 **Certificado Acadêmico Digital:** Emissão de certificado em PDF/Impressão personalizado com nome do jogador, pontuação e data.
- 📊 **Relatório Pedagógico de Desempenho:** Diagnóstico ao final do Quiz indicando tópicos dominados vs. tópicos recomendados para revisão.
- 🏆 **Ranking em Tempo Real (Leaderboard):** Tabela do Top 10 maiores pontuadores integrada ao **Firebase Firestore**.
- 🔊 **Leitura em Voz Alta & Controle de Áudio:** Narração sintetizada (Web Speech API) e botão Mute/Unmute no cabeçalho.
- 🤟 **Tradução em LIBRAS (VLibras):** Widget com avatar 3D que traduz em sinais todo o conteúdo do aplicativo.

---

## 📚 Fundamentação Teórica

O conteúdo pedagógico do aplicativo aborda os 5 pilares centrais da defectologia vygotskyana:

1. **Defectologia Antiga vs. Moderna:** Superação da visão biológica e quantitativa de "menos-valia" (focada em testes de QI) em prol de uma compreensão qualitativa do desenvolvimento psíquico.
2. **Compensação Social:** A deficiência como um estímulo que desafia o psiquismo a criar caminhos alternativos de superação mediada social e culturalmente.
3. **Zona de Desenvolvimento Proximal (ZDP):** O papel da intervenção pedagógica na lacuna entre o desenvolvimento real e o potencial.
4. **Mediação Pedagógica:** O professor como mediador essencial que disponibiliza instrumentos e signos culturais.
5. **Caminhos Alternativos:** Uso do Braille, da linguagem tátil e da Língua de Sinais (LIBRAS/datilologia) para substituir vias biológicas danificadas por vias culturais altamente funcionais.

---

## 🎮 Fluxo de Jogo & Funcionalidades

### 1. Tela de Boas-Vindas
- Identificação do jogador (nome/apelido).
- Armazenamento em `localStorage` para facilidade em sessões futuras.

### 2. Escolha de Modo
- **Modo Estudo (Flashcards):** Estudo livre dos cartões.
- **Modo Desafio (Quiz):** Valendo pontos para o ranking.
- **Ranking (Leaderboard):** Visualização do Top 10 global.
- **Ajuda & Instruções:** Guia completo de regras e acessibilidade.

### 3. Sistema de Pontuação do Quiz
- **Acerto Base:** +200 pontos por questão correta.
- **Bônus de Combo:** +50 pontos extras cumulativos por acertos consecutivos (ex: 1º acerto = 250 pts, 2º acerto = 300 pts, etc.).
- **Feedback Imediato:** Explicação teórica exibida após responder cada questão.

---

## ♿ Recursos de Acessibilidade

| Recurso | Descrição | Como Usar |
| :--- | :--- | :--- |
| 🔊 **Narração por Voz** | Leitura sintetizada da pergunta, alternativas e cartões em voz alta | Clique no botão `🔊 Ouvir Texto` nos cartões ou `🔊 Ouvir Questão` no Quiz |
| 🤟 **Tradução LIBRAS** | Avatar 3D (VLibras) que traduz em sinais | Clique no ícone azul de acessibilidade no canto da tela |
| ⌨️ **Navegação por Teclado** | Controle total sem uso do mouse | `Espaço`/`Enter` (virar cartão) \| `Setas` (navegar) |
| 👁️ **Atributos ARIA** | Compatibilidade com leitores de tela | NVDA, JAWS, VoiceOver e TalkBack suportados |
| 🎨 **Alto Contraste** | Paleta de cores acessível com indicadores textuais | Adaptação nativa para daltonismo e baixa visão |

---

## 📁 Estrutura do Projeto

```text
jogo-vivi-defect/
├── index.html              # Interface principal SPA (HTML5 semântico com ARIA e VLibras)
├── css/
│   └── styles.css          # Design System Glassmorphism, animações 3D e responsividade
├── js/
│   ├── data.js             # Banco de dados de flashcards e perguntas do Quiz
│   ├── firebase-config.js  # Configuração modular do Firebase Firestore v10 + Fallback
│   └── app.js              # Controlador principal da aplicação (lógica SPA, áudio e voz)
└── README.md               # Documentação completa do projeto
```

---

## 🔥 Configuração do Firebase Firestore

O aplicativo está pré-configurado para se conectar ao projeto **`vigostky-estudo`**.

Chaves presentes em `js/firebase-config.js`:
```javascript
export const firebaseConfig = {
  apiKey: "AIzaSyAkrNjB7Z0tsUXv_5Dj9Z-bwkDTIvFZYMo",
  authDomain: "vigostky-estudo.firebaseapp.com",
  projectId: "vigostky-estudo",
  storageBucket: "vigostky-estudo.firebasestorage.app",
  messagingSenderId: "66034278088",
  appId: "1:66034278088:web:8fb56fa49a327dd5bc0ffd",
  measurementId: "G-85Q63T4W0X"
};
```

### Regras do Firestore Recomendadas:
No [Firebase Console](https://console.firebase.google.com/), em **Firestore Database > Regras**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ranking/{documentId} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['nome', 'pontuacao', 'data'])
                    && request.resource.data.nome is string
                    && request.resource.data.pontuacao is number;
      allow update, delete: if false;
    }
  }
}
```

---

## 💻 Como Executar Localmente

1. Navegue até o diretório do projeto:
   ```bash
   cd d:/Projetos/jogo-vivi-defect
   ```
2. Inicie o servidor local:
   ```bash
   npx serve -l 8000 .
   ```
3. Abra o seu navegador no endereço:
   👉 `http://localhost:8000`

---

## 📚 Referência Bibliográfica

- RUPPEL, Cristiane; HANSEL, Ana Flávia; RIBEIRO, Lucimare. **Vygotsky e a defectologia: contribuições para a educação dos estudantes com deficiência nos dias atuais**. *Revista Diálogos e Perspectivas em Educação Especial*, Marília, SP, v. 8, n. 1, p. 11–24, 2021. DOI: [10.36311/2358-8845.2021.v8n1.p11-24](https://doi.org/10.36311/2358-8845.2021.v8n1.p11-24). Disponível em: [https://revistas.marilia.unesp.br/index.php/dialogoseperspectivas/article/view/10599](https://revistas.marilia.unesp.br/index.php/dialogoseperspectivas/article/view/10599). Acesso em: 24 ago. 2026.

---

## 📄 Licença

Este projeto é um software educacional de código aberto criado para fins acadêmicos e pedagógicos. Desenvolvido com base nos conceitos histórico-culturais de **Lev Vygotsky (1896–1934)**.

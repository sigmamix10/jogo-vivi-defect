/**
 * Aplicação Principal: Flashcards e Quiz Vygotsky
 * Gerencia estados, interatividade do DOM, 3D flips, Quiz e integração Firestore.
 */

import { flashcardsData, quizQuestions } from './data.js';
import { 
  salvarPontuacaoFirestore, 
  buscarTopRanking, 
  isFirebaseConfigured 
} from './firebase-config.js';

// Estado Global da Aplicação
const state = {
  playerName: '',
  currentScreen: 'welcome-screen',
  
  // Estado Flashcards
  flashcardIndex: 0,
  isCardFlipped: false,

  // Estado Quiz
  quizIndex: 0,
  score: 0,
  correctAnswersCount: 0,
  streak: 0,
  selectedOption: null,
  isAnswered: false,
  questions: []
};

// Referências aos elementos DOM
const elements = {
  // Telas
  welcomeScreen: document.getElementById('welcome-screen'),
  modeScreen: document.getElementById('mode-screen'),
  studyScreen: document.getElementById('study-screen'),
  quizScreen: document.getElementById('quiz-screen'),
  resultScreen: document.getElementById('result-screen'),
  rankingScreen: document.getElementById('ranking-screen'),

  // Header / Header Pill
  headerPlayerPill: document.getElementById('header-player-pill'),
  headerPlayerName: document.getElementById('header-player-name'),

  // Boas-Vindas
  welcomeForm: document.getElementById('welcome-form'),
  playerNameInput: document.getElementById('player-name-input'),

  // Seleção de Modo
  btnGoStudy: document.getElementById('btn-go-study'),
  btnGoQuiz: document.getElementById('btn-go-quiz'),
  btnGoRanking: document.getElementById('btn-go-ranking'),
  btnGoHelp: document.getElementById('btn-go-help'),

  // Flashcards
  flashcardWrapper: document.getElementById('flashcard-wrapper'),
  cardCategory: document.getElementById('card-category'),
  cardTitleFront: document.getElementById('card-title-front'),
  cardTextFront: document.getElementById('card-text-front'),
  cardTitleBack: document.getElementById('card-title-back'),
  cardTextBack: document.getElementById('card-text-back'),
  cardCounter: document.getElementById('card-counter'),
  btnPrevCard: document.getElementById('btn-prev-card'),
  btnNextCard: document.getElementById('btn-next-card'),
  btnFlipCard: document.getElementById('btn-flip-card'),
  btnFinishStudy: document.getElementById('btn-finish-study'),

  // Quiz
  quizQuestionNumber: document.getElementById('quiz-question-number'),
  quizScorePill: document.getElementById('quiz-score-pill'),
  quizProgressFill: document.getElementById('quiz-progress-fill'),
  quizQuestionText: document.getElementById('quiz-question-text'),
  optionsGrid: document.getElementById('options-grid'),
  explanationBox: document.getElementById('explanation-box'),
  explanationText: document.getElementById('explanation-text'),
  btnNextQuestion: document.getElementById('btn-next-question'),

  // Resultado Quiz
  resultScoreDisplay: document.getElementById('result-score-display'),
  resultAccuracy: document.getElementById('result-accuracy'),
  resultCorrectCount: document.getElementById('result-correct-count'),
  firestoreStatusBadge: document.getElementById('firestore-status-badge'),
  btnRestartQuiz: document.getElementById('btn-restart-quiz'),
  btnViewRankingFromResult: document.getElementById('btn-view-ranking-from-result'),
  btnReturnMenuFromResult: document.getElementById('btn-return-menu-from-result'),

  // Ranking & Ajuda
  rankingListContainer: document.getElementById('ranking-list-container'),
  firebaseNoticeBanner: document.getElementById('firebase-notice-banner'),
  btnRefreshRanking: document.getElementById('btn-refresh-ranking'),
  btnBackToMenuFromRanking: document.getElementById('btn-back-to-menu-from-ranking'),
  btnBackToMenuFromHelp: document.getElementById('btn-back-to-menu-from-help')
};

// Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  checkSavedPlayer();
});

function initEventListeners() {
  // Form de Boas-Vindas
  elements.welcomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = elements.playerNameInput.value.trim();
    if (name) {
      setPlayerName(name);
      switchScreen('mode-screen');
    }
  });

  // Botões de Seleção de Modo
  elements.btnGoStudy.addEventListener('click', () => {
    startStudyMode();
  });

  elements.btnGoQuiz.addEventListener('click', () => {
    startQuizMode();
  });

  elements.btnGoRanking.addEventListener('click', () => {
    loadAndShowRanking();
  });

  if (elements.btnGoHelp) {
    elements.btnGoHelp.addEventListener('click', () => {
      switchScreen('help-screen');
    });
  }

  if (elements.btnBackToMenuFromHelp) {
    elements.btnBackToMenuFromHelp.addEventListener('click', () => {
      switchScreen('mode-screen');
    });
  }

  // Flashcards
  elements.flashcardWrapper.addEventListener('click', toggleCardFlip);
  elements.btnFlipCard.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCardFlip();
  });

  elements.btnPrevCard.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateFlashcard(-1);
  });

  elements.btnNextCard.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateFlashcard(1);
  });

  elements.btnFinishStudy.addEventListener('click', () => {
    switchScreen('mode-screen');
  });

  // Suporte a Teclado no Flashcard
  document.addEventListener('keydown', (e) => {
    if (state.currentScreen === 'study-screen') {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        toggleCardFlip();
      } else if (e.code === 'ArrowLeft') {
        navigateFlashcard(-1);
      } else if (e.code === 'ArrowRight') {
        navigateFlashcard(1);
      }
    }
  });

  // Quiz
  elements.btnNextQuestion.addEventListener('click', advanceQuiz);

  // Resultado
  elements.btnRestartQuiz.addEventListener('click', () => {
    startQuizMode();
  });

  elements.btnViewRankingFromResult.addEventListener('click', () => {
    loadAndShowRanking();
  });

  elements.btnReturnMenuFromResult.addEventListener('click', () => {
    switchScreen('mode-screen');
  });

  // Ranking
  elements.btnRefreshRanking.addEventListener('click', () => {
    renderRankingList();
  });

  elements.btnBackToMenuFromRanking.addEventListener('click', () => {
    switchScreen('mode-screen');
  });
}

// Gestão de Jogador
function setPlayerName(name) {
  state.playerName = name;
  localStorage.setItem('vygotsky_player_name', name);
  elements.headerPlayerName.textContent = name;
  elements.headerPlayerPill.style.display = 'flex';
}

function checkSavedPlayer() {
  const saved = localStorage.getItem('vygotsky_player_name');
  if (saved) {
    elements.playerNameInput.value = saved;
  }
}

// Troca de Telas
function switchScreen(screenId) {
  state.currentScreen = screenId;
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    if (screen.id === screenId) {
      screen.classList.add('active');
    } else {
      screen.classList.remove('active');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Estado dos cartões aprendidos (Set de IDs)
const masteredCards = new Set();

/* ==========================================================================
   EFEITOS SONOROS (WEB AUDIO API SINTETIZADA) & ACESSIBILIDADE DE VOZ (WEB SPEECH API)
   ========================================================================== */
function playSynthesizedSound(type) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'flip') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'master') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // Do
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // Mi
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16); // Sol
      osc.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.24); // Do Alto
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    }
  } catch (e) {
    // Ignora em navegadores sem suporte audioCtx
  }
}

function speakCurrentCardText() {
  if (!('speechSynthesis' in window)) {
    alert("Seu navegador não possui suporte nativo à leitura por voz.");
    return;
  }

  window.speechSynthesis.cancel();

  const card = flashcardsData[state.flashcardIndex];
  const textToSpeak = state.isCardFlipped 
    ? `Verso do cartão ${card.titulo}: ${card.verso}` 
    : `Frente do cartão ${card.titulo}: ${card.frente}`;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.95;

  window.speechSynthesis.speak(utterance);
}

/* ==========================================================================
   MODO ESTUDO - FLASHCARDS LÚDICOS & ACESSÍVEIS
   ========================================================================== */
function startStudyMode() {
  state.flashcardIndex = 0;
  state.isCardFlipped = false;
  
  // Conecta ouvintes dos novos botões lúdicos se não foram conectados
  const btnSpeak = document.getElementById('btn-speak-card');
  if (btnSpeak && !btnSpeak.dataset.hasListener) {
    btnSpeak.addEventListener('click', (e) => {
      e.stopPropagation();
      speakCurrentCardText();
    });
    btnSpeak.dataset.hasListener = "true";
  }

  const btnMaster = document.getElementById('btn-master-card');
  if (btnMaster && !btnMaster.dataset.hasListener) {
    btnMaster.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMasterCard();
    });
    btnMaster.dataset.hasListener = "true";
  }

  renderFlashcard();
  switchScreen('study-screen');
}

function renderFlashcard() {
  const card = flashcardsData[state.flashcardIndex];
  state.isCardFlipped = false;
  elements.flashcardWrapper.classList.remove('flipped');

  // Atualiza emojis e bordas dinâmicas por cartão
  const emojiFront = document.getElementById('card-emoji-front');
  const emojiBack = document.getElementById('card-emoji-back');
  if (emojiFront) emojiFront.textContent = card.emoji || '🧠';
  if (emojiBack) emojiBack.textContent = card.emoji || '🧠';

  const faceFront = elements.flashcardWrapper.querySelector('.card-face-front');
  const faceBack = elements.flashcardWrapper.querySelector('.card-face-back');
  if (faceFront && card.color) faceFront.style.borderTopColor = card.color;
  if (faceBack && card.color) faceBack.style.borderTopColor = card.color;

  // Atualiza conteúdo de texto
  elements.cardCategory.textContent = card.category;
  elements.cardTitleFront.textContent = card.titulo;
  elements.cardTextFront.textContent = card.frente;
  
  elements.cardTitleBack.textContent = card.titulo;
  elements.cardTextBack.textContent = card.verso;

  elements.cardCounter.textContent = `${state.flashcardIndex + 1} / ${flashcardsData.length}`;

  // Atualiza badge e botão de cartão dominado
  updateMasteredUI();

  // Botões de navegação
  elements.btnPrevCard.disabled = state.flashcardIndex === 0;
  elements.btnNextCard.disabled = state.flashcardIndex === flashcardsData.length - 1;
}

function toggleCardFlip() {
  state.isCardFlipped = !state.isCardFlipped;
  elements.flashcardWrapper.classList.toggle('flipped', state.isCardFlipped);
  playSynthesizedSound('flip');
}

function toggleMasterCard() {
  const card = flashcardsData[state.flashcardIndex];
  if (masteredCards.has(card.id)) {
    masteredCards.delete(card.id);
  } else {
    masteredCards.add(card.id);
    playSynthesizedSound('master');
  }
  updateMasteredUI();
}

function updateMasteredUI() {
  const card = flashcardsData[state.flashcardIndex];
  const btnMaster = document.getElementById('btn-master-card');
  const masteredBadge = document.getElementById('mastered-counter');

  if (masteredBadge) {
    masteredBadge.textContent = `🌟 ${masteredCards.size}/${flashcardsData.length} Aprendidos`;
  }

  if (btnMaster) {
    if (masteredCards.has(card.id)) {
      btnMaster.className = 'btn btn-master mastered';
      btnMaster.innerHTML = '🌟 Conceito Aprendido!';
    } else {
      btnMaster.className = 'btn btn-master';
      btnMaster.innerHTML = '⭐ Marcar como Aprendido!';
    }
  }
}

function navigateFlashcard(direction) {
  const newIndex = state.flashcardIndex + direction;
  if (newIndex >= 0 && newIndex < flashcardsData.length) {
    state.flashcardIndex = newIndex;
    renderFlashcard();
  }
}

/* ==========================================================================
   MODO DESAFIO - QUIZ
   ========================================================================== */
function startQuizMode() {
  state.quizIndex = 0;
  state.score = 0;
  state.correctAnswersCount = 0;
  state.streak = 0;
  // Embaralha as perguntas para variabilidade
  state.questions = [...quizQuestions].sort(() => Math.random() - 0.5);

  renderQuizQuestion();
  switchScreen('quiz-screen');
}

function renderQuizQuestion() {
  state.isAnswered = false;
  state.selectedOption = null;

  const currentQ = state.questions[state.quizIndex];
  const totalQ = state.questions.length;

  // Atualiza progresso e textos
  elements.quizQuestionNumber.textContent = `${state.quizIndex + 1}/${totalQ}`;
  elements.quizScorePill.textContent = `⭐ ${state.score} pts`;
  elements.quizProgressFill.style.width = `${((state.quizIndex + 1) / totalQ) * 100}%`;
  elements.quizQuestionText.textContent = currentQ.pergunta;

  // Limpa e esconde caixa de explicação
  elements.explanationBox.style.display = 'none';
  elements.btnNextQuestion.style.display = 'none';

  // Renderiza opções de resposta
  elements.optionsGrid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  currentQ.opcoes.forEach((opcao, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.setAttribute('data-index', index);

    btn.innerHTML = `
      <span class="option-letter">${letters[index]}</span>
      <span class="option-text">${opcao}</span>
    `;

    btn.addEventListener('click', () => handleOptionClick(index, btn));
    elements.optionsGrid.appendChild(btn);
  });
}

function handleOptionClick(selectedIndex, clickedBtn) {
  if (state.isAnswered) return;
  state.isAnswered = true;

  const currentQ = state.questions[state.quizIndex];
  const isCorrect = selectedIndex === currentQ.correta;

  const optionBtns = elements.optionsGrid.querySelectorAll('.option-btn');

  // Trava todos os botões
  optionBtns.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    clickedBtn.classList.add('correct');
    state.streak++;
    state.correctAnswersCount++;
    
    // Pontuação base 200 + Bônus de Combo (50 pts por acerto seguido)
    const pointsGained = 200 + (state.streak * 50);
    state.score += pointsGained;
    elements.quizScorePill.textContent = `⭐ ${state.score} pts (+${pointsGained})`;
  } else {
    clickedBtn.classList.add('incorrect');
    state.streak = 0;

    // Destaca a resposta correta
    const correctBtn = elements.optionsGrid.querySelector(`[data-index="${currentQ.correta}"]`);
    if (correctBtn) {
      correctBtn.classList.add('correct');
    }
  }

  // Exibe explicação pedagógica
  elements.explanationText.textContent = currentQ.explicacao;
  elements.explanationBox.style.display = 'block';

  // Atualiza botão de próximo
  if (state.quizIndex < state.questions.length - 1) {
    elements.btnNextQuestion.textContent = "Próxima Pergunta ➔";
  } else {
    elements.btnNextQuestion.textContent = "Ver Resultado Final 🏆";
  }
  elements.btnNextQuestion.style.display = 'inline-flex';
}

function advanceQuiz() {
  state.quizIndex++;
  if (state.quizIndex < state.questions.length) {
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
}

/* ==========================================================================
   RESULTADO DO QUIZ & INTEGRAÇÃO FIRESTORE
   ========================================================================== */
async function finishQuiz() {
  const total = state.questions.length;
  const accuracyPct = Math.round((state.correctAnswersCount / total) * 100);

  elements.resultScoreDisplay.textContent = `${state.score} pts`;
  elements.resultAccuracy.textContent = `${accuracyPct}%`;
  elements.resultCorrectCount.textContent = `${state.correctAnswersCount}/${total}`;

  // Atualiza status do envio no badge
  elements.firestoreStatusBadge.className = 'firestore-status-badge syncing';
  elements.firestoreStatusBadge.innerHTML = '⏳ Enviando pontuação...';

  switchScreen('result-screen');

  // Envia pontuação ao Firestore
  const result = await salvarPontuacaoFirestore(state.playerName, state.score);

  if (result.success && !result.isLocal) {
    elements.firestoreStatusBadge.className = 'firestore-status-badge success';
    elements.firestoreStatusBadge.innerHTML = '🔥 Pontuação enviada ao Firebase Firestore!';
  } else {
    elements.firestoreStatusBadge.className = 'firestore-status-badge local';
    elements.firestoreStatusBadge.innerHTML = '💾 Salvo no Ranking Demonstrativo Local';
  }
}

/* ==========================================================================
   RANKING (LEADERBOARD)
   ========================================================================== */
async function loadAndShowRanking() {
  switchScreen('ranking-screen');
  await renderRankingList();
}

async function renderRankingList() {
  const isConfigured = isFirebaseConfigured();
  
  if (!isConfigured) {
    elements.firebaseNoticeBanner.style.display = 'flex';
  } else {
    elements.firebaseNoticeBanner.style.display = 'none';
  }

  elements.rankingListContainer.innerHTML = `
    <div class="loading-spinner">
      <p>🔄 Carregando Top 10 Jogadores...</p>
    </div>
  `;

  const rankingResult = await buscarTopRanking(10);
  const data = rankingResult.data;

  elements.rankingListContainer.innerHTML = '';

  if (!data || data.length === 0) {
    elements.rankingListContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 2rem;">
        Nenhuma pontuação registrada ainda. Seja o primeiro a jogar!
      </div>
    `;
    return;
  }

  data.forEach((item, index) => {
    const pos = index + 1;
    let posSymbol = `#${pos}`;
    let topClass = '';

    if (pos === 1) { posSymbol = '🥇'; topClass = 'top-1'; }
    else if (pos === 2) { posSymbol = '🥈'; topClass = 'top-2'; }
    else if (pos === 3) { posSymbol = '🥉'; topClass = 'top-3'; }

    const isCurrentPlayer = state.playerName && 
      item.nome.toLowerCase() === state.playerName.toLowerCase();

    const rankItem = document.createElement('div');
    rankItem.className = `rank-item ${topClass} ${isCurrentPlayer ? 'is-current-player' : ''}`;

    rankItem.innerHTML = `
      <div class="rank-left">
        <span class="rank-position">${posSymbol}</span>
        <span class="rank-name">${escapeHtml(item.nome)} ${isCurrentPlayer ? ' (Você)' : ''}</span>
      </div>
      <span class="rank-score">${item.pontuacao} pts</span>
    `;

    elements.rankingListContainer.appendChild(rankItem);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

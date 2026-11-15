// ===== Переключение экранов =====
function showScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + n).classList.add('active');
  updateProgress(n);
  window.scrollTo(0, 0);
}

function updateProgress(n) {
  const total = 7;
  const percent = Math.min((n / total) * 100, 100);
  document.getElementById('progress').style.width = percent + '%';
}

// ===== Раскрытие карточек =====
function toggleCard(el) {
  el.classList.toggle('open');
}

// ===== Переключатель кредит/вклад =====
function switchPercent(type) {
  const box = document.getElementById('percent-box');
  const btnCredit = document.getElementById('btn-credit');
  const btnDeposit = document.getElementById('btn-deposit');

  if (type === 'credit') {
    btnCredit.classList.add('active');
    btnDeposit.classList.remove('active');
    box.innerHTML = `
      <p class="percent-scheme">Ты → Банк: сумма + проценты</p>
      <p class="percent-example">Взял 10 000 ₽ на год под 10% → вернёшь 11 000 ₽</p>
    `;
  } else {
    btnDeposit.classList.add('active');
    btnCredit.classList.remove('active');
    box.innerHTML = `
      <p class="percent-scheme">Банк → Ты: сумма + проценты</p>
      <p class="percent-example">Положил 10 000 ₽ на год под 5% → заберёшь 10 500 ₽</p>
    `;
  }
}

// ===== Квиз =====
const quizData = [
  {
    q: 'Кто «банк банков» в России?',
    options: ['Банк России', 'Россельхозбанк', 'Сбербанк'],
    correct: 0,
    explain: 'Банк России следит за стабильностью и выдаёт лицензии коммерческим банкам.'
  },
  {
    q: 'Что такое процент по кредиту?',
    options: ['Плата банку за пользование деньгами', 'Штраф', 'Бонус от банка'],
    correct: 0,
    explain: 'Процент — это цена денег: когда занимаешь, платишь ты.'
  },
  {
    q: 'Чем вклад отличается от кредита?',
    options: ['Вклад — ты даёшь банку, кредит — банк тебе', 'Ничем', 'Вклад только для фермеров'],
    correct: 0,
    explain: 'Во вкладе банк платит тебе проценты, в кредите — ты банку.'
  },
  {
    q: 'Россельхозбанк работает только с фермерами?',
    options: ['Нет, это универсальный банк', 'Да', 'Только с государством'],
    correct: 0,
    explain: 'РСХБ — универсальный банк: кредиты, вклады, карты, ипотека для всех.'
  },
  {
    q: 'С какого возраста можно оформить дебетовую карту?',
    options: ['С 14 лет', 'С 18 лет', 'С 21 года'],
    correct: 0,
    explain: 'Дебетовую карту можно оформить с 14 лет — по паспорту.'
  }
];

let currentQuestion = 0;

function renderQuiz() {
  const container = document.getElementById('quiz-container');
  if (currentQuestion >= quizData.length) {
    showScreen(7);
    return;
  }

  const item = quizData[currentQuestion];
  let html = `<p class="quiz-question">${currentQuestion + 1}. ${item.q}</p>`;
  html += '<div class="quiz-options">';
  item.options.forEach((opt, i) => {
    html += `<div class="quiz-option" onclick="answerQuiz(this, ${i})">${opt}</div>`;
  });
  html += '</div>';
  html += '<div class="quiz-feedback" id="feedback"></div>';
  container.innerHTML = html;
}

function answerQuiz(el, index) {
  const item = quizData[currentQuestion];
  const feedback = document.getElementById('feedback');
  const options = document.querySelectorAll('.quiz-option');

  options.forEach(o => o.style.pointerEvents = 'none');

  if (index === item.correct) {
    el.classList.add('correct');
    feedback.textContent = 'Верно! ' + item.explain;
    feedback.className = 'quiz-feedback ok';
  } else {
    el.classList.add('wrong');
    options[item.correct].classList.add('correct');
    feedback.textContent = 'Не совсем. ' + item.explain;
    feedback.className = 'quiz-feedback no';
  }

  setTimeout(() => {
    currentQuestion++;
    renderQuiz();
  }, 2200);
}

// ===== Сброс =====
function restart() {
  currentQuestion = 0;
  showScreen(0);
  document.getElementById('progress').style.width = '0%';
}

// ===== Инициализация =====
window.onload = function() {
  updateProgress(0);
  renderQuiz();
};

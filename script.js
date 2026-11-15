* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f4f8f4;
  color: #1a1a1a;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Прогресс-бар */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: #d8e8d8;
  z-index: 100;
}
#progress {
  height: 100%;
  width: 0;
  background: #2e7d32;
  transition: width 0.3s ease;
}

/* Экраны */
.screen {
  display: none;
  min-height: 100vh;
  padding: 80px 60px 120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.screen.active {
  display: flex;
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Старт и финал */
.start-box, .final-box {
  text-align: center;
  max-width: 800px;
}
h1 {
  font-size: 72px;
  color: #1b5e20;
  margin-bottom: 20px;
}
.subtitle {
  font-size: 28px;
  color: #444;
  margin-bottom: 50px;
  line-height: 1.4;
}

h2 {
  font-size: 48px;
  color: #1b5e20;
  margin-bottom: 20px;
  text-align: center;
}
.hint {
  font-size: 22px;
  color: #666;
  margin-bottom: 40px;
  text-align: center;
}

/* Карточки */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1200px;
  margin-bottom: 40px;
}
.card {
  background: #fff;
  border: 2px solid #c8e6c9;
  border-radius: 20px;
  padding: 30px 28px;
  min-width: 260px;
  max-width: 340px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
.card:hover {
  border-color: #2e7d32;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(46,125,50,0.15);
}
.card h3 {
  font-size: 28px;
  color: #1b5e20;
  margin-bottom: 0;
}
.card-text {
  font-size: 20px;
  color: #444;
  line-height: 1.5;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  margin-top: 0;
}
.card.open .card-text {
  max-height: 300px;
  opacity: 1;
  margin-top: 16px;
}

/* Схема кредита */
.scheme {
  font-size: 32px;
  font-weight: bold;
  color: #2e7d32;
  background: #e8f5e9;
  padding: 20px 40px;
  border-radius: 16px;
  margin-bottom: 40px;
}

/* Переключатель процентов */
.toggle {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}
.toggle-btn {
  font-size: 24px;
  padding: 18px 40px;
  border: 2px solid #2e7d32;
  background: #fff;
  color: #2e7d32;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.toggle-btn.active {
  background: #2e7d32;
  color: #fff;
}
.percent-box {
  background: #fff;
  border: 2px solid #c8e6c9;
  border-radius: 20px;
  padding: 40px 60px;
  text-align: center;
  max-width: 800px;
}
.percent-scheme {
  font-size: 32px;
  color: #1b5e20;
  font-weight: bold;
  margin-bottom: 20px;
}
.percent-example {
  font-size: 24px;
  color: #444;
}

/* Навигация */
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  background: rgba(244, 248, 244, 0.95);
  z-index: 50;
}
.btn-main, .btn-next, .btn-back {
  font-size: 26px;
  padding: 18px 50px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
}
.btn-main, .btn-next {
  background: #2e7d32;
  color: #fff;
}
.btn-main:hover, .btn-next:hover {
  background: #1b5e20;
  transform: translateY(-2px);
}
.btn-back {
  background: #fff;
  color: #2e7d32;
  border: 2px solid #2e7d32;
}
.btn-back:hover {
  background: #e8f5e9;
}

/* Квиз */
#quiz-container {
  max-width: 900px;
  width: 100%;
}
.quiz-question {
  font-size: 32px;
  color: #1b5e20;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
}
.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
}
.quiz-option {
  font-size: 24px;
  padding: 20px 30px;
  background: #fff;
  border: 2px solid #c8e6c9;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}
.quiz-option:hover {
  border-color: #2e7d32;
  background: #f1f8f1;
}
.quiz-option.correct {
  background: #c8e6c9;
  border-color: #2e7d32;
}
.quiz-option.wrong {
  background: #ffcdd2;
  border-color: #c62828;
}
.quiz-feedback {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  min-height: 40px;
  font-weight: 600;
}
.quiz-feedback.ok { color: #2e7d32; }
.quiz-feedback.no { color: #c62828; }

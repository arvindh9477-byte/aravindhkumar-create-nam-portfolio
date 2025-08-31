const quizData = [
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "IBM"],
    correct: "Netscape"
  },
  {
    question: "What is the output of typeof null?",
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    correct: "'object'"
  },
  {
    question: "Inside which HTML element do we put JavaScript code?",
    options: ["<js>", "<scripting>", "<javascript>", "<script>"],
    correct: "<script>"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- comment -->", "// comment", "** comment **", "# comment"],
    correct: "// comment"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Management", "Desktop Object Model", "Digital Ordinance Model"],
    correct: "Document Object Model"
  }
];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

startBtn.onclick = startQuiz;
restartBtn.onclick = () => location.reload();
nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
};

function startQuiz() {
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  const current = quizData[currentQuestionIndex];
  questionText.textContent = current.question;

  current.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, current.correct);
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  nextBtn.classList.add('hidden');
  answerButtons.innerHTML = '';
}

function selectAnswer(selectedBtn, correctAnswer) {
  const buttons = answerButtons.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add('correct');
    }
  });

  if (selectedBtn.textContent !== correctAnswer) {
    selectedBtn.classList.add('wrong');
  } else {
    score++;
  }

  nextBtn.classList.remove('hidden');
}

function showScore() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  scoreDisplay.textContent = `Your Score: ${score} / ${quizData.length}`;
}

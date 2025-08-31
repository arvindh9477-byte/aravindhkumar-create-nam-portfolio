project-link[quiz.html](https://github.com/user-attachments/files/22068069/quiz.html)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Quiz</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f4f4f4;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      max-width: 600px;
      width: 90%;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      text-align: center;
    }

    h1 {
      margin-bottom: 10px;
    }

    .question {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .answers button {
      display: block;
      width: 100%;
      margin: 10px 0;
      padding: 10px;
      background-color: #eee;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
    }

    .answers button:hover {
      background-color: #ddd;
    }

    .correct {
      background-color: #a6e6a6 !important;
    }

    .wrong {
      background-color: #f8b8b8 !important;
    }

    .hidden {
      display: none;
    }

    #next-btn, #restart-btn {
      padding: 10px 20px;
      margin-top: 20px;
      cursor: pointer;
    }

    #score {
      font-size: 24px;
      margin-top: 20px;
    }
  </style>
</head>
<body>

<div class="container">
  <div id="start-screen">
    <h1>Welcome to the JavaScript Quiz</h1>
    <button id="start-btn">Start Quiz</button>
  </div>

  <div id="quiz-screen" class="hidden">
    <div class="question" id="question-text"></div>
    <div class="answers" id="answer-buttons"></div>
    <button id="next-btn" class="hidden">Next</button>
  </div>

  <div id="result-screen" class="hidden">
    <h2>Quiz Completed!</h2>
    <div id="score"></div>
    <button id="restart-btn">Restart Quiz</button>
  </div>
</div>

<script>
  const quizData = [
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "IBM"],
      correct: "Netscape"
    },
    {
      question: "What is the output of: typeof null?",
      options: ["'null'", "'object'", "'undefined'", "'number'"],
      correct: "'object'"
    },
    {
      question: "Inside which HTML element do we put JavaScript code?",
      options: ["<js>", "<scripting>", "<javascript>", "<script>"],
      correct: "<script>"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
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
</script>

</body>
</html>

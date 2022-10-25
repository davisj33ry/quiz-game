// Global Variables
const startPage = document.querySelector("#startPage");
const startQuiz = document.getElementById("quizContainer");
const startBtn = document.getElementById("startBtn");
var timeHandler = document.getElementById("timer");
var userFinalScore = document.getElementById("userFinalScore")
const initials = document.querySelector("#initials");
const submitBtn = document.querySelector("#submit");
const userScore = document.querySelector("#userScore");
const highScores = document.querySelector("#highScores");
const scoresEl = document.querySelector("#scores");
const startNewGameBtn = document.querySelector("#startNewGame");
const resetBtn = document.querySelector("#resetAll");
const showHighScoresBtn = document.querySelector("#showHighScores");
var currentQuestion = 0;
var currentSelection = 0;
var timeStart = 31;
var score = 0;
var timeElapsed = 0;
var timeLapse = 0;

// Start Timer
function startTimer() {
  timeLapse = setInterval(() => {
    timeStart--;
    if (timeLapse <= 0) {
      alert("Game Over");
      hide(quizContainer);
      show(startPage);
      timeElapsed = timeLapse;
    }
    timeHandler.innerHTML = `${timeStart}`;
  }, 1000);
}

// Stop Timer
function stopTimer() {
  clearInterval(timeLapse);
}

//Start Quiz - Start Page
startBtn.addEventListener("click", function () {
  hide(startPage);
  show(quizContainer);
  showQuestion();
  startTimer();
});

//hide element
function hide(element) {
  element.style.display = "none";
}

//show element
function show(element) {
  element.style.display = "block";
}

// Quiz Variables
var questionEl = document.querySelector("#question");
var selectionEl = document.querySelector("#selection");
// Element Variables - Quiz

var questions = [
  {
    mainQuestion: "How many boroughs make up New York City?",
    selection: ["One", "Three", "Five", "Seven"],
    answer: "Five",
  },
  {
    mainQuestion: "Which river flows under the Boroklyn Bridge?",
    selection: ["Hudson", "East River", "Mississippi", "Delaware"],
    answer: "East River",
  },
  {
    mainQuestion: "Times Square is located in which borough?",
    selection: ["Brooklyn", "Queens", "Staten Island", "Manhattan"],
    answer: "Manhattan",
  },
  {
    mainQuestion: "Which county is directly east of Queens?",
    selection: ["Kings", "Richmond", "Nassau", "Sussex"],
    answer: "Nassau",
  },
  {
    mainQuestion: "How many subway lines are in NYC?",
    selection: ["Ten", "Thirty-Six", "Fourty-Two", "Thirteen", "Seven"],
    answer: "Thirty-Six",
  },
];

//display quiz question
function showQuestion() {
  questionEl.textContent = questions[currentQuestion].mainQuestion;
  for (i = 0; i < selectionEl.children.length; i++) {
    selectionEl.children[
      i
    ].children[0].textContent = `${questions[currentQuestion].selection[i]}`;
  }
}

// display high scores
showHighScoresBtn.addEventListener("click", function () {
    hide(startPage);
    hide(quizContainer);
    hide(userFinalScore);
    showHighScores();
    reset();
});

// check answer to question
selectionEl.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    checkAnswer(event.target);
    nextQuestion();
  }
});

// Function for next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
    showQuestion();
    } else {
        stopTimer();
        if ((timeStart - timeElapsed) > 0) {
            score += ((timeStart - timeElapsed) * 1000);
            userFinalScore.textContent = score;
            hide(quizContainer)
            show(userFinalScore)
        };
    };
}

// check answer function
function checkAnswer(answer) {
  if (
    questions[currentQuestion].answer ===
    questions[currentQuestion].selection[answer.id]
  ) {
    alert("You got it dude!");
  } else {
    alert("Sorry, wrong answer");
    timeElapsed += 5;
  }
}
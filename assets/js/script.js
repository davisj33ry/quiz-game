// Element Variables - Start Page
const startPage = document.querySelector("#startPage");
const startQuiz = document.getElementById("quizContainer");
const startBtn = document.getElementById("startBtn");
var currentQuestion = 0;

//Start Quiz - Start Page
startBtn.addEventListener("click", function () {
  hide(startPage);
  show(quizContainer);
  showQuestion();
});

// // Start Timer
// function startTimer() {
//     if
// };

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
    mainQuestion: "What does FDNY stand for?",
    selection: [
      "First Dioscese of New York",
      "First Day in New York",
      "Fire Department of New York",
      "Fort Drum New York",
    ],
    answer: "Fire Department of New York",
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

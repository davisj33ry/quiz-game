// Element Variables - Start Page
const startPage = document.querySelector('#startPage');
const startQuiz = document.getElementById('quizContainer');
const startBtn = document.getElementById('startBtn')
var currentQuestion = 0

// Quiz Variables
const questionEl = document.querySelector('#quesions'); 
const answerEl = document.querySelector('answer');

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

//display quiz question
function showQuestion() {
    questionEl.textContent = questions[currentQuestion].question_1;
    for (i = 0; i < answersEl.children.length; i++) {
        answerEl.children[i].children[0].textContent = `${(i + 1)}: ${questions[currentQ].selection[i]}`;
    }
}

//Start Quiz - Start Page
startBtn.addEventListener("click", function() {
    hide(startPage);
    show(quizContainer);
    showQuestion();
});

// Element Variables - Quiz

var questions = [
    {
        question_1: "How many boroughs make up New York City?",
        selection: ["One", "Three", "Five", "Seven"],
        answer: "Five"
    },
    {
        question_2: "Which river flows under the Boroklyn Bridge?",
        selection: ["Hudson", "East River", "Mississippi", "Delaware"],
        answer: "East River"
    },
    {
        question_3: "Times Square is located in which borough?",
        selection: ["Brooklyn", "Queens", "Staten Island", "Manhattan"],
        answer: "Manhattan"
    },
    {
        question_4: "Which county is directly east of Queens?",
        selection: ["Kings", "Richmond", "Nassau","Sussex"],
        answer: "Nassau"
    },
    {
        question_5: "What does FDNY stand for?",
        selection: ["First Dioscese of New York", "First Day in New York", "Fire Department of New York", "Fort Drum New York"],
        answer: "Fire Department of New York"
    },
]
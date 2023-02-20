const questions = [
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },
];

const quiz = document.getElementById("quiz")
const quizAnswers = document.querySelectorAll("answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {

}
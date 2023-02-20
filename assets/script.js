const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Here's The Master Language",
        b: "Hypertext Makes Lemons",
        c: "Hypertext Markup Language",
        d: "History Time Maps and Logic",
        correct: "c",
    },
    {
        question: "What does CSS stand for?",
        a: "Criminal Studio Setup",
        b: "Cascading Super Sheets",
        c: "Cats Save Superman",
        d: "Cascading Style Sheets",
        correct: "d",
    },
    {
        question: "Which language adds functionality to a webpage?",
        a: "JavaScript",
        b: "HTML",
        c: "English",
        d: "CSS",
        correct: "a",
    },
    {
        question: "What does math.random() do in JavaScript?",
        a: "Does your math homework for you",
        b: "Returns a random number between 0 and 1",
        c: "Adds a random math problem to your webpage",
        d: "Opens the calculator on your computer",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz")
const quizAnswers = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a-text")
const b_text = document.getElementById("b-text")
const c_text = document.getElementById("c-text")
const d_text = document.getElementById("d-text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    quizAnswers.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    quizAnswers.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
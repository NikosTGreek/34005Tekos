const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question:
            "¿De dónde viene Napoleón Bonaparte?",
        choice1: "Grecia",
        choice2: "Italia",
        choice3: "Francia-Córcega",
        answer: 3,
    },
    {
        question:
            "¿Qué país atacó primero Adolf Hitler en la Segunda Guerra Mundial?",
        choice1: "Francia",
        choice2: "España",
        choice3: "Polonia",
        answer: 3,

    },
    {
        question:
            "¿Qué emperador romano legalizó el cristianismo y puso fin a la persecución de los cristianos?",
        choice1: "Nerón",
        choice2: "Constantino",
        choice3: "Trajano",
        answer: 2,

    },
    {
        question:
            "¿A través de qué río africano se alzó el antiguo Egipto?",
        choice1: "Nilo",
        choice2: "Amazonas",
        choice3: "Tigris",
        answer: 1,

    },
    {
        question:
            "Según las leyendas de la antiguedad, ¿quiénes fundaron a Roma?",
        choice1: "Aquiles y Odiseo",
        choice2: "Alejandro Magno y Ptolomeo",
        choice3: "Rómulo y Remo",
        answer: 3,

    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
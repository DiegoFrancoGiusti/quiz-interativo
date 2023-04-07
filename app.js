const form = document.querySelector('.c-form')
const modal = document.querySelector('.c-whrapper-modal')
const userScore = document.querySelector('.c-modal__userScore')
const correctAnswers = ['C','B','B','A']
let score = 0

const validatingAnswers = (userAnswer,index) => {
    const isCorrectAnswer = userAnswer.value === correctAnswers[index]

    if(isCorrectAnswer){
        score += 25
    }
}

const showModal = () => {
    modal.classList.toggle('is-close')
}

const closeModal = event => {
    const isCloseButton = event.target.classList[1] === 'btn--close'
    if(isCloseButton){
        modal.classList.toggle('is-close')
        location.reload()
    }
}

const showPunctuation = event => {
    event.preventDefault()

    const userAnswers = [
        event.target.inputquestion1,
        event.target.inputquestion2,
        event.target.inputquestion3,
        event.target.inputquestion4
    ]

   userAnswers.forEach(validatingAnswers)
   userScore.textContent = score
   showModal()
   score = 0
}

form.addEventListener('submit',showPunctuation)
modal.addEventListener('click', closeModal)
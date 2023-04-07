const form = document.querySelector('.c-form')
const correctAnswers = ['C','B','B','A']
let score = 0

const validatingAnswers = (userAnswer,index) => {
    const isCorrectAnswer = userAnswer.value === correctAnswers[index]

    if(isCorrectAnswer){
        score += 25
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
   console.log(score)
   score = 0
}

form.addEventListener('submit',showPunctuation)
const correctAnswers = ['C','B','B','A']
const form = document.querySelector('.c-form')
const modal = document.querySelector('.c-whrapper-modal')
const btnCloseModal = document.querySelector('.btn--close')
const userScore = document.querySelector('.c-modal__userScore')
let score = 0
let time = null

const getUserAnswers = () => {
  const userAnswers = correctAnswers.map((_,index) => form[`inputquestion${index+1}`].value)

  return userAnswers
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer,index) => {
    const comparingAnswers = userAnswer === correctAnswers[index]
        
    comparingAnswers ? score += 25 : score += 0
  })
}

const animationScore = () => {
  let countScore = 0

  time = setInterval(() => {
    userScore.textContent = ++countScore

    if(countScore === score){
     clearInterval(time)
    }

    if(score === 0){
     userScore.textContent = 0
    }
  }, 10)
}

const controlModal = cssClass => modal.classList.toggle(cssClass)

const handleFormSubmit = event => {
  event.preventDefault() 
  
  const userAnswers = getUserAnswers()
  
  calculateUserScore(userAnswers)
  controlModal('is-close')
  animationScore()
}

form.addEventListener('submit', handleFormSubmit)

btnCloseModal.addEventListener('click',() => {
  controlModal('is-close')
  location.reload()
})
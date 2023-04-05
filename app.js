const form = document.querySelector('.quiz-form')
const modal = document.querySelector('.modal')
const totalPoints = document.querySelector('.points')
const correctAnwers = ['C','B','B','A']
let score = 0

const validatingAnwers = (userAnwer,index) => {
    const isCorrectAnwer = userAnwer.value === correctAnwers[index]

    if(isCorrectAnwer){
        score += 25
    }
}

const showScore =  event => {
    event.preventDefault()  
    const userAnwers = [event.target.inputQuestion1,event.target.inputQuestion2,event.target.inputQuestion3,event.target.inputQuestion4]

    userAnwers.forEach(validatingAnwers)
    console.log(score)
    modal.style.display = 'block'
    totalPoints.textContent = score
    score = 0
}

form.addEventListener('submit', showScore)
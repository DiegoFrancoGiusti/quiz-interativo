const form = document.querySelector('.quiz-form')

const correctAnwers = ['C','B','B','A']

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnwers = [event.target.inputQuestion1,event.target.inputQuestion2,event.target.inputQuestion3,event.target.inputQuestion4]
    let score = 0

    userAnwers.forEach((userAnwer,index) => {
        if(userAnwer.value === correctAnwers[index]){
            score += 25
        }
    })
    console.log(score)
})
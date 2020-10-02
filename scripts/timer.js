//Select Items
const timerContainer = document.querySelector('.timer-container')
let hoursContainer = document.querySelector('.hours h3')
let minutesContainer = document.querySelector('.minutes h3')
let secondsContainer = document.querySelector('.seconds h3')

const timerForm = document.querySelector('#timer-inputs')

const startButton = document.querySelector('#start-button')
const pauseButton = document.querySelector('#pause-button')
const stopButton = document.querySelector('#stop-button')
//Set the countdown
timerForm.addEventListener('submit', (event) => {
    const timerData = new FormData(timerForm)
    const hoursValue = timerData.get('hours')
    const minutesValue = timerData.get('minutes')
    const secondsValue = timerData.get('seconds')

    hoursContainer.textContent = hoursValue
    minutesContainer.textContent = minutesValue
    secondsContainer.textContent = secondsValue
    function startTimer() {
        if (secondsContainer.textContent > 0) {
            secondsContainer.textContent--
        } else {
            secondsContainer.textContent = '0'
        }
        if (secondsContainer.textContent == 0 && minutesContainer.textContent > 0) {
            minutesContainer.textContent--
        }
    }
    const timerInterval = window.setInterval(startTimer, 1000)
    timerForm.reset()
    event.preventDefault()

})
//Select Items
const timerContainer = document.querySelector('.timer-container')
let hoursContainer = document.querySelector('.hours h3')
let minutesContainer = document.querySelector('.minutes h3')
let secondsContainer = document.querySelector('.seconds h3')

let hoursValue = document.querySelector('#hours-input').value
let minutesValue = document.querySelector('#minutes-input').value
let secondsValue = document.querySelector('#seconds-input').value

const startButton = document.querySelector('#start-button')
const pauseButton = document.querySelector('#pause-button')
const stopButton = document.querySelector('#stop-button')
//Set the countdown
function StartTimer() {
    hoursContainer.textContent = hoursValue
    minutesContainer.textContent = minutesValue
    secondsContainer.textContent = secondsValue
}
startButton.addEventListener('click', () => {
    StartTimer()
})
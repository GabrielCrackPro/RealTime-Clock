//Select items
const chronoContainer = document.querySelector('.chrono-container')
let hoursContainer = document.querySelector('.hours h3')
let minutesContainer = document.querySelector('.minutes h3')
let secondsContainer = document.querySelector('.seconds h3')

const startButton = document.querySelector('#play-button')
const pauseButton = document.querySelector('#pause-button')
const stopButton = document.querySelector('#stop-button')
//Chrono events
function startChrono() {
    secondsContainer.textContent++
    if (secondsContainer.textContent > 60) {
        secondsContainer.textContent = '0'
        minutesContainer.textContent++
    } if (minutesContainer.textContent > 60) {
        minutesContainer.textContent = '0'
        hoursContainer.textContent++
    }
}
startButton.addEventListener('click', () => {
    window.setInterval(startChrono, 1000)
})
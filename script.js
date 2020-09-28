//Select Items
let hoursContainer = document.querySelector('.hours h3')
let minutesContainer = document.querySelector('.minutes h3')
let secondsContainer = document.querySelector('.seconds h3')
let refreshButton = document.querySelector('#refresh-button')
//Set current time
function UpdateTime() {
    let actualHours = new Date().getHours()
    let actualMinutes = new Date().getMinutes()
    let actualSeconds = new Date().getSeconds()
    if (actualHours < 10) {
        actualHours = '0' + actualHours
    } if (actualMinutes < 10) {
        actualMinutes = '0' + actualMinutes
    } if (actualSeconds < 10) {
        actualSeconds = '0' + actualSeconds
    }
    hoursContainer.textContent = actualHours
    minutesContainer.textContent = actualMinutes
    secondsContainer.textContent = actualSeconds
}
refreshButton.addEventListener('click', () => {
    location.reload()
})
window.setInterval(UpdateTime, 1000)    
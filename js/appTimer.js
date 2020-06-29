document.addEventListener('DOMContentLoaded', () => {

    let timerDisplay = document.querySelector("#timer")

    let hourTimer = document.querySelector("#timer span:first-child")
    let minTimer = document.querySelector("#timer span:nth-child(2)")
    let secTimer = document.querySelector("#timer span:last-child")

    let startBtn = document.querySelector("#startTimer")
    let pauseBtn = document.querySelector("#pauseTimer")
    let stopBtn = document.querySelector("#stopTimer")

    let hourInput = document.querySelector("#hourTimer")
    let minInput = document.querySelector("#minTimer")
    let secInput = document.querySelector("#secTimer")

    let start, hour, min, sec

    startBtn.addEventListener('click', () => {
        hour = hourInput.value
        min = minInput.value
        sec = secInput.value
        start = setInterval(timer, 100)
        startBtn.style.display = 'none'
        pauseBtn.style.display = 'block'
    })
    pauseBtn.style.display = 'none'
    pauseBtn.addEventListener('click', () => {
        clearInterval(start)
        startBtn.style.display = 'block'
        pauseBtn.style.display = 'none'
    })
    stopBtn.addEventListener('click', () => {
        clearInterval(start)
        hour = 0
        min = 0
        sec = 0
        hourTimer.innerHTML = `0${hour}`
        minTimer.innerHTML = `0${min}`
        secTimer.innerHTML = `0${sec}`
        startBtn.style.display = 'block'
        pauseBtn.style.display = 'none'
    })

    let timer = () => {
        sec--
        if (sec < 1) {
            min--
            sec = 59
            if (min < 0 && hour > 0) {
                hour--
                min = 59
            }
        } else if (hour == 0 && min == 0 && sec == 1) {
            clearInterval(start)
            timerDisplay.innerHTML = "BIP BIP!"
        }

    
    hour < 10 ? hourTimer.innerHTML = `0${hour}` : hourTimer.innerHTML = `${hour}`
    min < 10 ? minTimer.innerHTML = `0${min}` : minTimer.innerHTML = `${min}`
    sec < 10 ? secTimer.innerHTML = `0${sec}` : secTimer.innerHTML = `${sec}`
}


})
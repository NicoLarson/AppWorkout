document.addEventListener('DOMContentLoaded', () => {

    let timerDisplay = document.querySelector("#timer h3")

    let hourTimer = document.querySelector("#timer span:first-child")
    let minTimer = document.querySelector("#timer span:nth-child(2)")
    let secTimer = document.querySelector("#timer span:last-child")

    let startBtn = document.querySelector("#startTimer")
    let pauseBtn = document.querySelector("#pauseTimer")
    let continueBtn = document.querySelector("#continueTimer")
    let resetBtn = document.querySelector("#stopTimer")

    let hourInput = document.querySelector("#hourTimer")
    let minInput = document.querySelector("#minTimer")
    let secInput = document.querySelector("#secTimer")

    let start
    let timerSet = () => {
        hour = hourInput.value
        min = minInput.value
        sec = secInput.value
    }
    timerSet()

    let showTimer = () => {
        hour < 10 ? hourTimer.innerHTML = `0${hour}` : hourTimer.innerHTML = `${hour}`
        min < 10 ? minTimer.innerHTML = `0${min}` : minTimer.innerHTML = `${min}`
        sec < 10 ? secTimer.innerHTML = `0${sec}` : secTimer.innerHTML = `${sec}`
    }
    let timerReset = () => {
        timerSet()
        showTimer()
        timerDisplay.style.display = 'none'
        startBtn.style.display = 'block'
        pauseBtn.style.display = 'none'
        continueBtn.style.display = 'none'
        hourInput.style.display = 'block'
        minInput.style.display = 'block'
        secInput.style.display = 'block'
    }
    timerReset()

    let timer = () => {
        if (hour == 0 && min == 0 && sec == 0) {
            clearInterval(start)
            alert("BIP BIP!")
            timerReset()
        } else if (sec < 1) {
            min--
            sec = 59
            if (min < 0 && hour > 0) {
                hour--
                min = 59
            }
        } else {
            sec--
        }
        showTimer()
    }

    startBtn.addEventListener('click', () => {
        timerSet()
        showTimer()
        start = setInterval(timer, 1000)
        timerDisplay.style.display = 'block'
        startBtn.style.display = 'none'
        pauseBtn.style.display = 'block'
        hourInput.style.display = 'none'
        minInput.style.display = 'none'
        secInput.style.display = 'none'

    })
    pauseBtn.addEventListener('click', () => {
        clearInterval(start)
        continueBtn.style.display = 'block'
        pauseBtn.style.display = 'none'
    })
    continueBtn.addEventListener('click', () => {
        start = setInterval(timer, 1000)
        continueBtn.style.display = 'none'
        pauseBtn.style.display = 'block'
    })
    resetBtn.addEventListener('click', () => {
        clearInterval(start)
        timerSet()
        timerReset()
    })
})
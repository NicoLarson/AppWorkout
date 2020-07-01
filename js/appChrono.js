document.addEventListener('DOMContentLoaded', () => {

    let hourChrono = document.querySelector("dl dd h3 span:first-child")
    let minChrono = document.querySelector("dl dd h3 span:nth-child(2)")
    let secChrono = document.querySelector("dl dd h3 span:last-child")

    let startBtn = document.querySelector("#start")
    let pauseBtn = document.querySelector("#pause")
    let stopBtn = document.querySelector("#stop")

    let hour, min, sec, start

    let chronoDisplay = () => {
        hour < 10 ? hourChrono.innerHTML = `0${hour}` : hourChrono.innerHTML = `${hour}`
        min < 10 ? minChrono.innerHTML = `0${min}` : minChrono.innerHTML = `${min}`
        sec < 10 ? secChrono.innerHTML = `0${sec}` : secChrono.innerHTML = `${sec}`
    }
    let chronoReset = () => {
        hour = 0
        min = 0
        sec = 0
        hourChrono.innerHTML = `0${hour}`
        minChrono.innerHTML = `0${min}`
        secChrono.innerHTML = `0${sec}`
    }
    chronoReset()
    let chrono = () => {
        sec++
        if (sec > 59) {
            min++
            sec = 0
            if (min > 59) {
                hour++
                min = 0
                if (hour > 24) {
                    hour = 0
                }
            }
        }
        chronoDisplay()
    }


    pauseBtn.style.display = 'none'
    startBtn.addEventListener('click', () => {
        start = setInterval(chrono, 1000)
        startBtn.style.display = 'none'
        pauseBtn.style.display = 'block'

    })

    stopBtn.addEventListener('click', () => {
        clearInterval(start)
        chronoReset()
        startBtn.style.display = 'block'
        pauseBtn.style.display = 'none'
    })

    pauseBtn.addEventListener('click', () => {
        clearInterval(start)
        startBtn.style.display = 'block'
        pauseBtn.style.display = 'none'
    })

})
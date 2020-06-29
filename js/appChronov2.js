document.addEventListener('DOMContentLoaded', () => {

    let hourChrono = document.querySelector("dl dd h3 span:first-child")
    let minChrono = document.querySelector("dl dd h3 span:nth-child(2)")
    let secChrono = document.querySelector("dl dd h3 span:last-child")

    let startBtn = document.querySelector("#start")
    let pauseBtn = document.querySelector("#pause")
    let stopBtn = document.querySelector("#stop")

    let hour = 0, min = 0, sec = 0, tic = 0, start
    let chrono = () => {
        tic++
        if (tic > 59) {
            min++
            tic = 0
            sec = 0
            if (min > 59) {
                hour++
                min = 0
                if (hour > 24) {
                    hour = 0
                }
            }
        } else {
            sec = tic
        }

        hour < 10 ? hourChrono.innerHTML = `0${hour}` : hourChrono.innerHTML = `${hour}`
        min < 10 ? minChrono.innerHTML = `0${min}` : minChrono.innerHTML = `${min}`
        sec < 10 ? secChrono.innerHTML = `0${sec}` : secChrono.innerHTML = `${sec}`

    }

    startBtn.addEventListener('click', () => {
        start = setInterval(chrono, 1000)
    })

    //Stoper le chronometre
    stopBtn.addEventListener('click', () => {
        clearInterval(start)
        tic = 0
        hour = 0
        min = 0
        sec = 0
        hourChrono.innerHTML = `0${hour}`
        minChrono.innerHTML = `0${min}`
        secChrono.innerHTML = `0${sec}`
    })
    //Mettre en pause le chronomètre
    pauseBtn.addEventListener('click', () => {
        clearInterval(start)
    })

})
document.addEventListener('DOMContentLoaded', () => {

    const chronoDisplay = document.getElementById("chrono")
    let startBtn = document.getElementById("start")
    let pauseBtn = document.getElementById("pause")
    let stopBtn = document.getElementById("stop")

    let start
    let sec = 0
    let min = 0
    let hour = 0
    let tic = 0

    let chrono = () => {
        tic++
        sec = tic
        chronoDisplay.innerHTML = `${hour} : ${min} : ${sec}`
        if (tic > 59) {
            min++
            tic = 0
            if (min > 59) {
                hour++
                min = 0
                if (hour > 24) {
                    hour = 0
                }
            }
        }
    }

    //Todo faire possibilité de cliquer une seul fois
    startBtn.addEventListener('click', (event) => {
        start = setInterval(chrono, 1000)
        if (event.detail > 1){
            clearInterval(start)
        }
    })
    //Stoper le chronometre
    stopBtn.addEventListener('click', () => {
        clearInterval(start)
        tic = 0
        sec = 0
        hour = 0
        sec = 0
        chronoDisplay.innerHTML = `00:00:00`
    })
    //Mettre en pause le chronomètre
    pauseBtn.addEventListener('click', () => {
        clearInterval(start)
    })
})
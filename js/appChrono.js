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

    if (sec < 10) {
        console.log("0" + sec)
    }
    //TODO Afficher les deux zeros 00:00:00
    let chrono = () => {
        tic++
        sec = tic

/*         if (sec < 10 && min < 10 && hour < 10) {
            chronoDisplay.innerHTML = `0${hour} : 0${min} : 0${sec}`
        }else if(sec > 9 && min < 10 && hour < 10){
            chronoDisplay.innerHTML = `0${hour} : 0${min} : ${sec}`
        }else if(sec > 9 && min > 9 && hour < 10){
            chronoDisplay.innerHTML = `0${hour} : ${min} : ${sec}`
         } else {
            chronoDisplay.innerHTML = `${hour} : ${min} : ${sec}`
        }
 */
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
    startBtn.addEventListener('click', () => {
        start = setInterval(chrono, 10)
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
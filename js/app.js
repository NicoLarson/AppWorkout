document.addEventListener('DOMContentLoaded', () => {

    const chronoDisplay = document.getElementById("chrono")
    const startBtn = document.getElementById("start")
    const pauseBtn = document.getElementById("pause")
    const stopBtn = document.getElementById("stop")
    let tic = 0
    let chrono = chronoDisplay.innerHTML

    startBtn.addEventListener('click', () => {
        setInterval(chrono, 1000)
        chronoDisplay.innerHTML = tic + 1
        console.log(tic)
    })



})
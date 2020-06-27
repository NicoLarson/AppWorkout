document.addEventListener('DOMContentLoaded', () => {

    const chronoDisplay = document.getElementById("chrono")
    const startBtn = document.getElementById("start")
    const pauseBtn = document.getElementById("pause")
    const stopBtn = document.getElementById("stop")


let sec = 0
let min = 0
let hour = 0
let tic = 0

//Fonction qui ajoute des secondes
let chrono = () =>{
tic ++
    //A 60 sec faire 1min ...
if(tic>59){
    min ++
    tic = 0
}
sec = tic
chronoDisplay.innerHTML = `${hour} : ${min} : ${sec}`
}

startBtn.addEventListener('click', () => {
    setInterval(chrono,1000)
})
//Stoper le chronometre

//Mettre en pause le chronomètre

})
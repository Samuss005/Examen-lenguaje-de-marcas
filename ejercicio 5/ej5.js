let segundos = 0
let intervalo = null

const tiempo = document.getElementById("tiempo")
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const resetBrn = document.getElementById ("reset")

function actualizar(){
    segundos ++
}

let minutos = Math.floor(segundos/ 60)
let seg = segundos % 60

if ( minutos <10){
    minutos = "0" + minutos
}

if(seg < 10){
    seg = "0" + seg
}

tiempo.textContent = minutos + ":" + seg

if(segundos >= 10){
    tiempo.style.color = "red"
}

btnStart 
//variables
const numeros = [3, 18, 7, 22, 5, 11, 100, 1, 45, 8]

//recorrer el array

for( let i = 0; i <numeros.length; i++){
    let num = numeros[i]
}

//par o impar
if(num % 2 === 0){
    console.log(`${num} es par`)
}else{
    console.log(`${num} es inpar`)
}


//mayor o igual  a 18

if(num >= 18){
    console.log ("(mayor de edad)")
    
}

//multiplo de 5

if(num% 5 === 0){
    console.log("(multiplo de 5)")
}

//suma

let suma = 0
let i = 0

while( i < numeros.length){
    suma +=numeros[i]
    i++
}

console.log(`suma total: ${suma}`)

//switch

let nota = Number(prompt("introduce una nota del 0 al 10"))

if(isNaN(nota) || nota < 0 || nota > 10){
    console.log("Nota no valida")
}else {
    switch(true){
        case ( nota >= 0 && nota <= 4):
        console.log("insuficiente")
        break

        case (nota === 5):
        console.log("suficiente")
        break

        case ( nota === 6):
        console.log("Bien")
        break

        case(nota >= 7 && nota <= 8):
        console.log("Notable")
        break

        case(nota >= 9 && nota <= 10):
        console.log("Sobresaliente")

    }
}

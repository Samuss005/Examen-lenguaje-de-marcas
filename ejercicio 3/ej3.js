//es par

function esPar(n){
    return n % 2 === 0
}

//maximo

function maximo (arr){
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
//invertir
function invertir(arr){
    let nuevo = []
    for ( let i = arr.length - 1; i >= 0; i--){
        nuevo.push(arr[i])
    }
    return nuevo
}

//contar vocales
function contrarVocales(texto){
    let contador = 0
    const vocales= "aeiouáéíóúAEIOUÁÉÍÓÚ"
    for(let i = 0; i < texto.length; i ++){
        if(vocales.includes(texto[i]))
            contador ++
    }
    return contador
}

//saludo

function saludo(nombre, idioma = "es"){
    if(idioma === "en"){
        return `Hello, ${nombre}`
    }
    return `Hola, ${nombre}`
}

//pruebas

console.log(esPar(4))
console.log(maximo([3, 7, 2, 9]))
console.log(invertir([1, 2, 3]))
console.log(contrarVocales("Hola mundo"))
console.log(saludo("Samuele"))
console.log(saludo("Samuele", "en"))


const input = document.getElementById("inputTarea")
const boton = document.getElementById("btnAñadir")
const lista = document.getElementById("lista")

const contador = document.getElementById("contador")

function actualizarContador(){
    const pendientes = document.querySelectorAll("li:not(.completada)")
    contador.textContent = pendientes.length
}

function añadirTarea (){
    const texto = input.ariaValueMax.trim()

    if(texto === " "){
        return
    }

    const li = document.createElement("li")
    li.textContent = texto

    //marcar como completada
    li.addEventListener("click", () => {
        li.classList.toggle("completada")
        actualizarContador()
    })

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "X"

    btnEliminar.addEventListener("click", (e) => {
        e.stopPropagation()
        li.remove()
        actualizarContador()
    })

    li.appendChild(btnEliminar)
    lista.appendChild(li)

    input.value = " "
    actualizarContador()
}

boton.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        añadirTarea()
    }
})
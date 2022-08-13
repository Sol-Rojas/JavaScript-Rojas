const productos = document.getElementById(`productos`)
const boton = document.getElementById(`boton`)
const clientes = document.getElementById("clientes")
const verUsuarios = document.getElementById("verUsuarios")
const consultas = document.getElementById("consultas")
const eliminarConsulta = document.getElementById("eliminarConsulta")

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Cliente {
    constructor (email, nombre, descripcion) {
        this.email = email;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

const instrumento1 = new Producto ("Piano 🎹", 28000)
const instrumento2 = new Producto ("Guitarra electrica 🎸", 39000)
const instrumento3 = new Producto ("Violin 🎻", 18000)
const instrumento4 = new Producto ("Trompeta 🎷", 60000)
const instrumento5 = new Producto ("Saxofon 🎺", 90000)

const instrumentos = [instrumento1, instrumento2, instrumento3, instrumento4, instrumento5]
let usuarios = []

productos.addEventListener(`click`, () => {

    boton.innerHTML = ""
            instrumentos.forEach(instrumento => {
                boton.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                       <h5 class="card-title">${instrumento.nombre}</h5>
                       <p class="card-text">Precio: $${instrumento.precio}</p
                   </div>
               </div>
               
               `
            })
})

if (localStorage.getItem("usuarios")) {

    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}else{
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

clientes.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const datForm = new FormData (evento.target)
    const consulta = new Cliente (datForm.get("email"), datForm.get("nombre"), datForm.get("descripcion"))

    usuarios.push(consulta)

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    clientes.reset()
})

verUsuarios.addEventListener(`click`, () => {

    const usuariosStorage = JSON.parse(localStorage.getItem("usuarios"))

    consultas.innerHTML = ""

    usuariosStorage.forEach((consulta, indice) => {
        consultas.innerHTML += `
        <div class="clicks" id ="consulta${indice}" style="width: 18rem;">
           <div class="card-body">
                <h5 class="card-title">${consulta.nombre}</h5>
                <p class="card-text"> ${consulta.descripcion}</p>
                <button class="btn btn-danger">Eliminar</button>
           </div>
       </div>`
    })

    usuariosStorage.forEach((consulta, indice) => {
        document.getElementById(`consulta${indice}`).children[0].children[2].addEventListener(`click`, () => {
            document.getElementById(`consulta${indice}`).remove()
            usuarios.splice(indice,1)
            localStorage.setItem(`usuarios`, JSON.stringify(usuarios))
        })
    })
})
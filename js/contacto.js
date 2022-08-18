const clientes = document.getElementById("clientes")
const verUsuarios = document.getElementById("verUsuarios")
const consultas = document.getElementById("consultas")

class Cliente {
    constructor (email, nombre, descripcion) {
        this.email = email;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

let usuarios = []

const users = JSON.parse(localStorage.getItem("usuarios")) ?? localStorage.setItem("usuarios", JSON.stringify(usuarios))

clientes.addEventListener("submit", (evento) => {
    evento.preventDefault()

    Swal.fire({
        icon: 'success',
        title: '<h3 id="titulo-tarjeta">Enviado<h3>',
        text: 'En los próximos dias te estara llegando información',
        footer: '<a href="">Volver</a>'
    })

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
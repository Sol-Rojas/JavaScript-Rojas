const clientes = document.getElementById("clientes")

class Cliente {
    constructor (email, nombre, descripcion) {
        this.email = email;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

let usuarios = []

const users = JSON.parse(localStorage.getItem("usuarios")) ?? localStorage.setItem("usuarios", JSON.stringify(usuarios))

// Con el evento submit se guarda en el localStorage las consultas hechas por el usuario
clientes.addEventListener("submit", (evento) => {
    evento.preventDefault()

    Swal.fire({
        icon: 'success',
        title: '<h3>Enviado<h3>',
        text: 'En los próximos dias te estara llegando información',
        footer: '<a href="#">Volver</a>'
    })

    const datForm = new FormData (evento.target)
    const consulta = new Cliente (datForm.get("email"), datForm.get("nombre"), datForm.get("descripcion"))

    usuarios.push(consulta)

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    clientes.reset()
})
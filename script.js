const saludar = document.getElementById("titulo")

const user = {
    username: prompt("Ingrese su nombre"),
}
titulo.innerText = `¡Bienvenido a SoundSarc ${user.username}!`

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const instrumento1 = new Producto("Piano 🎹", 28000)
const instrumento2 = new Producto("Guitarra electrica 🎸", 39000)
const instrumento3 = new Producto("Violin 🎻", 18000)
const instrumento4 = new Producto("Trompeta 🎷", 60000)
const instrumento5 = new Producto("Saxofon 🎺", 90000)

const instrumentos = [instrumento1, instrumento2, instrumento3, instrumento4, instrumento5]

const ventas = document.getElementById("productos")
const envios = document.getElementById("envio")

let producto
do {
    producto = parseInt(prompt(`Bienvenido a SoundSarc🎼 \nSeleccione una opción:\n\n 1. Productos \n\n 2. Envios \n\n 3. Salir`))
    switch (producto) {
        case 1:
            instrumentos.forEach(instrumento => {
                ventas.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${instrumento.nombre}</h5>
                        <p class="card-text">Precio: $${instrumento.precio}</p
                    </div>
                </div>
                 `
            })
            break
        case 2:
            envios.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Envios</h5>
                    <p class="card-text">CABA: $400</p>
                    <p class="card-text">GBA: $500</p>
                </div>
            </div>
             `
            break
        case 3:
            break
        default:
            alert("Ingrese una opción válida")
            break
    }
} while (producto != 3);
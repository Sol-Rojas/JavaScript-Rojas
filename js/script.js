const productos = document.getElementById(`productos`)
const boton = document.getElementById(`boton`)

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const instrumento1 = new Producto ("Piano 🎹", 28000)
const instrumento2 = new Producto ("Guitarra electrica 🎸", 39000)
const instrumento3 = new Producto ("Violin 🎻", 18000)
const instrumento4 = new Producto ("Trompeta 🎷", 60000)
const instrumento5 = new Producto ("Saxofon 🎺", 90000)

const instrumentos = [instrumento1, instrumento2, instrumento3, instrumento4, instrumento5]

productos.addEventListener(`click`, () => {

    boton.innerHTML = ""
            instrumentos.forEach(instrumento => {
                boton.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                       <h5 class="card-title">${instrumento.nombre}</h5>
                       <p class="card-text">Precio: $${instrumento.precio}</p
                   </div>
               </div>               `
            })
})
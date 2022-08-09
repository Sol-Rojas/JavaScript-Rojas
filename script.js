const cuentaUser = document.getElementById(`cuentaUser`)
const productos = document.getElementById(`productos`)

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
            instrumentos.forEach(instrumento => {
                botone.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                       <h5 class="card-title">${instrumento.nombre}</h5>
                       <p class="card-text">Precio: $${instrumento.precio}</p
                   </div>
               </div>
               
               `
            })
})


cuentaUser.addEventListener(`click`, () => {
    botones.innerHTML =
    `<div class="tituloContacto">
            <h2>CONTACTO</h2>
            <p class="contacto">¡No dudes en consultarnos ante cualquier duda!</p>
            <p class="contacto">SOUNDSARC@GMAIL.COM</p>
            <a class="contacto" href="https://api.whatsapp.com/send/?phone=5491144948424&text&app_absent=0">TEL: 011 4494 8424</a>
        </div>
        <form class="row g-3">
            <div class="col-md-6">
                <input type="email" class="form-control" id="inputEmail4" placeholder="Name@gmail.com">
            </div>
            <div class="col-md-6">
                <input class="form-control" id="Nombre" placeholder="Nombre">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" id="observaciones" placeholder="Tengo una duda con..">
            </div>
            <div class="col-md-4">
                <label for="localidades" class="form-label">Localidad</label>
                <select id="inputState" class="form-select">
                    <option selected>Seleccione..</option>
                    <option>CABA</option>
                    <option>Ezeiza</option>
                    <option>Lanús</option>
                    <option>La Matanza</option>
                    <option>Lomas de Zamora</option>
                    <option>Merlo</option>
                    <option>Moreno</option>
                    <option>Quilmes</option>
                </select>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="gridCheck">Recibir más información</label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-dark">Enviar</button>
            </div>
        </form>
        `
})
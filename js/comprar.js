class Producto {
  constructor(nombre, marca, precio, stock, img) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
    this.cant = 1;
  }
}

localStorage.setItem('carrito', JSON.stringify([]))

const instrumentos = document.getElementById("instrumentos");
const cartBody = document.getElementById("cartBody");
const cart = document.getElementById("cart");
const total = document.getElementById("total");
const comprar = document.getElementById("comprar");
const products = []

let acum;

fetch('../json/productos.json')

// Convertir JSON en objeto
  .then(response => response.json())
  .then(productos => {
    productos.forEach((producto, indice) => {
      instrumentos.innerHTML += `
      <div class="card" id= "producto${indice}">
        <img src="${producto.img}" class="card-img-top" alt="producto">
        <div class="card-body">
           <h5 class="card-title">${producto.nombre}</h5>
           <p class="card-text">Marca: ${producto.marca}</p>
           <p class="card-text">Precio: $${producto.precio}</p>
           <p class="card-text">Stock: ${producto.stock}</p>
           <div class=""d-flex">
           <button id="buy${indice}" class="btn comprar btn-dark">Comprar</button>
           <button id="boton${indice}" class="btn comprar btn-darkk">Agregar al carrito</button>
           </div>
        </div>
      </div>
      `
    })

    // Comprar de inmediato
    productos.forEach((producto, indice) => {
      document.getElementById(`buy${indice}`).addEventListener(`click`, () => {
  
        Swal.fire({
          icon: 'success',
          title: '<h3>¡Gracias por tu compra!<h3>',
          footer: '<a href="">Volver</a>'
        })
      })
    })

    // Carrito localStorage
    productos.forEach((producto, indice) => {
      document.getElementById(`boton${indice}`).addEventListener(`click`, () => {
        if (products.find(prod => prod.nombre == producto.nombre)) {

          let index = products.findIndex(prod => prod.nombre == producto.nombre)

          products[index].cant++

          localStorage.setItem(`carrito`, JSON.stringify(products))

        } else {

          let newProduct = new Producto(producto.nombre, producto.marca, producto.precio, producto.stock, producto.img)

          products.push(newProduct)

          localStorage.setItem(`carrito`, JSON.stringify(products))

          Toastify({
            text: `Producto agregado`,
            duration: 2000,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
              background: "rgb(219, 149, 149)",
            }
          }).showToast();
        }
      })
    })
  })

// ------------------------------------- FUNCIONES - EVENTOS --------------------------------------------------

// Monto total del carrito a pagar
function compraCarrito(prodStorage) {

  acum = 0;

  prodStorage.forEach((prodCarrito) => {
    acum += prodCarrito.precio * prodCarrito.cant
  })

  if (acum == 0) {

    total.innerHTML = ""

    cartBody.innerHTML = `<p>Tu carrito está vacio</p>`

  } else {
    total.innerHTML = `<div class="clicks">Importe total : $${new Intl.NumberFormat("de-DE").format(acum)}</div>`
  }
}

function eventosCarrito(prodStorage) {

  // Eliminar producto del carrito
  prodStorage.forEach((prodCarrito, indice) => {
    document.getElementById(`eliminarProd${indice}`).addEventListener(`click`, () => {

      Toastify({
        text: `Producto ${prodCarrito.nombre} eliminado`,
        duration: 2000,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "rgb(202, 38, 38)",
        }
      }).showToast();

      document.getElementById(`prodCarrito${indice}`).remove()

      products.splice(indice, 1)

      localStorage.setItem(`carrito`, JSON.stringify(products))

      cargarEnCarrito(JSON.parse(localStorage.getItem(`carrito`)))
    })
  })

  // Agregar más de un mismo producto al carrito
  prodStorage.forEach((prodCarrito, indice) => {
    document.getElementById(`agregar${indice}`).addEventListener(`click`, () => {

      if (products[indice].cant < products[indice].stock) {

        products[indice].cant++

        localStorage.setItem(`carrito`, JSON.stringify(products))

        cargarEnCarrito(JSON.parse(localStorage.getItem(`carrito`)))
      } else {
        Swal.fire({
          icon: 'error',
          title: '<h3>Sin stock<h3>',
          footer: '<a href="">Volver</a>'
        })
      }
      
    })
  })

  // Quitar la cantidad de un mismo producto
  prodStorage.forEach((prodCarrito, indice) => {
    document.getElementById(`quit${indice}`).addEventListener(`click`, () => {

      if (products[indice].cant > 1) {

        products[indice].cant--

        localStorage.setItem(`carrito`, JSON.stringify(products))

        cargarEnCarrito(JSON.parse(localStorage.getItem(`carrito`)))
      }
    })
  })

}

// Mostrar productos en carrito
function cargarEnCarrito(prodStorage) {

  cartBody.innerHTML = ""

  prodStorage.forEach((prodCarrito, indice) => {

    cartBody.innerHTML += `
    <div class="card  mb-3" id="prodCarrito${indice}" >
        <div class="row g-0">
            <div class="col-md-4">
                <img class="card-img-top imgCarrito" src="${prodCarrito.img}" alt="producto en carrito">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${prodCarrito.nombre}</h5>
                    <div class="colum">
                      <p class="monto">$${new Intl.NumberFormat("de-DE").format(prodCarrito.precio * prodCarrito.cant)}</p>
                      <button class="btn btn-outline-secondary" id="agregar${indice}">+</button>
                      <button class="btn buton btn-outline-secondary" id="quit${indice}">-</button>
                    </div>
                    <p class="card-text">Cantidad: ${prodCarrito.cant}</p>
                    <button class="btn btn-danger" id="eliminarProd${indice}"><img src="https://img.icons8.com/ios-glyphs/25/f0f8ff/trash--v1.png"/></button>
                </div>
            </div>
        </div>
    </div> `
  })

  eventosCarrito(prodStorage)
  compraCarrito(prodStorage)
}

cart.addEventListener(`click`, () => {

  let prodStorage = JSON.parse(localStorage.getItem(`carrito`))

  cargarEnCarrito(prodStorage)
})

// Comprar carrito
comprar.addEventListener(`click`, () => {

  cartBody.innerHTML = `<p>Tu carrito está vacio</p>`
  total.innerHTML = ""

  localStorage.setItem(`carrito`, JSON.stringify([]))

  Swal.fire({
    icon: 'success',
    title: '<h3>¡Gracias por tu compra!<h3>',
    footer: '<a href="">Volver</a>'
  })
})
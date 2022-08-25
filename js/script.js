const boton = document.getElementById(`boton`)

fetch('./json/productos.json')
.then(response => response.json())

.then(productos => {
    productos.forEach((producto, indice) => {
      boton.innerHTML += `
      <div class="card" id= "producto${indice}">
        <img src="${producto.img}" class="card-img-top" alt="producto">
        <div class="card-body">
           <h5 class="card-title">${producto.nombre}</h5>
           <p class="card-text">Marca: ${producto.marca}</p>
           <p class="card-text">Precio: $${producto.precio}</p>
           <p class="card-text">Stock: ${producto.stock}</p>
           <button class="btn comprar btn-dark">Comprar</button>
        </div>
      </div>
      `
    })
})
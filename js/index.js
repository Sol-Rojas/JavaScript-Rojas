const divProductoss = document.getElementById("divProductoss")
const divProductoss2 = document.getElementById("divProductoss2")
const subtitulo1 = document.getElementById("subtitulo1")
const subtitulo2 = document.getElementById("subtitulo2")
const inputProducto = document.getElementById("inputProducto")

const jsonProductos = async () => {
    const response = await fetch('../json/productos.json')
    const productos = await response.json()
    return productos
}

fetch('../json/productos.json')
// Mostrar productos 
.then(response => response.json())
.then(productos => {
    productos.forEach((producto, indice) => {
        divProductoss.innerHTML += `
            <div class="cardIndex " id="producto${indice}" >
                <img src="${producto.img}" class=" imgIndex"  alt="...">
                <div class="card-body">
                    <p class="card-title">${producto.nombre}</p>
                    <p class="card-text">${producto.marca}</p>
                    <a class="btn btn-darkk" href="./secciones/comprar.html"> Ir a comprar</a>
                </div>
            </div>`
    })
})

function mostrarProductos(instrument) {
    instrument.forEach((producto, indice) => {
        divProductoss2.innerHTML += `
            <div class="cardIndex " id="producto${indice}" >
                <img src="${producto.img}" class=" imgIndex"  alt="producto">
                <div class="card-body">
                    <p class="card-title">${producto.nombre}</p>
                    <p class="card-text">${producto.marca}</p>
                    <a class="btn btn-darkk" href="./secciones/comprar.html"> Ir a comprar </a>
                </div>
            </div>`
    });

}

// Filtrar producto ingresado en input
inputProducto.addEventListener('input', () => {

    let inp = inputProducto.value

    jsonProductos().then(productos => {

        const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(inp.toLowerCase()))

        divProductoss.innerHTML = ""
        subtitulo2.innerHTML = ""
        divProductoss2.innerHTML =""
        subtitulo1.innerHTML = `Productos relacionados a tu búsqueda`

        mostrarProductos(productosFiltrados)
        
    })
})


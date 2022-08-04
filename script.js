class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const instrumento1 = new Producto ("piano", 18000)
const instrumento2 = new Producto ("guitarra electrica", 30000)
const instrumento3 = new Producto ("violin", 17000)
const instrumento4 = new Producto ("trompeta", 35000)
const instrumento5 = new Producto ("saxofon", 80000)

const instrumentos = [instrumento1, instrumento2, instrumento3, instrumento4, instrumento5]
const noEncontrados = []

let producto
do {
    producto = parseInt(prompt(`Bienvenido a SoundSarc🎼 \nSeleccione una opción:\n 1. Piano🎹 \n 2. Guitarra🎸\n 3. Violin🎻\n 4. Saxofon🎷\n 5. Trompeta🎺\n 6. Ver todos los precios en la consola\n 7. Lo más económico \n 8. Comprar todo \n 9. No encontre el instrumento que buscaba \n 10. Salir`))
    switch (producto){
        case 1:
            alert ("Su precio es de $18.000")    
            break      
        case 2:
            alert ("Su precio es de $30.000")   
            break        
        case 3:
            alert ("Su precio es de $17.000")
             break
        case 4: 
            alert ("Su precio es de $35.000")
            break
        case 5:
            alert ("Su precio es de $80.000")
            break
        case 6:
            console.table(instrumentos)  
            break 
        case 7:
            console.log(instrumentos.find(instrumentArray => instrumentArray.precio == 30000))
            break
        case 8:
            const sumarPrecios = instrumentos.map(instrumentosArray => instrumentosArray.precio)
            console.log(sumarPrecios)
            console.log(sumarPrecios.reduce((ant,post) => ant + post, 0))
            alert("Para ver el total de su compra vea la consola :D")
            break
        case 9:
            noEncontrados.push(prompt("Ingrese el instrumento que no encontro para que la próxima lo tengamos"))
            console.log(noEncontrados)
            alert ("Verificaremos si podemos conseguir lo que solicitó\n Hasta la próxima!")
            break
        case 10:
            alert(`Hasta luego!`)
            break
        default:     
            alert ("Ingrese una opción válida")
            break
    }    
} while (producto !=10);
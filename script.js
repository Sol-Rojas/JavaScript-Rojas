function mostrar(){

    let producto
    do {
        producto = parseInt(prompt(`Hola ${usuario} ¿Qué precio desea consultar?:\n\n 1.Piano🎹 \n 2.Guitarra🎸\n 3.Violin🎻 \n 4. Regresar\n`))

        if (producto == 1){
            alert ("Su precio es de $15.000")
           
        } else if (producto == 2){
            alert ("Su precio es de $12.000")
            
        } else if (producto == 3) {
            alert ("Su precio es de $16.000")
           
        } else if (producto == 4) {
        break

        } else{
        alert ("Ingrese una opción válida")
        }
    
    } while (ciudad !=4); 
}

let opciones
let usuario

do {
    opciones= parseInt(prompt("Bienvenido a SoundSarc🎼, seleccione una opcion\n\n 1.Ingresar cuenta \n 2.Costo del envio \n 3. Salir de la aplicacion\n"))
    
    switch(opciones){
        case 1:
            usuario=prompt("Ingrese su nombre")
            mostrar()
            break
        case 2:
            alert("Los envios tienen un costo de $500")
            break
    }

} while (opciones != 3);

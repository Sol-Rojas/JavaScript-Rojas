
let compra
let envio = 500

do{
    alert ("\nBienvenido a SoundSarc\n\nUsted realizó una compra, veamos el total de tu compra más el envio")

    
    compra = parseFloat(prompt("Ingrese el valor de su compra"))

    if(isNaN(compra)){
        alert("Ingrese un valor numérico")
    }
    if(compra === 0){
        alert("Si su valor es 0 aparecerá unicamente el costo del envio\n\nVuelva a ingresar el valor de su compra para saber el costo total de su compra")
    }
   

}while((isNaN(compra))||(compra === 0))

alert (`Su monto a pagar es de : $${compra + envio}\n\n  ¡Gracias por tu compra!`)




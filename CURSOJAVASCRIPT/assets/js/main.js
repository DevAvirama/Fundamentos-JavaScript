let titulo = document.getElementById("demo").innerHTML = "Hola Mundo desde JavaScript"
/**
 * Salida de dattos en un documento HTML
 */

window.alert("Hola soy Santiago")
console.log("Hola soy un mensaje en la consola")

/**Declaracion de variables */

let a,b,c;

a = 5;
b = 10
c = a + b;

let resultado = document.getElementById("resultado").innerHTML = "El resultado de la suma es: " + c;

let edad = document.getElementById("edad")
let btnEnviar = document.getElementById("btnEnviar")
let verificacionEdad = document.getElementById("verificacion-edad")

function guardarEdad(){
    let valorEdad = edad.value
    alert("La edad ingresada es: " + valorEdad)
}

btnEnviar.addEventListener("click", guardarEdad())


if(valorEdad >= 18){
    verificacionEdad.innerHTML = "Eres mayor de edad"
} else {
    verificacionEdad.innerHTML = "Eres menor de edad"
}
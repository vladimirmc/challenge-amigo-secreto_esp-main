//variables
let nombreDeAmigo = " ";
let intentos = 0;
let numeroMaximo = 10;
// crea array de amigos
let amigos = [];
//funcion para asignar texto
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// función para agregar amigos
function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let nombreDeAmigo = document.getElementById('amigo').value;
    
    //Validar la entrada
    if (nombreDeAmigo == ''){
        alert ("Por favor, inserte un nombre.");
    }  else {
        //Actualizar el array de amigos
        amigos.push(nombreDeAmigo); 
        alert(nombreDeAmigo);
        //Limpiar el campo de entrada   
        document.querySelector('#amigo').value = '';     
    } 
    asignarTextoElemento('p',`Nombre del Amigo:${nombreDeAmigo}`);
    console.log(nombreDeAmigo);
    return nombreDeAmigo;
}


// crea array de amigos
let amigos = [];

// función para agregar amigos
function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let nombreDeAmigo = document.getElementById('amigo').value;

        //Validar la entrada
    if (nombreDeAmigo == ''){
        alert ("Por favor, inserte un nombre.");
    }  else {
        //Validar si el nombre ingresado es valido
        if (soloLetras(nombreDeAmigo)) {
            //Chequear que el amigo no este repetido
            if (amigos.includes(nombreDeAmigo)) {
                document.querySelector('#amigo').value = '';
                alert ("Amigo ya fue ingresado anteriomente");    
            } else {
                //Actualizar el array de amigos
                amigos.push(nombreDeAmigo); 
                //Limpiar el campo de entrada   
                document.querySelector('#amigo').value = '';
                listarLosAmigos();     
                return nombreDeAmigo;
            }      
        } 
        else {
            document.querySelector('#amigo').value = '';
            alert ("El nombre ingresado contiene Nros. y/o caracteres no permitidos");
        }
    }
}

function listarLosAmigos() {
    //Obtener el elemento de la lista, para seleccionar la lista donde se mostrarán los amigos.
    let listaAmigos = document.getElementById("listaAmigos");
    //Limpiar la lista existente, para asegurarse de que no haya duplicados al actualizar.
    listaAmigos.innerHTML = "";

    // Agregar nuevos elementos 
    for (let i=0; i<amigos.length; i++) {
        //crear elementos de lista (<li>) para cada título
        let item = document.createElement("li");
        //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
    return;
}

function sortearAmigo() {
    //Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (amigos.length <= 0){
        alert ("No hay amigos ingresados");
    }   else {
        //Generar un índice aleatorio
        let indice =  Math.floor(Math.random()*amigos.length);
        console.log(indice);
        //Obtener el nombre sorteado
        let amigoSorteado = amigos[indice];
        console.log(amigoSorteado);
        //Mostrar el resultado
        asignarTextoElemento('ul',`El Amigo Secreto es:${amigoSorteado}`);  
        //Deshabilitar botones 
        document.getElementById('reinicioBtn').removeAttribute('disabled');
        //Deshabilitar boton sorteo
        document.querySelector('#sorteoBtn').setAttribute('disabled','true');
    } 
    return; 
}

//funcion para reiniciar sorteo
function reiniciarSorteo() {
    document.querySelector('#amigo').value = '';  
    console.log("funcion reiniciarSorteo");
    amigos.splice(" ", amigos.length);
    //Deshabilitar el botón de Reinicio
    document.querySelector('#reinicioBtn').setAttribute('disabled','true');
    //Habilitar boton de Sorteo
    document.querySelector('#sorteoBtn').setAttribute('disabled','false');
    return;
}

//funcion para asignar texto
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//funcion para validar solo letras
function soloLetras(input) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(input);
}

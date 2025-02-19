//variables
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
    //Validar si el nombre ingresado es valido
    verificar(nombreDeAmigo);
    //Validar la entrada
    if (nombreDeAmigo == ''){
        alert ("Por favor, inserte un nombre.");
    }  else {
        //Chequear que el amigo no este repetido
        if (amigos.includes(nombreDeAmigo)) {
            document.querySelector('#amigo').value = '';
            alert ("Amigo ya fue ingresado anteriomente");    
            return agregarAmigo();
        } else {
         //Actualizar el array de amigos
        amigos.push(nombreDeAmigo); 
        //Limpiar el campo de entrada   
        document.querySelector('#amigo').value = '';
        listarLosAmigos();     
            return nombreDeAmigo;
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
        }
   return;
}

// La siguiente funcion valida el elemento input
function validar(nombreDeAmigo) {
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;

    // El input que queremos validar
    //const input = document.forms['validationForm']['letras'];
    let input = nombreDeAmigo;
    //El div con el mensaje de advertencia:
    const message = document.getElementById('message');

    input.willValidate = false;

    // El tamaño maximo para nuestro input
    const maximo = 15;

    // El pattern que vamos a comprobar
    const pattern = new RegExp('^[A-Z]+$', 'i');

    // Primera validacion, si input esta vacio entonces no es valido
    if(!input.value) {
      isValid = false;
    } else {
      // Segunda validacion, si input es mayor que 15
      if(input.value.length > maximo) {
        isValid = false;
      } else {
        // Tercera validacion, si input contiene caracteres diferentes a los permitidos
        if(!pattern.test(input.value)){ 
        // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
        // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
          isValid = false;
        } else {
          // Si pasamos todas la validaciones anteriores, entonces el input es valido
          isValid = true;
        }
      }
    }

    //Ahora coloreamos el borde de nuestro input
    if(!isValid) {
      // rojo: no es valido
      input.style.borderColor = 'salmon'; // me parece que 'salmon' es un poco menos agresivo que 'red'
      // mostramos mensaje
      message.hidden = false;
    } else {
      // verde: si es valido
      input.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
      // ocultamos mensaje;
      message.hidden = true;
    }

    // devolvemos el valor de isValid
    return isValid;
  }

  // Función que verifica si el campo es válido antes de realizar cualquier otra acción.
  function verificar() {
    const valido = validar();
    if (!valido) {
      alert('El campo no es válido.');
    } else {
      alert('El campo es válido');
    }
  }
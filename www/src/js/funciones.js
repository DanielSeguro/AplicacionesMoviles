var contadorElemento = document.getElementById("contador");
var miBoton = document.getElementById("miBoton");

function aumentarContador() {

  var contador = parseInt(localStorage.getItem("contador")) || 0;
  contador++;
  

  localStorage.setItem("contador", contador);
  

  contadorElemento.textContent = contador;
  
 
  window.location.href = "azul.html";
}



var valorElemento = document.getElementById("contador");

// Obtenemos el valor del localStorage
var valorLocalStorage = localStorage.getItem("contador");

// Comprobamos si existe un valor en el localStorage
if (valorLocalStorage) {
  // Actualizamos el contenido del elemento HTML
  valorElemento.textContent = valorLocalStorage;
} else {
  valorElemento.textContent = "0";
}

miBoton.addEventListener("click", aumentarContador);

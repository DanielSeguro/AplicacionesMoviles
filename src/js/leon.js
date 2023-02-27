var valorElemento = document.getElementById("contador");

var valorLocalStorage = localStorage.getItem("contador");

if (valorLocalStorage) {

  valorElemento.textContent = valorLocalStorage;
} else {
  valorElemento.textContent = "No se ha encontrado ningún valor en el LocalStorage.";
}

var contadorElemento = document.getElementById("contador");
var miBoton = document.getElementById("miBoton");

function aumentarContador() {

  var contador = parseInt(localStorage.getItem("contador")) || 0;
  contador++;
  

  localStorage.setItem("contador", contador);
  

  contadorElemento.textContent = contador;
  
 
  window.location.href = "perro.html";
}

miBoton.addEventListener("click", aumentarContador);

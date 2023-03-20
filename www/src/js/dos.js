var valorElemento = document.getElementById("contador");

var valorLocalStorage = localStorage.getItem("contador");

if (valorLocalStorage) {

  valorElemento.textContent = valorLocalStorage;
} else {
  valorElemento.textContent = "0";
}

var contadorElemento = document.getElementById("contador");
var miBoton = document.getElementById("miBoton");

function aumentarContador() {

  var contador = parseInt(localStorage.getItem("contador")) || 0;
  contador++;
  

  localStorage.setItem("contador", contador);
  

  contadorElemento.textContent = contador;
  
 
  window.location.href = "tres.html";
}

miBoton.addEventListener("click", aumentarContador);

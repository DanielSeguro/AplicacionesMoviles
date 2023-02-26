function contar1() {
    let contador = 0;
  
    const miBoton = document.getElementById("miBoton");
  
    miBoton.addEventListener("click", function() {
      contador += 1;
      window.location.href = "azul.html";
    });
  }
  
  
// Esta linea garantiza que todo lo que se ejecute dentro de ready
// se ejecute solo cuando el html esté 100% cargado
$(document).ready(() => {
  console.log("JQuery Cargado");


  // Cuando enviamos el formulario completo, mostramos el feedback
  $("#formulario-principal").on("submit", (e) => {
    e.preventDefault(); // Esta linea es importante para evitar que la página se recargue al enviar le formulario
    mostrarFeedback();
    //abrirFeedback();
    trasladarDatosDelFormCompletoAFeedback();
  });
});

function mostrarFeedback() {
  document.getElementById('feedback').style.display = 'block';
  document.getElementById('caja').style.display = 'none';
  

}

function cerrarPopup() {

}


function trasladarDatosDelFormCompletoAFeedback() {
  const inputNombre = $("#nombre");
  const inputEmail = $("#email");

  const nombre = inputNombre.val();
  const email = inputEmail.val();

  const spanNombre = $("#dato-nombre");
  const spanEmail = $("#dato-email");

  spanNombre.html(nombre);
  spanEmail.html(email);
}


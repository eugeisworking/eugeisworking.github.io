// Esta linea garantiza que todo lo que se ejecute dentro de ready
// se ejecute solo cuando el html esté 100% cargado
$(document).ready(() => {
  console.log("JQuery Cargado");

  // Cuando hacemos click en "suscribirme" de los form abreviados, abrimos el popup del form completo
  $(".miniform-submit").click(() => {
    abrirPopupForm();
    trasladarMailDeMiniformAFormCompleto();
  });

  // Cuando hacemos click en la cruz de los popup, los cerramos
  $(".cerrar").click(() => {
    cerrarPopup();
  });

  // Cuando enviamos el formulario completo, mostramos el feedback
  $("#formulario-principal").on("submit", (e) => {
    e.preventDefault(); // Esta linea es importante para evitar que la página se recargue al enviar le formulario
    abrirFeedback();
    trasladarDatosDelFormCompletoAFeedback();
  });
});

function mostrarFeedback() {
  document.getElementById('feedback').style.display = 'block';

}

function cerrarPopup() {

}

function abrirFeedback() {
  $(".popup-contenedor.formulario").addClass("oculto");
  $(".popup-contenedor.feedback").removeClass("oculto");

}

function trasladarDatosDelFormCompletoAFeedback() {
  const inputNombre = $("#nombre");
  const inputEmail = $("#email");

  const nombre = inputNombre.val();
  const email = inputEmail.val();

  const spanNombre = $("#dato-nombre");
  const spanEmail = $("#dato-email");

  spanNombre.html(nombre + " " + apellido);
  spanEmail.html(email);
}


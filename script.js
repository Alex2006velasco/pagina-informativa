// Esperar 3 segundos (3000 milisegundos) antes de cargar completamente la página
window.addEventListener('load', function() {
  setTimeout(function() {
    document.body.style.visibility = 'visible'; // Hacer que el contenido sea visible después de la espera
  }, 3000); // Cambia este valor según la cantidad de tiempo que desees esperar en milisegundos
  document.body.style.visibility = 'hidden'; // Ocultar el contenido mientras se espera
});

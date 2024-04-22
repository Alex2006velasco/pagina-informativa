document.addEventListener('DOMContentLoaded', function () {
  const backgrounds = document.querySelectorAll('.background-image');
  let index = 0;

  function changeBackground() {
    backgrounds.forEach(bg => bg.classList.remove('active'));
    index = (index + 1) % backgrounds.length;
    backgrounds[index].classList.add('active');
  }

  setInterval(changeBackground, 6000); // Cambia cada 6 segundos (6000 milisegundos)
});







 
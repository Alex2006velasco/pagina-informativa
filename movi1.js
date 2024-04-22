const letters = document.getElementById('moving-letters');
let posX = 0;
let direction = 1;

function moveAndChangeColor() {
  posX += direction;
  letters.style.transform = `translateX(${posX}px)`;
  
  // Cambiar la dirección cuando las letras alcanzan ciertos límites
  const containerWidth = document.querySelector('.container').offsetWidth;
  const lettersWidth = letters.offsetWidth;
  
  if (posX + lettersWidth >= containerWidth || posX <= 0) {
    direction *= -1;
  }
  
  // Cambiar el color de las letras
  const color = generateRandomColor();
  letters.style.color = color;
  
  requestAnimationFrame(moveAndChangeColor);
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

moveAndChangeColor();






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



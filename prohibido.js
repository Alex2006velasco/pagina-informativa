const cards = document.querySelectorAll('.card');

function rearrangeCards() {
  let zIndex = 1000;
  cards.forEach((card, index) => {
    card.style.zIndex = zIndex--;
    card.style.transform = `translateX(${index * 20}px) translateY(${index * 20}px)`;
  });
}

window.addEventListener('resize', rearrangeCards);
window.onload = rearrangeCards;








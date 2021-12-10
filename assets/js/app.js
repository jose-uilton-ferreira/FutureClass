// Animations
ScrollReveal().reveal('[data-anime="left"]', {
  origin: 'left',
  duration: 1000
});

ScrollReveal().reveal('[data-anime="bottom"]', {
  origin: 'bottom',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('[data-anime="right"]', {
  origin: 'right',
  duration: 1000,
  delay: 400
});

ScrollReveal().reveal('[data-anime="top"]', {
  origin: 'top',
  duration: 1000,
  delay: 400
});

const menu = document.getElementById('menu');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
  menu.classList.add('menu--active');
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu--active');
})
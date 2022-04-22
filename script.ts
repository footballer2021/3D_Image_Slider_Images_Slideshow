const next = document.querySelector('.next');
const back = document.querySelector('.back');
const carousel = document.querySelector<HTMLElement>('.carousel_cards');
let angle = 0;

next.addEventListener('click', () => {
    angle -= 45;
    carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});

back.addEventListener('click', () => {
    angle += 45;
    carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});
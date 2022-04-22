var next = document.querySelector('.next');
var back = document.querySelector('.back');
var carousel = document.querySelector('.carousel_cards');
var angle = 0;
next.addEventListener('click', function () {
    angle -= 45;
    carousel.style.transform = "translateZ(-25rem) rotateY(".concat(angle, "deg)");
});
back.addEventListener('click', function () {
    angle += 45;
    carousel.style.transform = "translateZ(-25rem) rotateY(".concat(angle, "deg)");
});

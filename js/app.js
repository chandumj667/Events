let nav = document.querySelector(".header__nav--links");
let burger = document.querySelector(".header__nav--hamburger");
let burgerFirstLine = document.querySelector(".line_1");
let burgerSecondLine = document.querySelector(".line_2");

burger.addEventListener("click", function(){
    burgerFirstLine.classList.toggle("line_1_toggled");
    burgerSecondLine.classList.toggle("line_2_toggled");
    nav.classList.toggle("display-nav");
});
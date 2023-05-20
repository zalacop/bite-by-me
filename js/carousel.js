const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider");
const sliderPost = document.querySelectorAll(".post");
const leftButton = document.querySelector(".arrow-left");
const rightButton = document.querySelector(".arrow-right");

let counter = 1;
const postSize = sliderPost[0].clientWidth;
slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';

rightButton.addEventListener("click", () => {
   if (counter >= sliderPost.length -1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';
})

leftButton.addEventListener("click", () => {
    if (counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';
})

slider.addEventListener("transitionend", () => {
    if (sliderPost[counter].id === "lastClone") {
        slider.style.transition = "none";
        counter = sliderPost.length -2;
        slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';
    }
    if (sliderPost[counter].id === "firstClone") {
        slider.style.transition = "none";
        counter = sliderPost.length - counter;
        slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';
    }
})
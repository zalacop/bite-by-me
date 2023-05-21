const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider");
const sliderPost = document.querySelectorAll(".post");
const leftButton = document.querySelector(".arrow-left");
const rightButton = document.querySelector(".arrow-right");


// creating a counter to monitore on which post we're on
let counter = 1;

// creating the width of the post for the slides
const postSize = sliderPost[0].clientWidth;

// making carousel starting on the first post
slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';


// making carousel slide right by clicking on the right arrow
function slideRight() {
    if (counter >= sliderPost.length -1) return;
    slider.style.transition = "transform 1s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';
}

// making the carousel slide left by clicking on the left arrow
function slideLeft() {
    if (counter <= 0) return;
    slider.style.transition = "transform 1s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';
}

// making sure carousel is always showing a post
function slides() {
    if (sliderPost[counter].id === "lastPostClone") {
        slider.style.transition = "none";
        counter = sliderPost.length -2;
        slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';
    }
    if (sliderPost[counter].id === "firstPostClone") {
        slider.style.transition = "none";
        counter = sliderPost.length - counter;
        slider.style.transform = 'translateX(' + (-postSize * counter) + 'px)';
    }
}

// adding event listener to arrows and the carousel
rightButton.addEventListener("click", slideRight);
leftButton.addEventListener("click", slideLeft);
slider.addEventListener("transitionend", slides);
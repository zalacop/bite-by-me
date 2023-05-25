const menuBars = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu ul");

function activateMenu() {
    var clicks = 1;
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        clicks = 1;
    } else {
        menu.style.display =  "flex";
        clicks = 2;
    }
}

menuBars.addEventListener("click", activateMenu);


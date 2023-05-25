const menuBars = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu ul");

function activateMenu() {
    var clicks = 1;
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        clicks = 1;
    } else {
        menu.style.display =  "none";
        clicks = 2;
    }
}

menuBars.addEventListener("click", activateMenu);


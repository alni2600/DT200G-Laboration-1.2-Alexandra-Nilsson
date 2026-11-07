"use strict";

//hämtar från html och lagrar i variabler
const burgerMenu = document.getElementById("burger-menu");
const navUlEl = document.getElementById("nav-ul");

//visar menyfältet vid klick på hamburgerikon
function displayMenu () {
    //lägger till en klass som gör att menyn visas eller döljs med css
    navUlEl.classList.toggle("is-open");
}

//eventlyssnare på meny-klick
burgerMenu.addEventListener("click", event => {
    event.preventDefault();
    displayMenu();
})

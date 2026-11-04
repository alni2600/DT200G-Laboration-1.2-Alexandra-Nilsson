"use strict";

//hämtar från html och lagrar i variabler
const burgerMenu = document.getElementById("burger-menu");
const navUlEl = document.getElementById("nav-ul");

//hämtar data från galleriet på Våra tjänster-sidan
const modal = document.getElementById("gallery-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.getElementById("closeModalButton");
const galleryImages = document.querySelectorAll(".gallery img");

//om man klickar på ett foto i galleri
function openModal(src) {
        document.getElementById("modalImage").src = src;
        document.getElementById("myModal").style.display = "block";
    }
function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

//visar menyfältet vid klick på hamburgerikon
function displayMenu () {
    //lägger till en klass som gör att menyn visas eller döljs med css
    navUlEl.classList.toggle("is-open");
}

//eventlyssnare på meny-klick. if-sats för att den ska kolla om elementet finns på sidan
if (burgerMenu){
    burgerMenu.addEventListener("click", event => {
    event.preventDefault();
    displayMenu();
})
}

//loopar igenom bilderna i galleriet och lägger till en eventlyssnare
//if-sats för att alla eventlyssnare ska funka även om föregående har värde null
if (galleryImages){
    galleryImages.forEach(image => {
    image.addEventListener("click", () => {
            modal.style.display = "block";
            modalImage.src = image.src;
    })
    })
}

//if-sats som kollar om closeButton och modal finns på sidan, om inte körs inte koden och skapar därmed inga felmeddelanden
if (closeButton && modal){
    //detta är stängningsknappen när man har en bild förstorad i galleriet
    closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    })
}

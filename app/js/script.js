
//Hamburger animation
const btnHamburger = document.querySelector("#btn-hamburger");

btnHamburger.addEventListener("click", function() {
    if (btnHamburger.classList.contains("open")) {
        btnHamburger.classList.remove("open");
    } 
    else {
        btnHamburger.classList.add("open");
    }
}) 
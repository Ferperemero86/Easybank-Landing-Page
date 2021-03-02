
//Hamburger animation
const btnHamburger = document.querySelector("#btn-hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header-menu");
const headerMenuElements = headerMenu.children;

const addClasesToMenuElements = (classText) => {
    const elementsLength = headerMenuElements.length;

    for(let i=0; i < elementsLength; i++) {
        setTimeout(function() {
            if (classText === "men-el-fade-in") {
                headerMenuElements[i].classList.add(classText);
                headerMenuElements[i].classList.remove("men-el-fade-out");
            } else {
                headerMenuElements[elementsLength - 1 - i].classList.add(classText);
                headerMenuElements[elementsLength - 1 - i].classList.remove("men-el-fade-in");
            }
        }, i * 100);
    }   
}

const displayMenuElements = (display) => {
    if (display) {
        headerMenu.classList.add("fade-in");
        headerMenu.classList.remove("fade-out");
        addClasesToMenuElements("men-el-fade-in");
    } else {
        headerMenu.classList.add("fade-out");
        headerMenu.classList.remove("fade-in");
        addClasesToMenuElements("men-el-fade-out");
    }
}

btnHamburger.addEventListener("click", function() {
    if (header.classList.contains("fade-in")) {
        btnHamburger.classList.remove("open");
        overlay.classList.add("fade-out");
        overlay.classList.remove("fade-in");
        header.classList.remove("fade-in");
        displayMenuElements(false);
    }  else {
        btnHamburger.classList.add("open");
        overlay.classList.add("fade-in");
        overlay.classList.remove("fade-out");
        header.classList.add("fade-in");
        displayMenuElements(true);
    }
}) 
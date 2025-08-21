const hamMenu = document.querySelector(".ham-menu");

const offScreen = document.querySelector(".off-screen");

const main = document.querySelector(".main-container");

hamMenu.addEventListener("click", () =>{
    hamMenu.classList.toggle("active");
    offScreen.classList.toggle("active");
    main.classList.toggle("menu-active");
});
const homeSlide = document.getElementById("home");
const hamMenu = document.getElementById("ham-menu");
const aside = document.getElementById("sideMenu");
const nav = document.getElementById("nav");
const navLink = document.getElementsByClassName(".nav-link");



window.addEventListener("load", () =>{
    homeSlide.classList.add("active");
});

function updateSlide(){
    document.querySelectorAll(".slide").forEach(slide => slide.classList.remove("active"));

    const id = location.hash.slice(1);

    if(id){
        const target = document.getElementById(id);
        if(target){
            target.classList.add("active");
            aside.classList.remove("menuActive");
            nav.classList.remove("navActive");
        }
    }

}

window.addEventListener("hashchange", updateSlide);
updateSlide();

hamMenu.addEventListener("click", () => {
    aside.classList.toggle("menuActive");
    nav.classList.toggle("navActive");    
});


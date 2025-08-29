const hamMenu = document.querySelector(".ham-menu");
const menu = document.querySelector(".menu");


hamMenu.addEventListener("click", function(){
    hamMenu.classList.toggle("active");
    menu.classList.toggle("active");
});


document.addEventListener("click", function(event){

    if(hamMenu.contains(event.target)){
        return;

    }else{
        menu.classList.remove("active");
    }

});


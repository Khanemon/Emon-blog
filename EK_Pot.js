const menuIcon = document.getElementById("menu__icon2");
const menu = document.getElementById("menu-icon");

menuIcon?.addEventListener("click", ()=>{
    if(menu?.className == "hidden"){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden");
    }
} );
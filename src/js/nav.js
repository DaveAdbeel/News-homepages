const nav_menu = document.querySelector(".nav_menu");
const nav_list = document.querySelector(".nav_list");
const body = document.querySelector("body");
const imgHero = document.querySelector(".hero-image")

nav_menu.addEventListener("click", () => {
   nav_list.classList.toggle("nav_list--show");
   body.classList.toggle("body--show");
   const nav_menu_state = nav_menu.getAttribute("src");
   nav_menu_state === "./assets/images/icon-menu.svg"
      ? nav_menu.setAttribute("src", "./assets/images/icon-menu-close.svg")
      : nav_menu.setAttribute("src", "./assets/images/icon-menu.svg");
    
});

function closeNav(){
    nav_list.classList.replace("nav_list--show", "nav_list")
    console.log("objecat");
    body.classList.remove("body--show");
}

const mediaquerySM = mediaqueryList = window.matchMedia("(min-width: 880px)");

if(mediaquerySM.matches){
    if (imgHero.getAttribute("src") === "../../assets/images/image-web-3-desktop.jpg"){
        imgHero.setAttribute("src", "../../assets/images/image-web-3-mobile.jpg");
    }else{
        imgHero.setAttribute("src", "../../assets/images/image-web-3-desktop.jpg");
    }

}

mediaquerySM.addEventListener("change", function(){
    if (imgHero.getAttribute("src") === "../../assets/images/image-web-3-desktop.jpg"){
        imgHero.setAttribute("src", "../../assets/images/image-web-3-mobile.jpg");
    }else{
        imgHero.setAttribute("src", "../../assets/images/image-web-3-desktop.jpg");
    }
})


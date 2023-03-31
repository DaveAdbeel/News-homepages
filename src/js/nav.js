const nav_menu = document.querySelector(".nav_menu");
const nav_list = document.querySelector(".nav_list");
const body = document.querySelector("body");

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
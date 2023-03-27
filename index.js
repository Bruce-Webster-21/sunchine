//-------------------------------------------------------------------------------------------------------
// HAMBURGER MENU
//------------------------------------------------------------------------------------------------------- 

const hamburger = document.querySelector(".hamburger");
const navMenuMobile = document.querySelector(".nav-menu-mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenuMobile.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click" , () => {
  hamburger.classList.remove("active");
  navMenuMobile.classList.remove("active");
}))
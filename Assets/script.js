const ham = document.querySelector(".hamburger"); 
const navbar= document.querySelector(".nav__list"); 
ham.addEventListener('click',()=>{
    ham.classList.toggle("change")
    navbar.classList.toggle("nav-change")
})
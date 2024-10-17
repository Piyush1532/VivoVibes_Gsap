const menu=document.querySelector("#menu")
const cross=document.querySelector("#cross")
const navbar=document.querySelector("#navbar")

menu.addEventListener("click",()=>{
    navbar.classList.add("active")
})

cross.addEventListener("click",()=>{
    navbar.classList.remove("active")
})


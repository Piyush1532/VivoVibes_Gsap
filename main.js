const menu=document.querySelector("#menu")
const cross=document.querySelector("#cross")
const navbar=document.querySelector("#navbar")

menu.addEventListener("click",()=>{
    navbar.classList.add("active")
})

cross.addEventListener("click",()=>{
    navbar.classList.remove("active")
})



// gsap start here

const links = document.querySelectorAll('.box-gap a, #navbar a');

// const tl = gsap.timeline({
//   defaults: { duration: 0.5, ease: "power2.out" }
// });
const timeLine=gsap.timeline()

timeLine.fromTo('.imgLogo', 
  { y: -200, opacity: 0 }, 
  { y: 0, opacity: 1 }  
);

timeLine.fromTo(links, 
  { y: -100, opacity: 0 }, 
  { y: 0, opacity: 1, stagger: 0.1 }, 
  "-=0.3"
);

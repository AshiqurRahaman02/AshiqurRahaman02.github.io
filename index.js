
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelector('.about').addEventListener('click', () => {
  window.scrollTo({
    top: 700,
    behavior: "smooth"
  });
})
document.querySelector('.skills').addEventListener('click', () => {
  window.scrollTo({
    top: 1500,
    behavior: "smooth"
  });
})
document.querySelector('.projects').addEventListener('click', () => {
  window.scrollTo({
    top: 2550,
    behavior: "smooth"
  });
})
document.querySelector('.statistics').addEventListener('click', () => {
  window.scrollTo({
    top: 3960,
    behavior: "smooth"
  });
})
document.querySelector('.contact').addEventListener('click', () => {
  window.scrollTo({
    top: 5000,
    behavior: "smooth"
  });
})


const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry.isIntersecting)
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})
const hiddenElements=document.querySelectorAll(".hidden")

hiddenElements.forEach((el)=> observer.observe(el))


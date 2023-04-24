
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelector('.about').addEventListener('click', () => {
  window.scrollTo({
    top: 800,
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
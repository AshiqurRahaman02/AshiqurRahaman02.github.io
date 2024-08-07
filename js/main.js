
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('nav-menu')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//! =================== Collapse Button ======================
const navigation_box = document.querySelector('#navigation_box')
const menuToggle = document.querySelector('#menuToggle')
const nav_links = document.querySelectorAll('.nav-link')

menuToggle.addEventListener('click', () => {
    navigation_box.classList.toggle('slidein_active')
    transform_hamburger()
})
nav_links.forEach(el => {
    el.addEventListener('click', () => {
        navigation_box.classList.toggle('slidein_active')
        transform_hamburger()
    })
})

function transform_hamburger() {
    let first = document.querySelector('#first_span')
    let second = document.querySelector('#second_span')
    let third = document.querySelector('#third_span')

    first.classList.toggle('first_span_active')
    second.classList.toggle('second_span_active')
    third.classList.toggle('third_span_active')
}

//! ============= resume button ==========

function openResumeInNewTab() {

	// Get the resume link
	const resumeLink = "./assets/pdf/Ashiqur Rahaman - Resume.pdf"

	// Open the resume in a new tab or window
	window.open(resumeLink, "_blank");
}

//! ================= Fixture =================
    // window.addEventListener('load',()=>{
    //     // window.scrollTo(0, 0);
    //     window.location.href = '#home'
    // })
//! ================= SCROLL REVEAL JS =================

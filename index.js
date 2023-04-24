// const toggleModeButton = document.getElementById('toggle-mode');
// const body = document.querySelector('body');

// toggleModeButton.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');
//   body.classList.toggle('light-mode');
// });


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelector('#about').addEventListener('click', () => {
  window.scrollTo({
    top: 800,
    behavior: "smooth"
  });
})
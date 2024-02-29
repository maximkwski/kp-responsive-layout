const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
    if (nav.classList.contains('nav--visible')) {
        nav.style.maxHeight = nav.scrollHeight + "px";
    } else {
        nav.style.maxHeight = 0;
    }
})
const section = document.querySelector('.slider');
const slides = section.getElementsByTagName('img');

let i = 0;

function next() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

function prev() {
    slides[i].classList.remove('active');
    i = (i-1+slides.length)%slides.length;
    slides[i].classList.add('active');
}
const slideLeft = document.querySelector('.slider_left');
const slideRight = document.querySelector('.slider_right');
const carousel = document.querySelector('.carousel');
const title = document.querySelectorAll('.title');

let sliderCounter = 0;
let carouselLength = carousel.childElementCount;

const tl = new TimelineMax();

tl.fromTo(carousel.children, 1, {width: '0%'}, {width: '100%', ease: Power2.easeInOut})
.fromTo(carousel.children, 1, {height: '0vh'}, {height: '80vh', ease: Power2.easeInOut})
.fromTo(title, 0.5, {y: '-500%'}, {y: '0%', ease: Power2.easeInOut});


slideLeft.addEventListener('click', () => {
    carousel.children[sliderCounter].classList.remove('show');
    sliderCounter--;
    if(sliderCounter < 0){
        sliderCounter = carouselLength - 1;
    }

    carousel.children[sliderCounter].classList.add('show');
    tl.fromTo(carousel.children[sliderCounter], 1, {width: '0%'}, {width: '100%', ease: Power2.easeInOut})
    .fromTo(title, 0.5, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut});
})

slideRight.addEventListener('click', () => {
    carousel.children[sliderCounter].classList.remove('show');
    sliderCounter++;
    if(sliderCounter > carouselLength - 1){
        sliderCounter = 0;
    }

    carousel.children[sliderCounter].classList.add('show');
    tl.fromTo(carousel.children[sliderCounter], 1, {x: '100%'}, {x: '0%', ease: Power2.easeInOut})
    .fromTo(title, 0.5, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut});
})
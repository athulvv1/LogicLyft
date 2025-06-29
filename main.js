let header= document.querySelector('header');
let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

window.addEventListener('scroll', ()=> {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Home Swiper
var swiperHome = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".home-pagination",
        clickable: true,
    }
});

// Algorithms Swiper
var swiperAlgorithms = new Swiper(".Algorithms", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".algorithms-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});

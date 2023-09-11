var swiper = new Swiper(".slider-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        820: {
            slidesPerView: 3,
        },
    }
  });

const correoLink = document.getElementById('correoLink');
correoLink.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = 'mailto:tribunalu@unap.edu.pe';
});
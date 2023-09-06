var swiper = new Swiper('.product-slider', {
  slidesPerView: 1,
  // spaceBetween:18,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  //   navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});

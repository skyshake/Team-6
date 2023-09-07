    var slider = new Slider(".reviewSlider", {
      slidesPerView: "auto",
      spaceBetween: 28,
      pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
        breakpoints: {
    420: {
      slidesPerView: 1,
      spaceBetween: 28,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
    });
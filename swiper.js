const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: false,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
   slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1040: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
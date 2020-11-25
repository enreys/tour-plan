var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: true,
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
  });
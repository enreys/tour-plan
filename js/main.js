$(document).ready(function(){
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: true,
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
      
    },
  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: true,
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
      
    },
  });
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [7.838, 98.2989],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [7.838, 98.2989]
            },
        });
    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
}
$('.parallax-window').parallax({imageSrc: 'img/newsletter-bg.jpg'});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function() {
  console.log('Клик по кнопке меню');
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")});

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }


  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста введите свое имя",
          minlength: "Имя должно быть не короче 2 букв"
        },
        email: {
          required: "Нам нужен ваш email, чтобы мы могли связаться с вами",
          email: "Ваш электронный адрес должен выглядеть так: name@domain.com"
        },
        phone: "Пожалуйста введите ваш номер"
      }
    });
  });
  $('.phone-form').each(function () {
    $(this).mask('+7 (000) 000-00-00');
  });



  //  Обработка форм
  //   $('.form').each(function(){
  //   $('.phone-form').mask('+7 (999) 999-99-99');
  //   $(this).validate( {
  //     errorClass: "invalid",
  //     messages: {
  //       name: {
  //         required: "Укажите ваше имя",
  //         minlength: "Имя должно быть не короче 2 букв",
  //       },
  //       email: {
  //         required: "Нам нужен ваш email, чтобы мы могли связаться с вами",
  //         email: "Ваш электронный адрес должен выглядеть так: name@domain.com"
  //       },
  //       phone: {
  //         required: "Телефон обязателен",
  //       },
  //     },
      
  //   });
  //   $('.phone-form').each(function () {
  //     $(this).mask('+7 (000) 000-00-00');
  //   });
  // });
    AOS.init();
});

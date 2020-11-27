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

type="text/javascript"
ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
        center: [53.17, 17.54],
        zoom: 7
      });
  }

//   ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//             center: [7.838160094082118,98.29899795569095],
//             zoom: 15
//         }, { 
//             searchControlProvider: 'yandex#search'
//         }),

//         // Создаём макет содержимого.
//         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//         ),

//         myPlacemark = new ymaps.GeoPoint(myMap.getCenter[7.838160094082118,98.29899795569095], {
//             hintContent: 'Собственный значок метки',
//             balloonContent: 'Это красивая метка'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: 'images/myIcon.gif',
//             // Размеры метки.
//             iconImageSize: [30, 42],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),

//         myPlacemarkWithContent = new ymaps.Placemark([7.838160094082118, 98.29899795569095], {
//             hintContent: 'Собственный значок метки с контентом',
//             balloonContent: 'А эта — новогодняя',
//             iconContent: '12'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#imageWithContent',
//             // Своё изображение иконки метки.
//             iconImageHref: 'images/ball.png',
//             // Размеры метки.
//             iconImageSize: [48, 48],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-24, -24],
//             // Смещение слоя с содержимым относительно слоя с картинкой.
//             iconContentOffset: [15, 15],
//             // Макет содержимого.
//             iconContentLayout: MyIconContentLayout
//         });

//     myMap.geoObjects
//         .add(myPlacemark)
//         .add(myPlacemarkWithContent);
// });

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

  

// type="text/javascript"
// ymaps.ready(init);
//   function init() {
//     var myMap = new ymaps.Map('map', {
//         center: [7.838, 98.2989],
//         zoom: 15
//       }, {
//          searchControlProvider: 'yandex#search'
//       });
//       ymaps.geoXml.load('data.xml')
//       .then(function (res) {
//           // Добавляем коллекцию геообъектов на карту.
//           myMap.geoObjects.add(res.geoObjects);
//       })
//   };
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
        }, {
            // preset: 'islands#blackStretchyIcon',
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
          7.838, 98.2989
        ]);
    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([7.838, 98.2989], {
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))

}
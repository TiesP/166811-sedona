ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [34.865966, -111.763806],
      zoom: 7
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'метка',
      balloonContent: 'метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-map-marker.svg',
      // Размеры метки.
      iconImageSize: [27, 27],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-3, -42]
    });

  myMap.geoObjects.add(myPlacemark);
});

// Управление отображением меню
const toggleButton = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const siteNavigation = document.querySelector('.site-navigation');
const userNavigation = document.querySelector('.user-navigation');

if (nav.classList.contains('nav--no-js')) {
  nav.classList.remove('nav--no-js');

  if (siteNavigation && userNavigation) {
    siteNavigation.classList.add('site-navigation--closed');
    userNavigation.classList.add('user-navigation--closed');
  }
}

if (toggleButton) {
  toggleButton.addEventListener('click', function (event) {
    event.preventDefault();
    siteNavigation.classList.toggle('site-navigation--closed');
    userNavigation.classList.toggle('user-navigation--closed');
    this.classList.toggle('nav__toggle--off');
  });
}

// Модальное окно заказа товара
const popup = document.querySelector('.popup');
const orderButton = document.querySelector('.week-goods__button');

if (popup) {
  if (orderButton) {
    orderButton.addEventListener('click', openPopupForm);
  }
  popup.addEventListener('click', closePopupForm);
  window.addEventListener('keydown', closePopupForm);
}

function openPopupForm(event) {
  let element = event.target;

  if (
    element.classList.contains('card-product__button') ||
    element.classList.contains('week-goods__button')
  ) {
    event.preventDefault();
    popup.classList.add('popup--opened');
  }
}

function closePopupForm(event) {
  let element = event.target;

  if (element.classList.contains('popup') || event.keyCode === 27) {
    popup.classList.remove('popup--opened');
  }
}

// Подключение Яндекс карты
/*eslint-disable*/
function init(ymaps) {
  /*eslint-enable*/
  let map = new ymaps.Map('map', {
    center: [59.93944115603922, 30.32302403991186],
    zoom: 16,
    controls: ['zoomControl']
  });

  let placemark = new ymaps.Placemark(
    [59.938633647616214, 30.32304549758399],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-33, -101]
    }
  );
  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}

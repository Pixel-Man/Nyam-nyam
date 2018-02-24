var orderLink = document.querySelectorAll('.order-js');
var orderLinkClosed = document.querySelector('.popup-order__btn-closed');
var orderBtnClosed = document.querySelector('.main-order__btn--closed');
var popupOrder = document.querySelector('.popup-order');

[].forEach.call(orderLink, function (el) {
  el.addEventListener('click', function (e) {
    if (popupOrder.classList.contains('popup-order--closed')) {
      e.preventDefault();
      popupOrder.classList.remove('popup-order--closed');
    } else {
      popupOrder.classList.add('popup-order--closed');
    }
  })
});

orderLinkClosed.addEventListener('click', function (e) {
  if (!popupOrder.classList.contains('popup-order--closed')) {
    e.preventDefault();
    popupOrder.classList.add('popup-order--closed');
  }
});

orderBtnClosed.addEventListener('click', function (e) {
  if (!popupOrder.classList.contains('popup-order--closed')) {
    e.preventDefault();
    popupOrder.classList.add('popup-order--closed');
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (!popupOrder.classList.contains('popup-order--closed')) {
      popupOrder.classList.add('popup-order--closed');
    }
  }
});

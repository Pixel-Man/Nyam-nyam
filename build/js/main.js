var navToggle = document.querySelector('.main-header__nav-toggle');
var navMain = document.querySelector('.main-header__nav');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
  } else {
    navMain.classList.add('main-header__nav--closed');
  }
});
window.onload = function(){

    function timer(){

        var hour = document.getElementById('timer-hour').innerHTML;
        var minute = document.getElementById('timer-minute').innerHTML;
        var second = document.getElementById('timer-second').innerHTML;
        var end = false;

        if( second > 0 ) second--;
        else{
            second = 60;

            if( minute > 0 ) minute--;
            else{
                second = 60;

                if( hour > 0 ) hour--;
                else end = true;
            }
        }

        if(end){
            clearInterval(intervalID);
            alert('Акция закончидась!');
        }else{
            document.getElementById('timer-hour').innerHTML = hour;
            document.getElementById('timer-minute').innerHTML = minute;
            document.getElementById('timer-second').innerHTML = second;
        }
    }
    window.intervalID = setInterval(timer, 1000);
};
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


var mql = window.matchMedia("screen and (max-width: 969px)");

function slidr_aboutus(mql) {
  if (mql.matches) {
    var s = slidr.create('slidr-aboutus', {
      breadcrumbs: false,
      overflow: true,
      fade: true,
      touch: true
    }).add('h', ['one', 'two', 'three', 'four', 'five', 'one'], 'linear')
        .start();
  }
}

slidr_aboutus(mql);
function setup_for_width(mql) {
  if (mql.matches) {
    var s = slidr.create('slidr-schema', {
      breadcrumbs: false,
      overflow: true,
      fade: true,
      touch: true
    }).add('h', ['one', 'two', 'three', 'four', 'one'], 'linear')
        .start();
  }
}

mql.addListener(setup_for_width);

setup_for_width(mql);
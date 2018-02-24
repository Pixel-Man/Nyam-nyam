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
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
document.addEventListener('DOMContentLoaded', function () {
  require(['jquery', 'source/kurs', 'source/loader'], function ($, source, loader) {
    loader.load($('#main'), source);
  });

  require(['jquery', 'source/minfin', 'source/loader'], function ($, source, loader) {
    loader.load($('#main'), source);
  });
});

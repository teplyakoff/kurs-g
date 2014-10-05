define(['jquery'], function ($) {
  return {
    preLoaderId: 'loader',
    load: function ($appendTo, source) {
      var $container = $('<div>');
      $container.width(source.width);
      $container.height(source.height);
      var loaderHtml = $('#' + this.preLoaderId).html();
      $container.append(loaderHtml);
      $appendTo.append($container);

      var $draft = $('<div class="hidden">');
      $draft.html(source.getHtml());
      $appendTo.append($draft);
      source.run(function() {
        $container.html($draft.html());
        $draft.remove();
      });
    }
  };
});

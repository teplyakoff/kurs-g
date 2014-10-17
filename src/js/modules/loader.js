define(['jquery', 'config'], function ($, config) {
  return {
    setPreloader: function($preloader) {
      this.$preloader = $preloader;
    },
    setContainer: function($container) {
      this.$container = $container;
    },
    load: function () {
      var self = this;

      config.get(['source', 'currencies'], function(items) {
        var sourceName = items.source;
        var currencies = items.currencies;

        require(['source/' + sourceName + '/informer'], function (source) {
          ['usd', 'eur', 'rub'].forEach(function(currency) {
            var declaration = sourceName + '-' + currency;
            var $el = $('[data-source="' + declaration + '"]');

            if (!currencies[currency]) {
              $el.remove();
            } else {
              if (!$el.length) {
                source.setCurrency(currency);

                var $item = $('<div data-source="' + declaration + '">')
                  .append($('<div>')
                    .width(source.width)
                    .height(source.height)
                    .append(
                    self.$preloader.html()
                  )
                );

                self.$container.append($item);

                var $draft = $('<div class="hidden">')
                  .html(source.getHtml());

                self.$container.append($draft);

                source.run(function () {
                  $item.html($draft.html());
                  $draft.remove();
                });
              }
            }
          });
        });
      });
    },
    clear: function() {
      this.$container.empty();
    }
  };
});

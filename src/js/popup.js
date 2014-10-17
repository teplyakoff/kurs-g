require(['config', 'loader', 'jquery'], function(config, loader) {
  config.setDefaults({
    source: 'kurs',
    currencies: {
      'usd': true,
      'eur': false,
      'rub': false
    }
  });

  config.get(['source', 'currencies'], function(items) {
    var source = items.source || config.defaults.source;
    var currencies = items.currencies || config.defaults.currencies;
    config.set({'source': source, 'currencies': currencies}, function () {
      $(function() {
        loader.setPreloader($('#loader'));
        loader.setContainer($('#main'));

        loader.load();

        $('#currency').find('a').each(function() {
          var cur = $(this).data('value');
          if (currencies[cur]) {
            $(this).addClass('selected');
          } else {
            $(this).removeClass('selected');
          }
        });

        $('#source').val(source);

        $('#currency').find('a').click(function () {
          var selectedCurrency = $(this).data('value');

          config.get('currencies', function (items) {
            var currencies = items.currencies;
            currencies[selectedCurrency] = !currencies[selectedCurrency];

            config.set({'currencies': currencies}, function () {
              loader.load();
            });
          });

          $(this).toggleClass('selected');

          return false;
        });

        $('#source').change(function () {
          var source = $(this).val();

          config.set({source: source}, function() {
            loader.clear();
            loader.load();
          });

          return false;
        });
      })
    });
  });
});

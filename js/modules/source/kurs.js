define(['jquery'], function($) {
  return {
    width: 320,
    height: 203,
    setCurrency: function(currency) {
      this.currency = currency;
    },
    getContainerId: function () {
      return 'kurs-com-ua-informer-mezhbank-' + this.width + 'x' + this.height + '-' + this.currency + '-green-container';
    },
    getHtml: function () {
      return "<!--Kurs.com.ua mezhbank " + this.width + 'x' + this.height + " usd green--> \
        <div id='" + this.getContainerId() + "'>Курс валют предоставлен сайтом <a \
          href='http://kurs.com.ua/' id='kurs-com-ua-informer-mezhbank-" + this.width + 'x' + this.height + "-usd-green' title='Курс валют' \
          target='_blank'>kurs.com.ua</a></div> \
        <noscript><img src='http://kurs.com.ua/static/images/informer/kurs.png' width='52' height='26' \
           alt='kurs.com.ua: курс валют в Украине!' title='Курс валют' border='0'/></noscript> \
        <!--//Kurs.com.ua mezhbank " + this.width + 'x' + this.height + "usd green-->";
    },
    run: function (onLoadCallback) {
      var self = this;
      var rnd = +new Date;
      var iframe = '<ifr' + 'ame src="http://kurs.com.ua/informer/mezhbank/' + this.currency + '?color=green&rnd='
        + rnd + '" width="' + this.width + '" height="' + this.height
        + '" frameborder="0" vspace="0" scrolling="no" hspace="0"></ifr' + 'ame>';
      var $container = $('#' + this.getContainerId());
      $container.html(iframe);

      if (onLoadCallback) {
        $container.find('iframe').on('load', function() {
          onLoadCallback(self);
        });
      }
    }
  };
});

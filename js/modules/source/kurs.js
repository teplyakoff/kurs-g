define(['jquery'], function($) {
  return {
    width: 220,
    height: 203,
    getContainerId: function () {
      return 'kurs-com-ua-informer-mezhbank-' + this.width + 'x' + this.height + '-usd-green-container';
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
      var rnd = +new Date;
      var iframe = '<ifr' + 'ame src="http://kurs.com.ua/informer/mezhbank/usd?color=green&rnd='
        + rnd + '" width="' + this.width + '" height="' + this.height
        + '" frameborder="0" vspace="0" scrolling="no" hspace="0"></ifr' + 'ame>';
      var container = document.getElementById(this.getContainerId());
      container.parentNode.innerHTML = iframe;

      if (onLoadCallback) {
        $(container).ready(onLoadCallback);
      }
    }
  };
});

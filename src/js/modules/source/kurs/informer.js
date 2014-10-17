define([
  'tpl!source/kurs/template.tpl',
  'tpl!source/kurs/iframe.tpl',
  'underscore',
  'jquery'
], function(mainTpl, iframeTpl) {
  return {
    width: 300,
    height: 203,
    color: 'green',
    setCurrency: function (currency) {
      this.currency = currency;
    },
    getContainerId: function () {
      return _.template(
        'kurs-com-ua-informer-mezhbank-<%= width %>x<%= height %>-<%= currency %>-<%= color %>-container'
      )({
        width: this.width,
        height: this.height,
        currency: this.currency,
        color: this.color
      });
    },
    getHtml: function () {
      return mainTpl({
        id: this.getContainerId(),
        width: this.width,
        height: this.height,
        currency: this.currency,
        color: this.color
      });
    },
    run: function (onLoadCallback) {
      var self = this;

      var iframeHtml = iframeTpl({
        currency: this.currency,
        color: this.color,
        width: this.width,
        height: this.height,
        rnd: +new Date
      });
      var $container = $('#' + this.getContainerId());
      $container.html(iframeHtml);

      if (onLoadCallback) {
        $container.find('iframe').on('load', function() {
          onLoadCallback(self);
        });
      }
    }
  };
});

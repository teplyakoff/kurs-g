define([
  'jquery',
  'underscore',
  'text!source/kurs/template.html',
  'text!source/kurs/iframe.html'
], function($, _, template, iframe) {
  console.log(iframe);
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
      return _.template(template)({
        id: this.getContainerId(),
        width: this.width,
        height: this.height,
        currency: this.currency,
        color: this.color
      });
    },
    run: function (onLoadCallback) {
      var self = this;

      var iframeHtml = _.template(iframe)({
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

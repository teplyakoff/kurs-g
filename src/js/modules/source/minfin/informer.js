define(['text!source/minfin/template.html', 'underscore'], function (template) {
  return {
    width: 220,
    height: 175,
    setCurrency: function(currency) {
      this.currency = currency;
    },
    getHtml: function () {
      return _.template(template)({
        currency: this.currency,
        pic: Math.round(Math.random() * 10000000),
        width: this.width,
        height: this.height
      });
    },
    run: function (onLoadCallback) {
      if (onLoadCallback) {
        onLoadCallback(this);
      }
    }
  }
});

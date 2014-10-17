define(['tpl!source/minfin/template.tpl', 'underscore'], function (mainTpl) {
  return {
    width: 220,
    height: 175,
    setCurrency: function(currency) {
      this.currency = currency;
    },
    getHtml: function () {
      return mainTpl({
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

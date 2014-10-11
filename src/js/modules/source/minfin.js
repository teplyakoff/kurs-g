define({
  width: 220,
  height: 175,
  setCurrency: function(currency) {
    this.currency = currency;
  },
  getHtml: function () {
    return '<div id="minfincomua_i_' + this.currency + '" style="text-align: center">Loading...</div>';
  },
  run: function (onLoadCallback) {
    var rand_no = Math.random();
    var pic = Math.round(rand_no * 10000000);
    var informer_usd = document.getElementById('minfincomua_i_' + this.currency);

    informer_usd.innerHTML = '<a target="_blank" href="http://minfin.com.ua/currency/mb/' + this.currency + '">'
      + '<img src="http://informer.minfin.com.ua/interbank/img/' + this.currency
      + '.png?' + pic
      + '" width="' + this.width
      + '" height="' + this.height
      + '" border="0" alt="interbank for minfin.com.ua"></a>';

    if (onLoadCallback) {
      onLoadCallback(this);
    }
  }
});

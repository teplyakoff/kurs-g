define({
    getHtml: function() {
        return '<div id="minfincomua_i_usd" style="text-align: center">Loading...</div>';
    },
    run: function() {
        var rand_no = Math.random();
        var pic = Math.round(rand_no * 10000000);
        var informer_usd = document.getElementById('minfincomua_i_usd');
        informer_usd.innerHTML = '<a href="http://minfin.com.ua/currency/"><img src="http://informer.minfin.com.ua/interbank/img/usd.png?' + pic + '" width="220" height="175" border="0" alt="interbank for minfin.com.ua"></a>';
    }
});

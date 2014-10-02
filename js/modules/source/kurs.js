define({
    getHtml: function() {
        return "<!--Kurs.com.ua mezhbank 220x203 usd green--> \
            <div id='kurs-com-ua-informer-mezhbank-220x203-usd-green-container'>Курс валют предоставлен сайтом <a \
                    href='http://kurs.com.ua/' id='kurs-com-ua-informer-mezhbank-220x203-usd-green' title='Курс валют' \
                    target='_blank'>kurs.com.ua</a></div> \
            <noscript><img src='http://kurs.com.ua/static/images/informer/kurs.png' width='52' height='26' \
                           alt='kurs.com.ua: курс валют в Украине!' title='Курс валют' border='0'/></noscript> \
            <!--//Kurs.com.ua mezhbank 220x203 usd green-->";
    },
    run: function() {
        var rnd = +new Date;
        var iframe = '<ifr' + 'ame src="http://kurs.com.ua/informer/mezhbank/usd?color=green&rnd=' + rnd + '" width="220" height="203" frameborder="0" vspace="0" scrolling="no" hspace="0"></ifr' + 'ame>';
        var container = document.getElementById('kurs-com-ua-informer-mezhbank-220x203-usd-green');
        container.parentNode.innerHTML = iframe;
    }
});

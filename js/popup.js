function kursComUaInformerInterbank() {
    var rnd = +new Date;
    var iframe = '<ifr' + 'ame src="http://kurs.com.ua/informer/mezhbank/usd?color=green&rnd=' + rnd + '" width="220" height="203" frameborder="0" vspace="0" scrolling="no" hspace="0"></ifr' + 'ame>';
    var container = document.getElementById('kurs-com-ua-informer-mezhbank-220x203-usd-green');
    container.parentNode.innerHTML = iframe;
}

function kursMinfinInterbank() {
    var rand_no = Math.random();
    var pic = Math.round(rand_no * 10000000);
    var informer_usd = document.getElementById('minfincomua_i_usd');
    informer_usd.innerHTML = '<a href="http://minfin.com.ua/currency/"><img src="http://informer.minfin.com.ua/interbank/img/usd.png?' + pic + '" width="220" height="175" border="0" alt="interbank for minfin.com.ua"></a>';
}

document.addEventListener('DOMContentLoaded', function () {
    kursComUaInformerInterbank();
    kursMinfinInterbank();
});

function kursComUaInformerInterbank() {
    var rnd = +new Date;
    var iframe = '<ifr' + 'ame src="http://kurs.com.ua/informer/mezhbank/usd?color=green&rnd=' + rnd + '" width="300" height="203" frameborder="0" vspace="0" scrolling="no" hspace="0"></ifr' + 'ame>';
    var container = document.getElementById('kurs-com-ua-informer-mezhbank-300x203-usd-green');
    container.parentNode.innerHTML = iframe;
}

document.addEventListener('DOMContentLoaded', function () {
    kursComUaInformerInterbank();
});

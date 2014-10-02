document.addEventListener('DOMContentLoaded', function () {
    require(['jquery', 'source/kurs'], function($, source) {
        $('#main').append(source.getHtml());
        source.run();
    });

    require(['jquery', 'source/minfin'], function ($, source) {
        $('#main').append(source.getHtml());
        source.run();
    });
});

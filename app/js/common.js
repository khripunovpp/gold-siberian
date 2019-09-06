$(function() {
    $('.reviews__list').slick()

    ymaps.ready(function() {
        var myMap = new ymaps.Map('map', {
                center: [56.056413, 92.918742],
                zoom: 17,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark([56.056413, 92.918742]);

        myMap.geoObjects.add(myPlacemark);

    })


    $('js-submit').on('click', function(event) {
        event.preventDefault();
        var form = $(this).closest('form');
        ajax(form);
    });

    var ajax = function(form) {

        var formtarget = form,
            msg = $(formtarget).serialize(),
            jqxhr = $.post("/ajax.php", msg, onAjaxSuccess);

        function onAjaxSuccess(data) {

            var json = JSON.parse(data),
                status = json.status,
                message = json.message;

            addNotify(status, message)
        }

        var addNotify = function(status, msg) {
            var responseEl = $('.hero__response');

            responseEl.text(msg)

            if (status === 'error') {
                responseEl.text('Что-то пошло не так!')

            } else {
                responseEl.text('Ваша заявка принята')
                yaCounter0000.reachGoal('order');
            }


            setTimeout(function() {
                responseEl.fadeOut();
            }, 2000)
        }

    }
});
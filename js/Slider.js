$(document).ready(function() {

    var slider = $('#slider');
    var btnAnterior = $('#btnAnterior');
    var btnSiguiente = $('#btnSiguiente');

    $('#slider .slide:last').insertBefore('#slider .slide:first');

    slider.css('margin-left', '-43%');

    function moverDerecha() {

        if (!slider.is(':animated')) {


            slider.animate({
                marginLeft: '-105.6%'
            }, 700, function() {
                $('#slider .slide:first').insertAfter('#slider .slide:last');
                slider.css('margin-left', '-43%');
                resetInterval();
            });
        }
    }

    btnSiguiente.on('click', moverDerecha);

    // function moverIzquierda() {
    //     slider.animate({
    //         marginLeft: '24%'
    //     }, 700, function() {
    //         $('#slider .slide:last').insertAfter('#slider .slide:first');
    //         slider.css('margin-left', '-43%');
    //     });
    // }

    // btnAnterior.on('click', moverIzquierda);

    function moverIzquierda() {
        if (!slider.is(':animated')) {

            $('#slider .slide:last').insertBefore('#slider .slide:first');
            slider.css('margin-left', '-105.6%')
            slider.animate({
                marginLeft: '-43%'
            }, 700);
            resetInterval();

        };
    };

    btnAnterior.on('click', moverIzquierda);

    var interval = setInterval(moverDerecha, 5000);

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(moverDerecha, 5000)
    }




});
$(document).ready(function() {

    var btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll', function() {

        var proyectosOffTop = $('#proyectos').offset().top;

        if ($(window).scrollTop() >= proyectosOffTop) {

            btnVolverArriba.css('margin-right', 0);

        } else if ($(window).scrollTop() <= proyectosOffTop / 2) {

            btnVolverArriba.css('margin-right', '-68px')

        }


    })


    $('a.volver-arriba').on('click', function(e) {

        e.preventDefault();

        if ($(window).scrollTop() != 0) {

            $('html, body').stop().animate({ scrollTop: 0 }, 1000);

        }

    })


    $('a.scroll-suave').on('click', function(e) {

        e.preventDefault();

        var seccionOT = $($(this).attr('href')).offset().top;

        $('html, body').stop().animate({ scrollTop: seccionOT }, 1000);

    });

    $('a.scroll-acercaDe').on('click', function(e) {

        e.preventDefault();

        var seccionOT = $($(this).attr('href')).offset().top - 121;

        $('html, body').stop().animate({ scrollTop: seccionOT }, 1000);

    });

    $('a.scroll-equipo').on('click', function(e) {

        e.preventDefault();

        var seccionOT = $($(this).attr('href')).offset().top - 68;

        $('html, body').stop().animate({ scrollTop: seccionOT }, 1000);

    });


});
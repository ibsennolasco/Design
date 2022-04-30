$(document).ready(function() {

    var fixedHeader = $('#fixedHeader');

    $(window).on('scroll', function() {

        var proyectosOffTop = $('#proyectos').offset().top;

        if ($(window).scrollTop() >= proyectosOffTop) {

            fixedHeader.css('margin-top', 0);

        } else if ($(window).scrollTop() <= proyectosOffTop / 2) {

            fixedHeader.css('margin-top', '-68px')

        }


    })
});
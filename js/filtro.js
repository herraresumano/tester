$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        vision = $('#vision').offset().top,
        objetivo = $('#objetivo').offset().top,
        tercerizar = $('#tercerizar').offset().top,
        mision = $('#mision').offset().top,
        valores = $('#valores').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        vision = $('#vision').offset().top,
        objetivo = $('#objetivo').offset().top,
        tercerizar = $('#tercerizar').offset().top,
        mision = $('#mision').offset().top,
        valores = $('#valores').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-equipo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });

    $('#enlace-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-vision').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: vision -100
        },600);
    });

    $('#enlace-objetivo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: objetivo -100
        },600);
    });

    $('#enlace-tercerizar').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: tercerizar -100
        },600);
    });

    $('#enlace-mision').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: mision -100
        },600);
    });

    $('#enlace-valores').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: valores -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});
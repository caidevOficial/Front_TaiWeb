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

    let variety = $('#variety').offset().top,
        servicio = $('#servicio').offset().top,
        menus = $('#menus').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let variety = $('#variety').offset().top,
        servicio = $('#servicio').offset().top,
        menus = $('#menus').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-variety').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: variety -100
        },600);
    });

    $('#enlace-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-menus').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menus -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});
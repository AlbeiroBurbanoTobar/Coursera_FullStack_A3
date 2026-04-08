$(document).ready(function () {
    // 1. Modificar la velocidad del carousel (intervalo en ms)
    $('.carousel').carousel({
        interval: 2000,
        pause: 'hover' // Pausa el carousel al pasar el ratón
    });

    // 2. Inicializar Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // 3. Inicializar Popovers
    $('[data-toggle="popover"]').popover();
});

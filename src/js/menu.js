//var jQueryMobile = require('jquery-mobile');
    
//menu
var menuToggle = function() {
    if (!$('.overlay').hasClass('open')) {
        $('.overlay').addClass('open', 300);
        $('#menu').css('transform', 'translateX(0%)');
    } else if ($('.overlay').hasClass('open')) {
        $('.overlay').removeClass('open', 300);
        $('#menu').css('transform', 'translateX(100%)');
    }
}

$('#menu-toggle').on('click', menuToggle);
$('.overlay').on('click', menuToggle);
$('#menu').on('click','a',menuToggle);

//$(function(){
//    $(window).on('swipeleft',menuToggle);
//}


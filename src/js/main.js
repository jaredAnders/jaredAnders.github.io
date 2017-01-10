//header
$('#logo').hide();

$(window).scroll(function(){
    var a = $(window).scrollTop();
    if (a >0) {
        $('header').addClass('scrolled');
        $('#logo').show();
    }
    else {
        $('header').removeClass('scrolled');
        $('#logo').hide();
    }
});

//test data

//var test = {
//    dev: {
//        category: 'Development',
//        skills: [
//            {
//            title: 'HTML',
//            level: 3
//            },
//            {
//            title: 'Sass/CSS',
//            level: 3
//            }
//        ]
//    }
//};

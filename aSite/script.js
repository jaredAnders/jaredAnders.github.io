$('#menu-toggle').click(function() {
    if($(this).hasClass('open')){
        
    $('#menu').animate({
        right:"-75%"
    });
    $('body').animate({
        right:"0px"
    });
    $(this).removeClass('open');
        
    }
    
    else {
        
    $('#menu').animate({
        right:"0px"
    });
    $('body').animate({
        right:"75%"
    });
    $(this).addClass('open');
        
    }
    
});


$('#menu li').click(function(){
    
    $('#menu li').removeClass('selected',0);
    $(this).addClass('selected',0);
});
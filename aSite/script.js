var contactform =  document.getElementById("contactform");
contactform.setAttribute("action", "//formspree.io/" + "pciowr20" + "@" + "robot" + "." + "zapier" + "." + "com");


var url = "//formspree.io/" + "pciowr20" + "@" + "robot" + "." + "zapier" + "." + "com";

function submitForm(){
    $.ajax({
        url: url,
        method: 'POST',
        data: $('#contactform').serialize(),
        dataType:'json'
    })
};

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
    $('#menu-toggle').addClass('open');
        
    }
    
});


$('#menu li').click(function(){
    
    $('#menu li').removeClass('selected',0);
    $(this).addClass('selected',0);
});
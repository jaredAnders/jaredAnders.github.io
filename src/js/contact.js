//form
submitForm = function () {
    var url = '//formspree.io/pciowr20' + '@robot.zapier.com';
    $.ajax({
        url: url,
        method: 'POST',
        data: $('#contact-form').serialize(),
        dataType:'json'
    });
    $('#contact-form').fadeOut(300, function() {
        $('#contact').html('<div id="thank-you">Thank you!</div>').hide().fadeIn('slow');
    });
};

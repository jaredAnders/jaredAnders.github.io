$('#read-more').hide();
$('#expand').click(function() {
  if($('#read-more').is(':hidden')) {
    $('#expand').text('read less');
  } else {
    $('#expand').text('read more');
  }
  $('#read-more').toggle(250);
})

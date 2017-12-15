$(function() {
  $('.object').animate({width:'500px',height:'500px'}).delay(500).animate({height:'200px',width:'200px'});
    });

$('.object').click(function(){
  $(this).toggleClass('clicked');
});

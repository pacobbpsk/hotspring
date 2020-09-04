$(function(){
  $('#menu-icon').click(function(){
    $('#menu-contents').fadeIn();
    $('.upper').fadeOut();
    $('body,html').addClass('modal-fix');

  });
  $('#close-btn').click(function(){
    $('#menu-contents').fadeOut();
    $('.upper').fadeIn();
    $('body,html').removeClass('modal-fix');
  });
 $('.menu-list').click(function(){
   $('#menu-contents').fadeOut();
   $('.upper').fadeIn();
   $('body,html').removeClass('modal-fix');
 });

 var topPage = $('#pageTop');
 topPage.hide();
 $(window).scroll(function(){
   if ($(this).scrollTop() > 100){
     topPage.fadeIn();
   } else {
     topPage.fadeOut();
   }
 });
 topPage.click(function(){
   $('body,html').animate({
     scrollTop:0
   },1000);
   return false;
 });

 $('#dice').click(function(){
  var number = parseInt(Math.random()* 6) + 1;
  if (number == 1){
    $('.dice-one').fadeIn();
    $('.dice-two').fadeOut();
    $('.dice-three').fadeOut();
    $('.dice-four').fadeOut();
    
    
    
  } else if (number == 2) {
   $('.dice-two').fadeIn();
   $('.dice-one').fadeOut();
    $('.dice-three').fadeOut();
    $('.dice-four').fadeOut();
    
  } else if (number == 3) {
   $('.dice-three').fadeIn();
   $('.dice-two').fadeOut();
    $('.dice-one').fadeOut();
    $('.dice-four').fadeOut();

  } else if (number == 4) {
   $('.dice-four').fadeIn();
   $('.dice-two').fadeOut();
    $('.dice-three').fadeOut();
    $('.dice-one').fadeOut();
    
  } else if (number == 5) {
   $('.dice-five').fadeIn();
   $('.dice-two').fadeOut();
    $('.dice-three').fadeOut();
    $('.dice-four').fadeOut();
   
  } else {
   $('.dice-six').fadeIn();
   $('.dice-two').fadeOut();
    $('.dice-three').fadeOut();
    $('.dice-four').fadeOut();
   
  }
});
});

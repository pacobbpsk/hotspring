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
  console.log(number);
  if (number == 1){
    $('.fa-dice-one').fadeIn();
    $('.fa-dice-two').fadeOut();
    $('.fa-dice-three').fadeOut();
    $('.fa-dice-four').fadeOut();
    $('.fa-dice-five').fadeOut();
    $('.fa-dice-six').fadeOut();
    
    
  } else if (number == 2) {
   $('.fa-dice-two').fadeIn();
   $('.fa-dice-one').fadeOut();
    $('.fa-dice-three').fadeOut();
    $('.fa-dice-four').fadeOut();
    $('.fa-dice-five').fadeOut();
    $('.fa-dice-six').fadeOut();
  } else if (number == 3) {
   $('.fa-dice-three').fadeIn();
   $('.fa-dice-two').fadeOut();
    $('.fa-dice-one').fadeOut();
    $('.fa-dice-four').fadeOut();
    $('.fa-dice-five').fadeOut();
    $('.fa-dice-six').fadeOut();
  } else if (number == 4) {
   $('.fa-dice-four').fadeIn();
   $('.fa-dice-two').fadeOut();
    $('.fa-dice-three').fadeOut();
    $('.fa-dice-one').fadeOut();
    $('.fa-dice-five').fadeOut();
    $('.fa-dice-six').fadeOut();
  } else if (number == 5) {
   $('.fa-dice-five').fadeIn();
   $('.fa-dice-two').fadeOut();
    $('.fa-dice-three').fadeOut();
    $('.fa-dice-four').fadeOut();
    $('.fa-dice-one').fadeOut();
    $('.fa-dice-six').fadeOut();
  } else {
   $('.fa-dice-six').fadeIn();
   $('.fa-dice-two').fadeOut();
    $('.fa-dice-three').fadeOut();
    $('.fa-dice-four').fadeOut();
    $('.fa-dice-five').fadeOut();
    $('.fa-dice-one').fadeOut();

  }
});
});

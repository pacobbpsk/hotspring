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
  var number = parseInt(Math.random()* 4) + 1;
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

  } else  {
   $('.dice-four').fadeIn();
   $('.dice-two').fadeOut();
    $('.dice-three').fadeOut();
    $('.dice-one').fadeOut();
    

   
  }
});

setTimeout(function(){
  $('.start-title').fadeIn(1600);
},500);
setTimeout(function(){
  $('.start').fadeOut(500);
},2500);


});

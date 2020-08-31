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
});

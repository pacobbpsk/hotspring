$(function(){
  $('#menu-icon').click(function(){
    $('#menu-contents').fadeIn();
    $('.upper').fadeOut();

  });
  $('#close-btn').click(function(){
    $('#menu-contents').fadeOut();
    $('.upper').fadeIn();
  });
 $('.menu-list').click(function(){
   $('#menu-contents').fadeOut();
   $('.upper').fadeIn();
 });
});

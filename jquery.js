$(function(){
  /*スマホナビメニュー機能*/



 $('.menu-list').click(function(){
   $('#menu-contents').animate({'marginRight':'-400'},500);
   $('.upper').fadeIn();
   $('body,html').removeClass('modal-fix');
 });

 $('.menu-icon').click(function(){
  var $menu = $('.menu-contents');
  if ($menu.hasClass('open')) {
     $menu.removeClass('open');
     $menu.animate({'marginRight':'-400'},500);
     $('.upper').fadeIn();
     $('body,html').removeClass('modal-fix');

  } else {
    $menu.addClass('open');
    $menu.animate({'marginRight':'400'},500);
    $('.upper').fadeOut();
    $('body,html').addClass('modal-fix');


  }
});


/*PCナビクリック機能*/
$('.itiran').click(function(){

  $('#itiran').fadeIn();
  $('#cafe').fadeIn();
  $('#hotel').fadeIn();
  $('#dice-challenge').fadeIn();

});
$('.cafe').click(function(){
  $('#itiran').fadeIn();
  $('#cafe').fadeIn();
  $('#hotel').fadeIn();
  $('#dice-challenge').fadeIn();
});
$('.ryokann').click(function(){
  $('#itiran').fadeIn();
  $('#cafe').fadeIn();
  $('#hotel').fadeIn();
  $('#dice-challenge').fadeIn();
});
$('.dice-challenge').click(function(){
  $('#itiran').fadeIn();
  $('#cafe').fadeIn();
  $('#hotel').fadeIn();
  $('#dice-challenge').fadeIn();
});


/*トップへ戻る機能*/
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


 /*スクロールでメインコンテンツ表示機能*/
 if(!navigator.userAgent.match(/(iPhone|Android)/)){
  $(function(){

    var onsenList = $('#itiran');
    onsenList.hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 150){
        onsenList.fadeIn(2500);
      }
    });
    var cafe = $('#cafe');
    cafe.hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 900){
        cafe.fadeIn(2500);
      }
    });
    var hotel = $('#hotel');
    hotel.hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 3000){
        hotel.fadeIn(2700);
      }
    });
    var dice = $('#dice-challenge');
    dice.hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 5300){
        dice.fadeIn(2900);
      }
    });
    var faq = $('#faq');
    faq.hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 6400){
        faq.fadeIn(2700);
      }
    });
    
  });
};



/*ランダム機能*/
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
/*スタート画面表示機能*/
setTimeout(function(){
  $('.start-title').fadeIn(1600);
},500);
setTimeout(function(){
  $('.start').fadeOut(500);
},2500);

/*アコーディオン機能*/
$('.faq-list-contents').click(function(){
  var $answer = $(this).find('.answer');
  if ($answer.hasClass('show')) {
    $answer.removeClass('show');
    $answer.slideUp();
    $(this).find('span').text('+');
  }
  else {
    $answer.addClass('show');
    $answer.slideDown();
    $(this).find('span').text('-');

  }
});

$('.nav-flex').hover(
  function(){
    $(this).find('.nav-list1').addClass('list-show');
}, 
 function(){
   $(this).find('.nav-list1').removeClass('list-show');
});
$('.nav-flex').hover(
  function(){
    $(this).find('.nav-list1').addClass('list-show');
}, 
 function(){
   $(this).find('.nav-list1').removeClass('list-show');
});
$('.nav-flex').hover(
  function(){
    $(this).find('.nav-list1').addClass('list-show');
}, 
 function(){
   $(this).find('.nav-list1').removeClass('list-show');
});
$('.nav-flex').hover(
  function(){
    $(this).find('.nav-list1').addClass('list-show');
}, 
 function(){
   $(this).find('.nav-list1').removeClass('list-show');
});

});

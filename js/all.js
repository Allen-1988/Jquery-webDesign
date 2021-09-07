$(document).ready(function () {
  //下拉選單
  $('.dropdown').click(function (e) { 
    e.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

  //輪播牆
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    speed:3000,
    loop: true,

    //自動播放
    autoplay: {
      delay: 1000,
    },
    //翻轉效果
     effect: 'cube',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    }*/
  })

  //照片放大
  lightbox.option({
    'resizeDuration': 1000,
    'wrapAround': true
    
  })
  $('.image').zoomify('zoomIn');

  //TOP滑動效果
  $('.top a').click(function (e) { 
    e.preventDefault();
    //way1
    $('html,body').animate({
    scrollTop:0
    },3000);
    
   //way2
   //$('html').scrollTop(0);
  });
});

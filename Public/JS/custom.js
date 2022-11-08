(function ($) {
    "use strict";
  
    $('.popup-youtube, .popup-vimeo').magnificPopup({
      // disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  
    $(document).ready(function() {
      $('select').niceSelect();
    });
    // menu fixed js code
    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
        $('.main_menu').addClass('menu_fixed animated fadeInDown');
      } else {
        $('.main_menu').removeClass('menu_fixed animated fadeInDown');
      }
    });
  
  $(document).ready(function() {
    $('select').niceSelect();
  });
  

 
})  
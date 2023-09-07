    // ================= fix nav ================
    // sal();
    $(function(){

      $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        // ================= fix nav ================
        if (scroll > 5) {
          $(".main_menu").addClass("fixNav");
          $(".fixNav").fadeIn(5);
        } else {
    
          $(".main_menu").removeClass("fixNav");
          $(".fixNav").fadeOut(5);
        }
      })

      // "use strict";

    //======menu fix js======
    // if ($('.main_menu').offset() != undefined) {
    //     var navoff = $('.main_menu').offset().top;
    //     $(window).scroll(function () {
    //         var scrolling = $(this).scrollTop();

    //         if (scrolling > navoff) {
    //             $('.main_menu').addClass('menu_fix');
    //         } else {
    //             $('.main_menu').removeClass('menu_fix');
    //         }
    //     });
    // }

    })
    
    
//=======OFFER ITEM SLIDER======

$('.offer_item_wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: ".left_btn",
    nextArrow: ".right_btn",
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // ========FOOD MENU MIXIT UP===========
  var mixer = mixitup('.food_item_wrap', {
    selectors: {
        target: '.food_item'
    },
    animation: {
        duration: 300
    }
  });
  // =========Chefs==========
  $('.team_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: ".left_btn",
    nextArrow: ".right_btn",
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // ========Order==========
  $('.order_item_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // =========Testimonial========
  $('.testimonial_wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: ".left_btn",
    nextArrow: ".right_btn",
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // =========Counter_up============
  $(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000  
    });
})
// ==========BLOG==========
$('.blog_wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".left_btn",
  nextArrow: ".right_btn",
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
// ==============WOW ============
$(function(){
  new WOW().init();
})
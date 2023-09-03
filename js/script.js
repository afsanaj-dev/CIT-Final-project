
//=======OFFER ITEM SLIDER======
// $('.offer_item_slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     dots: false,
//     arrows: true,
//     nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
//     prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',
//     responsive: [
//         {
//             breakpoint: 1400,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//             }
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 arrows: false,
//                 slidesToShow: 1,
//             }
//         }
//     ]
// });

$('.offer_item_wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: ".left_btn",
    nextArrow: ".right_btn",
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
  });
  // ========Order==========
  $('.order_item_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

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
});
// ==============WOW ============
$(function(){
  new WOW().init();
})
  // =========Testimonial========
  $('.about_testimonial').slick({
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

// =========ABOUT Counter_up============????????????
$(function(){
  $('.about_counter').counterUp({
      delay: 10,
      time: 2000  
  });
});
  // ==============WOW ============
  $(function(){
    new WOW().init();
  }) ;

'use strict'

$(document).ready(function () {
  $('.footer-slider').slick({
    slidesToShow: 5,
    dots: false,
    adaptiveHeight: true,
    variableWidth: true,
    speed: 500,
    infinite: true,
    swipeToSlide: true,
    easing: 'ease',
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 950,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   }, {
    //     breakpoint: 600,
    //     settings: {
    //       arrows: false,
    //     }
    //   }
    // ]
  });
});
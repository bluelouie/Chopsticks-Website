// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });


$(document).ready(function(){
  $('.slick-one').slick({
  dots: true,
  arrows: false,
  speed: 600,
  fade: true,
  swipeToSlide: true,
  adaptiveHeight: true,
  autoplay: true
  });

  $('.slick-two').slick({
  arrows: true,
  speed: 600,
  fade: true,
  adaptiveHeight: true,
  moblieFirst: true,
  swipeToSlide: true,
  autoplay: true,
  });
});

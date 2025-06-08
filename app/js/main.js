$(function () {

  var container1 = document.querySelector('.products');
  var container2 = document.querySelector('.design');
  var config = {
    controls: {
      scope: 'local'
    }
  };
  var mixer1 = mixitup(container1, config);
  var mixer2 = mixitup(container2, config);

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

});
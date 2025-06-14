$(function () {
  $('.price-filter__input').ionRangeSlider({
    type: "double",
        onStart: function (data) {
      $('.price-filter__from').text(data.from.toFixed(2));
      $('.price-filter__to').text(data.to.toFixed(2));
    },
    onChange: function (data) {
      $('.price-filter__from').text(data.from.toFixed(2));
      $('.price-filter__to').text(data.to.toFixed(2));
    },
  });

  $('.star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: "true",
    spacing: "6px",
  });

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
$(function () {
  let bannerSliderFor = $('.banner-slider-for');
  let slideCount;

  $(function () {
    bannerSliderFor.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.banner-slider',

    });

    $('.banner-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.banner-slider-for',
      dots: false,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerPadding: '60px',
          }
        },
      ]
    });
  })

  bannerSliderFor.on('init', function(e, slick){
    console.log(slick)
    slideCount = slick.slideCount;
   $('.total').text(slideCount);
   getCurrentSlide(slick.currentSlide);
  });

  bannerSliderFor.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    // console.log(nextSlide);
    getCurrentSlide(nextSlide);
  });

  function getCurrentSlide(currentSlide){
    // console.log(currentSlide);
    $('.current').text(currentSlide + 1);
  }


})

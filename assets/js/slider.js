/* ###  Sliders ###*/

/* Branding Slider */
$('.brand-slider-active').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
      },
    },
  ],
});

/*Homepage-02 === brand-slider */
$('.brand-slider-item').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
      },
    },
  ],
});
/* Banner Branding */
$('.banner-brand__slider').slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3200,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

/*testimonial_slider */
$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '.testimonial-wrapper .prev-arrow',
  nextArrow: '.testimonial-wrapper .next-arrow',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/* Testimonial Slider part-02 */
$('.testimonial-active').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  dots: false,
  autoplaySpeed: 2000,
  prevArrow: '<span class="prevArrow"><i class="fas fa-arrow-left"></i></span>',
  nextArrow:
    '<span class="nextArrow"><i class="fas fa-arrow-right"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/* Client review_slider*/
$('.review-active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 2500,
  prevArrow: '<button class="prevArrow">Prev</button>',
  nextArrow: '<button class="nextArrow">Next</button>',
});

/* client image */
$('.client-image').slick({
  dots: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

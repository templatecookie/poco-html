(function ($) {
  'use strict';
  // UI VARS
  let logo = document.querySelector('.logo-04');

  // Sticky Header
  window.addEventListener('scroll', function () {
    let header = document.querySelectorAll('header');
    // console.log(header);
    header.forEach((headItem) => {
      headItem.classList.toggle('sticky', window.scrollY > 0);
    });
    window.scrollY > 0
      ? logo.setAttribute('src', 'assets/img/logo/logo.png')
      : logo.setAttribute('src', 'assets/img/logo/logo04.png');
  });

  //search box opern
  $('.search-bar').on('click', function () {
    $('.search-box').addClass('search-open');
  });
  $('.search-close').on('click', function () {
    $('.search-box').removeClass('search-open');
  });

  //humberger menu
  function toggleSidebar() {
    $('header aside').toggleClass('active');
    $('.hamburger-menu').toggleClass('open');

    var sidebarOpen = $('header aside').hasClass('active');
    if (sidebarOpen) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }

  $('.hamburger-menu').on('click', function () {
    toggleSidebar();
  });

  $('.close-sidebar').on('click', function () {
    toggleSidebar();
  });

  $('aside .overlay').on('click', function () {
    toggleSidebar();
  });

  // Sliders Start
  //brand_slider
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
  // Homepage-02 // brand-slider
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
  $('.banner-brand__slider').slick({
    infinite: true,
    slidesToShow: 5,
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
          // centerMode: true,
          // centerPadding: '30px',
        },
      },
    ],
  });

  //testimonial_slider
  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 2000,
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
      // {
      //     breakpoint: 480,
      //     settings: {
      //         slidesToShow: 1,
      //     },
      // },
    ],
  });

  //testimonial_slider
  $('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: false,
    autoplaySpeed: 2000,
    prevArrow:
      '<span class="prevArrow"><i class="fas fa-arrow-left"></i></span>',
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      // {
      //     breakpoint: 480,
      //     settings: {
      //         slidesToShow: 1,
      //     },
      // },
    ],
  });

  //Client review_slider
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
  // Sliders End

  // magnificPopup video view
  $('.popup-video').magnificPopup({
    type: 'iframe',
  });

  // SKILL POGRESSBAR
  function Circlle(el) {
    $(el)
      .circleProgress({
        fill: {
          color: '#FF465E',
        },
      })
      .on('circle-animation-progress', function (event, progress, stepValue) {
        $(this)
          .find('strong')
          .text(String(stepValue.toFixed(2)).substr(2) + '%');
      });
  }
  Circlle('.round');
})(jQuery);

$(document).ready(function () {
  var $slider = $('.projectSlider__contentSlider');
  var $progressBar = $('.projectSlider__ProgressBar');
  var $progressBarLabel = $('.projectSlider__label');

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '-150px',
    infinite: true,
    autoplay: false,
    // autoplaySpeed: 1900,
  });
});

// disalbe scrolling
function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}
// enable scrolling
function enableScrolling() {
  window.onscroll = function () {};
}

// sidebar stickybar fixed when scrolling
let topLimit = Math.round($('.aside').offset().top);
let bottomLimit = Math.round($('footer').offset().top);

let height = $(window).scrollTop();
// console.log(topLimit); // 670
// console.log(bottomLimit); //3451
// console.log(height); // 0
$(window).scroll(function () {
  console.log(height);
  // console.log(topLimit);
  // console.log(topLimit <= $(window).scrollTop());
  if (topLimit <= $(window).scrollTop()) {
    $('.aside').addClass('sticky');
  } else {
    $('.aside').removeClass('sticky');
  }

  if (1300 <= $(window).scrollTop()) {
    // $('.aside').removeClass('sticky');
    $('.aside').css({
      top: '-150px',
    });
  }
  if (2100 <= $(window).scrollTop()) {
    // $('.aside').removeClass('sticky');
    $('.aside').css({
      top: '-620px',
    });
  }
  if (2500 <= $(window).scrollTop()) {
    // $('.aside').removeClass('sticky');
    $('.aside').css({
      top: '-912px',
    });
  }
  if (2900 <= $(window).scrollTop()) {
    // $('.aside').removeClass('sticky');
    $('.aside').css({
      top: '-1500px',
    });
  }
  if (3200 <= $(window).scrollTop()) {
    // $('.aside').removeClass('sticky');
    $('.aside').css({
      top: '-1520px',
    });
  }
});

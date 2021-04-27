(function ($) {
  'use strict';
  // UI VARS
  let logo = document.querySelector('.logo-04');

  // Sticky Header
  window.addEventListener('scroll', function () {
    let header = document.querySelectorAll('header');

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

  //testimonial_slider
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
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
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

  // Sliders End

  // magnificPopup video view
  $('.popup-video').magnificPopup({
    type: 'iframe',
  });

  // SKILL POGRESSBAR
  function Circlle(el) {
    $(el)
      .circleProgress({
        lineCap: 'round',
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

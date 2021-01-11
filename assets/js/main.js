(function ($) {
    'use strict';
    //search box opern
    $('.search-bar').on('click', function () {
        $('.search-box').addClass('search-open');
    });
    $('.search-close').on('click', function () {
        $('.search-box').removeClass('search-open');
    });
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
                breakpoint: 480,
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
        autoplaySpeed: 2000,
    });

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
            .on(
                'circle-animation-progress',
                function (event, progress, stepValue) {
                    $(this)
                        .find('strong')
                        .text(String(stepValue.toFixed(2)).substr(2) + '%');
                }
            );
    }
    Circlle('.round');

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

    // sticky menu
    var $window = $(window);
    var $fh = $('header');

    // Sticky Menu
    $window.on('scroll', function () {
        var $offset = $(this).scrollTop();
        if ($offset > 0.5) {
            $fh.addClass('sticky');
        } else {
            $fh.removeClass('sticky');
        }
    });
    // @ts-ignore
})(jQuery);

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

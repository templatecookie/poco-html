(function ($) {
	"use strict";

    //brand_slider
    $('.brand-slider-active').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1200,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 2,
				},
			},
		],
    });

})(jQuery);

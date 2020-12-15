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
		arrows: false,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 2000,
		prevArrow: '<div class="prev-arrow"><img class="img-fluid" src="assets/img/icon/f.svg" alt="icon"></div>',
		nextArrow: '<div class="next-arrow"><img class="img-fluid" src="assets/img/icon/right.svg" alt="icon"></div>',
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
	
/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

})(jQuery);

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
		responsive: [{
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
		prevArrow: '<div class="prev-arrow"><img class="img-fluid logo-img" src="assets/img/icon/f.svg" alt="icon"></div>',
		nextArrow: '<div class="next-arrow"><img class="img-fluid logo-img" src="assets/img/icon/right.svg" alt="icon"></div>',
		responsive: [{
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

	// magnificPopup video view
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// SKILL POGRESSBAR
	function Circlle(el) {
		$(el).circleProgress({
				fill: {
					color: '#FF465E'
				}
			})
			.on('circle-animation-progress', function (event, progress, stepValue) {
				$(this).find('strong').text(String(stepValue.toFixed(2)).substr(2) + '%');
			});
	};
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

let modalBtn = document.querySelector('#callModal');
let modalWindow = document.querySelector('.modalBack');
let form = document.querySelector('.form');

$(document).ready(function() {

	modalBtn.addEventListener('click', function() {
		modalWindow.style.top = '0';
		// form.style.top = '50% !important';
		form.classList.add('showForm');
		// form.classList.remove('form');
	});
	
	modalWindow.addEventListener('click', function() {
		modalWindow.style.top = '-1000px';
		// form.style.top = '-150%';
		form.classList.remove('showForm');
	});

	jQuery(function($) {
		$("#phone").mask("+7(999) 999-9999");
	});

	

// burger button

	// $('.burger').on('click', function() {
	// 	if ($('.nav-links').hasClass('outLinks')) {
	// 		$('.nav-links').toggleClass('outLinks');
	// 		setTimeout(function() {
	// 			$('.burger__closeLine1').toggleClass('burger__closeLine1-out');
	// 		}, 800);
	// 		setTimeout(function() {
	// 			$('.burger__closeLine2').toggleClass('burger__closeLine2-out');
	// 		}, 1000);
	// 		setTimeout(function() {
	// 		$('.burger__line1').toggleClass('outBurger');
	// 		}, 200);
	// 		setTimeout(function() {
	// 		$('.burger__line2').toggleClass('outBurger');
	// 		}, 400);
	// 		setTimeout(function() {
	// 		$('.burger__line3').toggleClass('outBurger');
	// 		}, 600);
	// 	} else {
	// 		$('.nav-links').toggleClass('outLinks');
	// 		setTimeout(function() {
	// 			$('.burger__closeLine1').toggleClass('burger__closeLine1-out');
	// 		}, 400);
	// 		setTimeout(function() {
	// 			$('.burger__closeLine2').toggleClass('burger__closeLine2-out');
	// 		}, 200);
	// 		setTimeout(function() {
	// 		$('.burger__line1').toggleClass('outBurger');
	// 		}, 1000);
	// 		setTimeout(function() {
	// 		$('.burger__line2').toggleClass('outBurger');
	// 		}, 800);
	// 		setTimeout(function() {
	// 		$('.burger__line3').toggleClass('outBurger');
	// 		}, 600);
	// 	}
	// });


// slickSlider

	jQuery('#first').slick({
		dots: true,
		initialSlide: 1,
		waitForAnimate: false,
		autoplay: 1
	});
	
	jQuery('#second').slick({
		dots: true,
		waitForAnimate: false,
		autoplay: 1
	});

	jQuery('#third').slick({
		waitForAnimate: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

});
	
(function ($) {
"use strict";

//masonry
$('#container').imagesLoaded( function() {
  $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-item'
  }
})
});

// One Page Nav
var top_offset = $('.header-area').height() - 100;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});

// sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#header-sticky").removeClass("sticky-menu");
	} else {
		$("#header-sticky").addClass("sticky-menu");
	}
});

// RESPONSIVE MENU
$('.responsive').on('click', function (e) {
	$('#mobile-menu').slideToggle();
});



// menu toggle
$(".main-menu li a").on('click', function () {
	if ($(window).width() < 1200) {
		$("#mobile-menu").slideUp();
	}
});

// smoth scroll
$(function () {
	$('a.smoth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 100
		}, 1000);
		event.preventDefault();
	});
});

// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-chevron-right"></i></button>',
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// services-active
$('.services-active').slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

// services-active
$('.blog-active2').slick({	
	infinite: true,
	arrows: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				arrows: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// brand-active
$('.brand-active').slick({
	dots: false,
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 6,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

// testimonial-active
$('.testimonial-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// blog
$('.blog-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
});

// counterUp

$('.count').counterUp({
	delay: 100,
	time: 1000
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

// paroller
if ($('.paroller').length) {
	$('.paroller').paroller();
}

//* Parallaxmouse js
function parallaxMouse() {
	if ($('#parallax').length) {
		var scene = document.getElementById('parallax');
		var parallax = new Parallax(scene);
	};
};
parallaxMouse();

// service active
$('.s-single-services').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.s-single-services').removeClass('active');
})

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp',
	topDistance: '300',
	topSpeed: 300,
	animation: 'fade',
	animationInSpeed: 200,
	animationOutSpeed: 200,
	scrollText: '<i class="fas fa-level-up-alt"></i>',
	activeOverlay: false,
});

// WOW active
new WOW().init();


})(jQuery);
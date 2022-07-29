$(document).ready(function () {
	$(".header__slider").owlCarousel({
		items: 1,
		// autoplay: true,
		autoplaySpeed: 1000,
		smartSpeed: 750,
		loop: true
	});

	$("#phone1").inputmask("+7 (999) 999-99-99");

});
$( document ).ready(function() {

	console.log( 'JQuery!!!' );

	$('.header-bottom__nav-btn').on('click', function () {
		$('.header-bottom__nav-btn .nav-btn').toggleClass('active');
		$('.header-bottom__nav').slideToggle();
	});

});
jQuery(document).ready(function($) {
	//$('#login-modal').modal();

	/* Menu */
	$('nav#menu').mmenu();
	
	$(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 100,
        from: 0,
        to: 100,
        grid: true,
        skin: "modern"
	});

});
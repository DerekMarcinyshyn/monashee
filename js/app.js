/*
 * app.js
 * 
 * @author	Derek Marcinyshyn <derek@marcinyshyn.com>
 * @since	February 10, 2013
 */
$(document).ready(function() {
	$('.sidebar').css('opacity', '0');
	$('.document').css('margin-left', '200px');
	$('.document').css('opacity', '0')
	//$('.document').fadeIn(600);
	$('.document').animate({
		marginLeft: '30px',
		opacity: 1
	}, 250, function(){
		$('.sidebar').animate({
			opacity: 1
		}, 1000);
	});
});

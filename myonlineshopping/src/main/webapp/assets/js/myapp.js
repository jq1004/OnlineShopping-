$(function() {

	// solving the active menu problem
	switch (menu) {

		case 'About Us':
			$('#about').addClass('active');
			$('#home').removeClass('active');
			break;
		case 'Contact Us':
			$('#contact').addClass('active');
			$('#home').removeClass('active');
			break;
		default:
			$('#home').addClass('active');
			break;
	}

});
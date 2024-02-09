function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

$(document).ready(function () {
	$('.slider__body').slick({
		arrows: false,
		dots: true,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-next"></button>',
		responsive: [{
			breakpoint: 768,
			setting: {}
		}]
	});
});
		/**/
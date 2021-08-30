const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	// loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
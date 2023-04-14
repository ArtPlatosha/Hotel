var swiper = new Swiper('.home-slider', {
	grabCursor: true,
	loop:true,
	centeredSlides:true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});
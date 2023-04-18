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

var swiper = new Swiper('.room-slider', {
	spaceBetween: 20,
	grabCursor: true,
	loop:true,
	centeredSlides:true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper('.gallery-slider', {
	spaceBetween: 10,
	grabCursor: true,
	loop:true,
	centeredSlides:true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 4,
		},
	},
});

var swiper = new Swiper('.review-slider', {
	spaceBetween: 10,
	grabCursor: true,
	loop:true,
	centeredSlides:true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
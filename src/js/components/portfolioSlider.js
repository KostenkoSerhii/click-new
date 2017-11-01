(function() {
	let portfSlider = $('.js-pslider');
	portfSlider.slick({
		vertical: true,
		dots: true,
		arrows: false,
		infinite: false
	});

	let navList = portfSlider.find(`.slick-dots`);

	portfSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		changeNav(nextSlide);
	});

	function changeNav(nextSlide) {
		navList.find(`li`).each(function(index, item){
			$(item).removeClass("after-active");
			if(index > nextSlide){
				$(item).addClass("after-active");
			}
		})
	};

	function setFirstNav() {
		changeNav(portfSlider.slick('slickCurrentSlide'));
	};
	setFirstNav();

	$('.js-pslider-slide').each(function(index, item) {
		let progectName = $(item).attr("data-project-name");
		let navItem = navList.find(`li:nth-of-type(${index + 1}) button`);

		navItem.html(progectName);
	});

})();
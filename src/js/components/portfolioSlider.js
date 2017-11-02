(function() {
	let portfSlider = $('.js-pslider'),
	scrollResolution = true,
	slideCount = $(".js-pslider-slide").length - 1,
	activeSlide,
	fistSlideActive = false,
	lastSlideActive = false,
	firstScrollFinish = false;

	portfSlider.slick({
		vertical: true,
		dots: true,
		arrows: false,
		infinite: false,
		draggable: false
	});

	let navList = portfSlider.find(`.slick-dots`);
	console.log(slideCount);

	document.querySelector(".js-pslider").addEventListener("wheel", onWheel);


	function onWheel(e) {

		if(activeSlide == 0 || activeSlide == slideCount) {
			document.querySelector(".js-pslider").removeEventListener("wheel", onWheel);
			return;
		};
		let event = e || window.event,
		delta = event.deltaY + "" || event.detail + "" || event.wheelDelta + "",
		scrollDirection = delta.indexOf("-") ? "bottom" : "top";

		if(scrollResolution){
			if(scrollDirection == "top" ){
				portfSlider.slick('slickPrev');
			}else {
				portfSlider.slick('slickNext');
			}
		}

		event.preventDefault ? event.preventDefault() : (event.returnValue = false);
	};

	portfSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('html, body').animate({
			scrollTop: portfSlider.offset().top
		}, 500);
		changeNav(nextSlide);
		// scrollResolution = false;
	});

	portfSlider.on('afterChange', function(event, slick, currentSlide){
		// scrollResolution = true;
		activeSlide = currentSlide;
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
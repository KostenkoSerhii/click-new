import { TimelineMax } from 'gsap';

function whyWeAnimation(){
	let tl = new TimelineMax(),
	$logo = $(".js-ww-logo"),
	$leftLine = $(".js-ww-left-line"),
	$topLine = $(".js-ww-top-line"),
	$bottomLine = $(".js-ww-bottom-line"),
	$parent = $(".js-ww-block");


	tl
		.fromTo($logo, 0.5, {y: 500, opacity:0}, {y: 0, opacity:1}, 0)
		.fromTo($bottomLine, 0.2, {width: 0}, {width: 453}, "+=0")
		.fromTo($leftLine, 0.2, {height: 0}, {height: '100' + '%' }, "+=0")
		.fromTo($topLine, 0.2, {width: 0}, {width: 462}, "+=0")


		// .from($('.logo__y'),1,{y: 100}, "-=1");
}
module.exports = whyWeAnimation;
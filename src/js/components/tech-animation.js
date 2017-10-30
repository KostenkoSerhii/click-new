import { TimelineMax } from 'gsap';
import PubSub from 'pubsub-js';

function techAnimation(){
	let token = PubSub.subscribe('tech-animation', animation);

	function animation(){
		console.log("start tech animation")
		
		let tl = new TimelineMax(),
		$techItem = $(".js-tech-item");


		tl
		.staggerFromTo($techItem, 1, {y: 50},{ opacity:1, y: 0, ease: Elastic.easeOut.config(1, 0.5)}, 0.2, )

	};

	PubSub.subscribe('why-we-animation')
	}
	module.exports = techAnimation;
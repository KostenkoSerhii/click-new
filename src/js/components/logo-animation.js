import { TimelineMax } from 'gsap';
import PubSub from 'pubsub-js';
function logoAnimation(){
	console.log("start logo animation");
	let logo = $(".js-logo-svg");
	let tl = new TimelineMax({delay: 1, onComplete: function(){PubSub.publish('start-ftext-anim')}});

	tl
	.from($(".js-logo-C-1"), 0.8, { y: 30, opacity: 0 },0)
	.from($('.js-logo-L'),1,{y: -70, rotation: 10,transformOrigin:"100% 50%"}, "-=0.7")
	.from($('.js-logo-I'),0.8,{y: 70}, "-=0.7")
	.from($(".js-logo-C-2"), 1, { y: -120},"-=0.7")
	.from($('.js-logo-K'),0.8,{scale: 0,transformOrigin:"50% 50%"}, "-=0.7")
	.from($('.js-logo-A'),0.8,{y: 70}, "-=0.7")
	.from($('.js-logo-R'),0.8,{y: -70, rotation: 10,transformOrigin:"100% 50%"}, "-=0.7")
	.from($('.js-logo-T'),0.8,{opacity: 0, x: 50}, "-=0.7")
	.from($('.js-logo-stone'),0.8,{scale: 0,transformOrigin:"50% 50%"}, "-=1")
	.from($('.js-logo-line'),0.6,{y: 30, opacity: 0}, "-=0.8")
	.staggerFrom($('.js-logo-sec-text path, .js-logo-sec-text polygon '),0.2,{y: 30, opacity: 0}, 0.05, "-=0.5")
}
module.exports = logoAnimation;
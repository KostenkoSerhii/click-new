import sayHello from './lib/sayHello.js';
// import logoAnimation from './components/logo-animation.js';
import whyWeAnimation from './components/why-we-animation.js';
import Tabs from './modules/tabs.js';
import hoverPlate from './components/plate-hover.js';
import svgUseIt from 'svg-use-it';

sayHello();

$(document).ready(function(){

	let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;


	svgUseIt();

	// logoAnimation();
	hoverPlate();
	whyWeAnimation();

	new Tabs({selector: ".js-tabs"});



//  ready
});
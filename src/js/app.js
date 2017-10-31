import sayHello from './lib/sayHello.js';
import logoAnimation from './components/logo-animation.js';
import whyWeAnimation from './components/why-we-animation.js';
import fTextAnimation from './components/first-animation.js';
import techAnimation from './components/tech-animation.js';
import scrollMagic from './components/scrollmagic.js';
import Tabs from './modules/tabs.js';
import hoverPlate from './components/plate-hover.js';
import svgUseIt from 'svg-use-it';
import './components/clickEvent.js';



sayHello();

$(document).ready(function(){

	let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

	logoAnimation();
	fTextAnimation();
	svgUseIt();
	scrollMagic();
	hoverPlate();
	whyWeAnimation();
	techAnimation();

	new Tabs({selector: ".js-tabs"});



//  ready
});
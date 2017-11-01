import sayHello from './lib/sayHello.js';
import logoAnimation from './components/logo-animation.js';
import whyWeAnimation from './components/why-we-animation.js';
import fTextAnimation from './components/first-animation.js';
import techAnimation from './components/tech-animation.js';
import scrollMagic from './components/scrollmagic.js';
import Tabs from './modules/tabs.js';
import hoverPlate from './components/plate-hover.js';
import svgUseIt from 'svg-use-it';
import slick from 'slick-carousel';
import './components/clickEvent.js';
import './components/portfolioSlider.js';



sayHello();

$(document).ready(function(){

	let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

	svgUseIt();
	logoAnimation();
	fTextAnimation();
	scrollMagic();
	hoverPlate();
	whyWeAnimation();
	techAnimation();

	new Tabs({selector: ".js-tabs"});








//  ready
});
import { TimelineMax } from 'gsap';
import 'pixi.js';
import 'pixi-filters';
// import PubSub from 'pubsub-js';

function fTextAnimation(){

	let $fscreen = $(".js-fscreen"),
	$scene = $(".js-fscreen-scene"),
	textFirst = $(".js-main-text-first").html(),
	textSecond = $(".js-main-text-second").html(),
	fscreenW = $fscreen.width(),
	fscreenH = $fscreen.height();
	//задержка с установокй цвета
	let app = new PIXI.Application(fscreenW, fscreenH, {
		backgroundColor: 0x023050
	});
	app.stage.interactive = true;
	$scene.append(app.view);

	setTimeout(function(){
		$scene.css("opacity", 1)
	}, 300);

	let textContainer = new PIXI.Container();
	app.stage.addChild(textContainer);

	//add text
	let fText = new PIXI.Text(textFirst, {
		fontFamily: 'Arial Narrow',
		fontSize: 60,
		fontStyle: 'normal',
		fontWeight: 'bold',
		fill: '#00d596',
		wordWrap: false,
		wordWrapWidth: 540
	});

	fText.x = fscreenW /2 - fText.width /2 - 200;
	fText.y = fscreenH /2 - fText.height;
	fText.alpha = 0;
	textContainer.addChild(fText);

	let sText = new PIXI.Text(textSecond, {
		fontFamily: 'Arial Narrow',
		fontSize: 50,
		fontStyle: 'normal',
		fontWeight: 'bold',
		fill: '#ffffff',
		wordWrap: false,
		wordWrapWidth: 540
	});
	sText.x = fscreenW /2 - fText.width /2 + 200;
	sText.y = fscreenH /2 - sText.height + 50;
	sText.alpha = 0;
	textContainer.addChild(sText);
//add text

// displacement map
let displacementSprite = PIXI.Sprite.fromImage('img/displacement.png');
// displacementSprite.anchor.set(0.5);
displacementSprite.width = fscreenW /2;
displacementSprite.height = fscreenH /2;
displacementSprite.x = 400;
let displacementFilter = new PIXI.filters.DisplacementFilter(
	displacementSprite
	);
displacementFilter.scale.x = 250;
displacementFilter.scale.y = 375;
// displacementFilter.x = fscreenW /2 ;
// displacementFilter.y = fscreenH /2 ;
app.stage.addChild(displacementSprite);
textContainer.filters = [displacementFilter];
// end of displace


app.ticker.add(function(delta) {
	app.renderer.render(textContainer);
});


let tl = new TimelineMax();
tl
.to(displacementFilter.scale, 1, { x: 0.1, y: 0.1 },0)
.to(fText.position, 1, { x: fscreenW /2 - fText.width /2 },0)
.to(fText, 1, { alpha: 1 },0)
.to(sText.position, 1, { x: fscreenW /2 - sText.width /2 },0)
.to(sText, 1, { alpha: 1 },0);

function animation(){
	console.log("start pixi animation")

	};

	// PubSub.subscribe('why-we-animation')
}
module.exports = fTextAnimation;
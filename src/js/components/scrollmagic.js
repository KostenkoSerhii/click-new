import ScrollMagic from 'scrollmagic';
import PubSub from 'pubsub-js';


function scrollMagic(){
	let controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: "onEnter"
		}
	});
// why we
new ScrollMagic.Scene({
		// duration: 100,	
		offset: 150,
		triggerElement: ".js-ww-block",
		reverse: false
	})
.addTo(controller)
.on("enter", function(e){
	PubSub.publish('why-we-animation');
});
// why we

new ScrollMagic.Scene({
		offset: 150,
		triggerElement: ".js-tech",
		reverse: false
	})
.addTo(controller)
.on("enter", function(e){
	PubSub.publish('tech-animation');
});


}
module.exports = scrollMagic;
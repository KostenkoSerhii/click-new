class Tabs{
	constructor(options){
		this._tabs = document.querySelectorAll(options.selector);
		this._init()
	}

	_init(){
		this._loop()
	}

	_loop(){
		for (let i = 0; i < this._tabs.length; i++) {
			this._firstLoad(this._tabs[i]);
			this._clickLink(this._tabs[i]);
		}
	}

	_firstLoad(tabsElem){
		let navLinks = tabsElem.querySelectorAll(".js-tabs-link");
		let targetItemIndex = undefined;
		let link;

		for (let i = 0; i < navLinks.length; i++) {
			if(navLinks[i].classList.contains('is-active')){
				targetItemIndex = navLinks[i].getAttribute("data-target");
				link = navLinks[i];
				break;
			}
		};
		this._togglerItem(targetItemIndex, tabsElem, navLinks, link)

	}


	_clickLink(tabsElem){
		let navLinks = tabsElem.querySelectorAll(".js-tabs-link");

		for (let i = 0; i < navLinks.length; i++) {
			let link = navLinks[i]
			link.addEventListener("click", (e) => {
				e.preventDefault();

				let targetItemIndex = link.getAttribute("data-target");

				for (var i = 0; i < navLinks.length; i++) {
					navLinks[i].classList.remove("is-active")
				}

				this._togglerItem(targetItemIndex, tabsElem, navLinks, link)
			})
		};
	}
	_togglerItem(targetItemIndex, tabsElem, navLinks, link){
		if(targetItemIndex !== undefined){
			this._changeActiveItem(tabsElem, targetItemIndex)
			link.classList.add("is-active");
		}else{
			this._changeActiveItem(tabsElem, 0)
			navLinks[0].classList.add("is-active")
		}
	}

	_changeActiveItem(tabsElem, targetItemIndex){
		let items = tabsElem.querySelectorAll(".js-tabs-item");
		let activeItem = tabsElem.querySelector(`.js-tabs-item[data-item = "${targetItemIndex}"]`);
		this._fadeIn(activeItem);
		for (let i = 0; i < items.length; i++) {
			// items[i].classList.remove("is-active");
			this._fadeOut(items[i]);
		};

		// tabsElem.querySelector(`.js-tabs-item[data-item = "${targetItemIndex}"]`).classList.add("is-active");

	}

	_fadeOut(el){
		el.style.opacity = 1;
		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.style.display = "none";
			} else {
				requestAnimationFrame(fade);
			}
		})();
	}

	_fadeIn(el, display){
		el.style.opacity = 0;
		el.style.display = "block";
		(function fade() {
			let val = parseFloat(el.style.opacity);
			if (!((val += .1) > 1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();
	}
	
}

module.exports = Tabs;
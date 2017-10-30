function hoverPlate(){
	let plateBlock = $(".js-plate-block");
	
	// plateBlock.ontouchstart(function(){
	// 	$(this).toggleClass("hover")
	// });
	plateBlock.on("click", function(){
		let $this = $(this);
		// if($this.hasClass("rotated")) return;

		$this.toggleClass("rotated");

	})
};

module.exports = hoverPlate;
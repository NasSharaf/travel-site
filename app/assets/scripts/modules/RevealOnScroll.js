import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	//selects items (in our case SVGs) to reveal on scroll
	constructor(els, offset) {
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();	
	}
	//In order to reveal, we need to hide the items intitally. Hence, hideInitially
	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}
	//This is a library to create a point to initiate the reveal when scrolling down
	createWaypoints() {
		//to be used to access offsetPercentage below
		var that = this;
		//runs four times, once for each item
		this.itemsToReveal.each(function() {
			//to be used to access itemsToReveal down below
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;
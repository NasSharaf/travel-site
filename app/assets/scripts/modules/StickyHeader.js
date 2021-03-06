import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	//selects items (mostly navbar/site-header components) to manipulate
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}
	//refreshes to correctly fade in elements and highlight header
	refreshWaypoints() {
		this.lazyImages.on('load', function(){
			Waypoint.refreshAll();
		});
	}
	//adds smooth scrolling
	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}
	//turns the navbar dark when below large hero banner
	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(){
				that.siteHeader.toggleClass("site-header--dark");
			}
		});
	}
	//highlights what section you are in in primary nav bar
	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			//when scrolling down
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
					that.headerLinks.removeClass("is-current-link");
					$(matchingHeaderLink).addClass("is-current-link");						
					}
				},
				offset: "15%"
			});
			//when scrolling up
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
					that.headerLinks.removeClass("is-current-link");
					$(matchingHeaderLink).addClass("is-current-link");						
					}
				},
				offset: "-40%"
			});

		});
	}
}

export default StickyHeader;
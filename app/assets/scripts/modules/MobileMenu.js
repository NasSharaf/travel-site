import $ from 'jquery'; 

class MobileMenu {
	//selects elements to manipulate
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}
	//points to what should be done when clicked
	events() {
		//Here the value "this" is pointing to the original constructor. It needs to be "bind"-ed
		//to the constructor so that whe "this" is called in the toggleTheMenu() it will allow 
		//access to menuContent
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	//toggles certain actions on and off
	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;
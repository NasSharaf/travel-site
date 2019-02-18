import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		//clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));
		//clicking the close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		//pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}
	//key press handler
	keyPressHandler(e) {
		//ID for escape key is 27
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}
	//opens modal
	openModal() {
		this.modal.addClass("modal--is-visible");
		// prevents "#" href from pulling page up to top
		return false;
	}
	//closing modal
	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;
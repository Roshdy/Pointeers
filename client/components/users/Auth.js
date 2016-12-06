Template.LoginModal.events({
	'show.bs.modal #Login-Modal': ()=> {
		$('body').addClass('modal-open');
	},
	'hidden.bs.modal #Login-Modal': ()=> {
		$('body').removeClass('modal-open');
	}
});
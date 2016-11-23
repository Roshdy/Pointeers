Template.LoginModal.events({
	'click .close-login': ()=> {
		Session.set('loginModal-toggle', '');
	}
});
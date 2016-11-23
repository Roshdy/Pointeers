Template.AppHeader.events({
	'click .login-toggle': ()=> {
		Session.set('loginModal-toggle', 'open');
	}
});
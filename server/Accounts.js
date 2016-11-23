var postSignUp = function(userId, info){
	console.log(userId);
	console.log(info);
	Roles.addUsersToRoles(userId, ['consumer']);
};

AccountsTemplates.configure({
    // Hooks
	postSignUpHook: postSignUp
});
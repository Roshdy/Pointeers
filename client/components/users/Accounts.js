AccountsTemplates.configure({
	// Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,	// true in production
    lowercaseUsername: false,
    focusFirstInput: true,

	// Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use'
});

AccountsTemplates.addFields([
	{
		_id: 'firstName',
		type: 'text',
		placeholder: 'First Name',
		displayName: 'First Name',
		required: true
	},
	{
		_id: 'lastName',
		type: 'text',
		placeholder: 'Last Name',
		displayName: 'Last Name',
		required: true
	}
]);
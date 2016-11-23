/*************************** General routes ***************************/
// Take actions upon account Login/Logout
/*if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);
*/
FlowRouter.route('/', {
	name: 'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('feeds-wall');
		}
		GAnalytics.pageview();
		BlazeLayout.render('PreLoginLayout', {main: 'Auth'});
	}
});

FlowRouter.route('/feeds-wall', {
	name: 'feeds-wall',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main: 'FeedsWall'});
	}
});
/*************************** Special routes ***************************/
/************ Admin routes ************/
var adminRoutes = FlowRouter.group({
	prefix: '/admin',
	name: 'admin'
});
/************ Consumer routes ************/
var consumerRoutes = FlowRouter.group({
	prefix: '/consumer',
	name: 'consumer'
});
/************ Contractor routes ************/
var contractorRoutes = FlowRouter.group({
	prefix: '/contractor',
	name: 'contractor'
});
/************ Designer routes ************/
var designerRoutes = FlowRouter.group({
	prefix: '/designer',
	name: 'designer'
});
/************ Agent routes ************/
var agentRoutes = FlowRouter.group({
	prefix: '/agent',
	name: 'agent'
});
/************ Craftsman routes ************/
var craftsmanRoutes = FlowRouter.group({
	prefix: '/craftsman',
	name: 'craftsman'
});
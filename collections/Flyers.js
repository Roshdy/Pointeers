/*
1- Create an instance of Mongo.Collection
2- Declare authorization objects
3- Create Schema for the Collection
4- Attach Schema to Collection
5- Define public methods
 */

// 1- Create an instance of Mongo.Collection
Flyers = new Mongo.Collection('flyers');

// 2- Declare authorization objects
Flyers.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

// 3- Create Schema for the Collection
FlyerCover = new SimpleSchema({
	coverImage : {
		type: String,
		autoform: {
			type: 'hidden'
		}
	},
	timestamp:{
		type: Date,
		autoValue: function(){
			return new Date();
		},
		autoform: {
			type: 'hidden'
		}
	},
	aspectClass : {
		type: String,
		defaultValue: 'aspect-16-9',
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},
	brandName : {
		type: String,
		defaultValue: 'Brand',
		autoform: {
			type: 'hidden'
		}
	},
	brandLogo : {
		type: String,
		defaultValue: '/resources/Buildback.png',
		autoform: {
			type: 'hidden'
		}
	},
	hasRep : {
		type: Boolean,
		defaultValue: false,
		autoform: {
			type: 'hidden'
		}
	},
	repName : {
		type: String,
		defaultValue: 'Rep',
		autoform: {
			type: 'hidden'
		}
	},
	repLogo : {
		type: String,
		defaultValue: '/resources/Buildback.png',
		autoform: {
			type: 'hidden'
		}
	}
});

FlyerSlide = new SimpleSchema({
	type: {
		type: String,
		autoform: {
			type: 'hidden'
		}
	},
	contents: {
		type: String,
		autoform: {
			type: 'hidden'
		}
	}
});

FlyersSchema = new SimpleSchema({
	cover: {
		type: FlyerCover
	},
	title : {
		type: String,
		label: 'Title'
	},
	hasPrice : {
		type: Boolean,
		defaultValue: false
	},
	price : {
		type: String,
		label: 'Price',
		optional: true
	}/*,
	flyerSlide 		: {

	},
	respectsCount 	: {},
	reviewsCount 	: {},
	pointsCount 	: {}*/
});

// 4- Attach Schema to Collection


// 5- Define public methods
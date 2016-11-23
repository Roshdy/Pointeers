Template.FeedsWall.helpers({
	Flyers: function(){
		var flyerObjs = [];
		var flyerSlides = [];
		var flyerSlide = {};
		var flyerObj = {};
		var aspectClass = '';
		var hasRep = false;
		var now = new Date();
		var timestamp = now;

		for(var i = 0; i < 5; i++){
			timestamp.setDate(timestamp.getHours() + i);

			if(i % 2 == 0){
				aspectClass = 'aspect-16-9';
				hasRep = true;
			}
			else{
				aspectClass = 'aspect-4-3';
				hasRep = false;
			}

			for(var j = 0; j < 3; j++){
				flyerSlide = {
					type 		: 'blueprint',
					title 		: 'Blueprint-' + j,
					description : 'This is the blueprint'
				};
				flyerSlides.push(flyerSlide);

				// Reset variable to re-use
				flyerSlide = {};
			}

			flyerObj = {
				coverImage 		: '/resources/searoom.jpg',
				timestamp 		: timestamp.toUTCString().replace(/ GMT/, ''),
				aspectClass 	: aspectClass,
				isRep 			: hasRep,
				brandName 		: 'Pointeers',
				repName 		: 'Roshdy-' + i,
				title 			: 'Test Flyer-' + i,
				hasPrice 		: true,
				price 			: i + 1 * 49.99,
				loadFlyer 		: false,
				brandLogo 		: '/images/builder-logo.png',
				repLogo 		: '/images/builder-logo.png',
				flyerSlide 		: flyerSlides
			};
			flyerObjs.push(flyerObj);

			// Reset variable to re-use
			flyerObj = {};
			flyerCover = {};
		}
		return flyerObjs;
	}
});
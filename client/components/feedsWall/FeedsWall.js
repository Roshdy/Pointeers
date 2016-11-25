Template.FeedsWall.helpers({
	Flyers: function(){
		var flyerObjs = [];
		var flyerSlides = [];
		var flyerSlide = {};
		var flyerObj = {};
		var aspectClass = '';
		var hasRep = false;
		var rnd = 0;
		var now = new Date();
		var timestamp = now;
		var max = 18, min = 1;
		var randE, randP, randRs, randRv;
		var price = 0;
		var title = '';

		for(var i = 0; i < 15; i++){
			timestamp.setDate(timestamp.getHours() - i);
			rnd = ((Math.random() * (1E5 - 1) + 1) * 100) / 100;
			price = rnd.formatMoney(0, 'EGP');

			randE = parseInt(Math.random() * (max - min) + min);
			randRs = Math.random().toFixed(randE).replace(/^0[\.]/g, '');
			randRs = randRs.formatCount();

			randE = parseInt(Math.random() * (max - min) + min);
			randRv = Math.random().toFixed(randE).replace(/^0[\.]/g, '');
			randRv = randRv.formatCount();

			randE = parseInt(Math.random() * (max - min) + min);
			randP = Math.random().toFixed(randE).replace(/^0[\.]/g, '');
			randP = randP.formatCount();

			hasRep = Math.random() > 0.5;
			if(i == 0){
				aspectClass = 'aspect-16-9';
			}
			else{
				rnd = parseInt(Math.random() * 100);
				if(rnd < 25){
					aspectClass = 'aspect-16-9';
				}
				else if(rnd < 50){
					aspectClass = 'aspect-9-16';
				}
				else if(rnd < 75){
					aspectClass = 'aspect-1-1';
				}
				else{
					aspectClass = 'aspect-4-3';
				}
			}
			title = i + '- Flyer Title (Ratio: ' + aspectClass.replace('aspect-','').replace('-', ':') + ')';

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
				title 			: title,
				hasPrice 		: true,
				price 			: price,
				loadFlyer 		: false,
				brandLogo 		: '/images/builder-logo.png',
				repLogo 		: '/images/builder-logo.png',
				flyerSlide 		: flyerSlides,
				respectsCount 	: randRs,
				reviewsCount 	: randRv,
				pointsCount 	: randP
			};
			flyerObjs.push(flyerObj);

			// Reset variable to re-use
			flyerObj = {};
			flyerCover = {};
		}
		return flyerObjs;
	}
});
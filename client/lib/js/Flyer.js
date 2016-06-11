Template.Flyer.onRendered(function() {

    function setFlyerHeight(){
	var FlyerWidth = $('.Cover').outerWidth();
    var FlyerNewHeight = FlyerWidth * 1.785;
  $('.Cover').css('height', FlyerNewHeight);
  };
  setFlyerHeight();
  
  $(window).resize(function() {
  setFlyerHeight();
  });

//function setMargin() {
//   var TotalHeight = $(window).outerHeight() - $('#Header').outerHeight();
//   var FlyerHeight = $('.Cover').outerHeight();
//   var MarginTop = (TotalHeight - FlyerHeight)/2;  
//    $('.Cover').css('margin-top',MarginTop + "px");
//  };
//  
//    setMargin();
//  
//  $(window).resize(function() {
//    setMargin();
//  });
  

});








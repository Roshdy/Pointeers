Template.Flyer.onRendered(function() {

    function setFlyerHeight(){
	var FlyerWidth = $('#Flyer').outerWidth();
    var FlyerNewHeight = FlyerWidth * 1.785;
  $('#Flyer').css('height', FlyerNewHeight);
  };
  setFlyerHeight();
  
  $(window).resize(function() {
  setFlyerHeight();
  });

function setMargin() {
   var TotalHeight = $(window).outerHeight() - $('#Header').outerHeight();
   var FlyerHeight = $('#Flyer').outerHeight();
   var MarginTop = (TotalHeight - FlyerHeight)/2;  
    $('#Flyer').css('margin-top',MarginTop + "px");
  };
  
    setMargin();
  
  $(window).resize(function() {
    setMargin();
  });
  

});








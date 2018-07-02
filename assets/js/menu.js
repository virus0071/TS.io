(function($){
  $(document).ready(function(){
  
  $("#cssmenu").menumaker({
      title: "Menu",
      breakpoint: 768,
      format: "multitoggle"
  });
  
  $('#cssmenu').prepend("<div id='menu-indicator'></div>");
  
  var foundActive = false, activeElement, indicatorPosition, indicator = $('#cssmenu #menu-indicator'), defaultPosition;
  
  $("#cssmenu > ul > li").each(function() {
    if ($(this).hasClass('active')) {
      activeElement = $(this);
      foundActive = true;
    }
  });
  
  if (foundActive === false) {
    activeElement = $("#cssmenu > ul > li").first();
  }
  
  defaultPosition = indicatorPosition = activeElement.position().left + activeElement.width()/2 - 5;
  indicator.css("left", indicatorPosition);
  
  $("#cssmenu > ul > li").hover(function() {
    activeElement = $(this);
    indicatorPosition = activeElement.position().left + activeElement.width()/2 - 5;
    indicator.css("left", indicatorPosition);
  }, function() {
    indicator.css("left", defaultPosition);
  });
  
  });
  })(jQuery);
  

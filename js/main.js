$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 2000;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});

// $("#products-nav").click(function(){
//     $("#products-sub-menu").fadeToggle();
//     $("#sm-products-sub-menu").fadeToggle();
//     $("#sm-services-sub-menu").hide();
//     $("#news-media-sub-menu").hide();
//     $("#services-sub-menu").hide();
//   });
//   $("#news-media").click(function(){
//     $("#news-media-sub-menu").fadeToggle();
//     $("#sm-news-media-sub-menu").fadeToggle();
//     $("#sm-products-sub-menu").hide();
//     $("#sm-services-sub-menu").hide();
//     $("#products-sub-menu").hide();
//     $("#services-sub-menu").hide();
//   });
//   $("#services-nav").click(function(){
//     $("#services-sub-menu").fadeToggle();
//     $("#sm-services-sub-menu").fadeToggle();
//     $("#sm-products-sub-menu").hide();
//     $("#news-media-sub-menu").hide();
//     $("#products-sub-menu").hide();
//   });

$(document).ready(function(){
  // Show hide popover
  //Products Nav Tab
  $("#products-nav").click(function(){
      $(this).find("#products-sub-menu").fadeToggle();
      $(this).find("#sm-products-sub-menu").fadeToggle();
  });
  //Service Nav Tab
  $("#services-nav").click(function(){
    $(this).find("#services-sub-menu").fadeToggle();
    $(this).find("#sm-services-sub-menu").fadeToggle();
  });
  // News & Media Nav Tab 
  $("#news-media").click(function(){
    $(this).find("#news-media-sub-menu").fadeToggle();
    $(this).find("#sm-news-media-sub-menu").fadeToggle();
  });
});
//Products Nav Tab
$(document).on("click", function(event){
    var $trigger = $("#products-nav");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $("#products-sub-menu").slideUp("fast");
        $("#sm-products-sub-menu").slideUp("fast");
    }            
});
//Service Nav Tab
$(document).on("click", function(event){
  var $trigger = $("#services-nav");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $("#services-sub-menu").slideUp("fast");
      $("#sm-services-sub-menu").slideUp("fast");
  }            
});
//News & Media Nav Tab
$(document).on("click", function(event){
  var $trigger = $("#news-media");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $("#news-media-sub-menu").slideUp("fast");
      $("#sm-news-media-sub-menu").slideUp("fast");
  }            
});

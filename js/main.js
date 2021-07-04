$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 500;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});
$("#products-nav").click(function(){
    $("#products-sub-menu").fadeToggle();
    $("#sm-products-sub-menu").fadeToggle();
    $("#sm-services-sub-menu").hide();
    $("#news-media-sub-menu").hide();
    $("#services-sub-menu").hide();
  });
  $("#news-media").click(function(){
    $("#news-media-sub-menu").fadeToggle();
    $("#sm-news-media-sub-menu").fadeToggle();
    $("#sm-products-sub-menu").hide();
    $("#sm-services-sub-menu").hide();
    $("#products-sub-menu").hide();
    $("#services-sub-menu").hide();
  });
  $("#services-nav").click(function(){
    $("#services-sub-menu").fadeToggle();
    $("#sm-services-sub-menu").fadeToggle();
    $("#sm-products-sub-menu").hide();
    $("#news-media-sub-menu").hide();
    $("#products-sub-menu").hide();
  });

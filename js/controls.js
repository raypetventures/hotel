$(".nb-header-img-section img").attr("src", "img/logo-header.png");
$(".img").attr("alt", "Luxurious Hotel In Dubai");

$(".hotel-header-name-txt").html("MONTE' CARLO");
$(".hotel-header-slogan-txt").html("HOTEL & RESORT");

$(".active-link").css("color","orange");
$(".home-page").attr("href","index.html");
$(".room-page").attr("href","rooms.html");
$(".news-page").attr("href","blog.html");
$(".contact-page").attr("href","contact.html");
$(".about-page").attr("href","about.html");

// WARNING:  ROOM DETAILS
$(".nb-img-box .room-info-title").html("Room Features & Amenities");
$(".book-room-btn").html("Book Now");
$(".book-room-btn").attr("href","booking.html");

// WARNING: ROOM IMAGES
$("#superior-room img").attr("src","img/superior-1.JPG");
$("#deluxe-room img").attr("src","img/deluxe-1.JPG");
$("#executive-room img").attr("src","img/executive-1.JPG");

var menuStatus = 0;
$(".close-box").hide();
function showMenu(){
  if (menuStatus == 0) {
    menuStatus=1;
    $(".bg-menu-box").addClass("transform-menu");
    $(".close-box").show();
    $("body").css("background","black");
    $(".sm-menu-box").hide();
  } else {
    menuStatus=0;
    $(".bg-menu-box").removeClass("transform-menu");
    $(".close-box").hide();
    $("body").css("background","white");
    $(".sm-menu-box").show();
    $("body").css("background","white");
  }
}

// WARNING: IMAGE CONTROLLER ARROWS
var imageNumber = 1;
$("#superior-room .control-img-arrow").click(
  function(){
    imgSlideSuperior();
  }
);
function imgSlideSuperior(){
  if (imageNumber == 1) {
    imageNumber = 2;
    $("#superior-room img").attr("src","img/superior-2.JPG");
  }else if (imageNumber == 2) {
    imageNumber = 3;
    $("#superior-room img").attr("src","img/superior-3.JPG");
  }else if (imageNumber == 3) {
    imageNumber = 1;
    $("#superior-room img").attr("src","img/superior-1.JPG");
  }
}
function imgSlideDeluxe(){
  if (imageNumber == 1) {
    imageNumber = 2;
    $("#deluxe-room img").attr("src","img/deluxe-2.JPG");
  }else if (imageNumber == 2) {
    imageNumber = 3;
    $("#deluxe-room img").attr("src","img/deluxe-3.JPG");
  }else if (imageNumber == 3) {
    imageNumber = 1;
    $("#deluxe-room img").attr("src","img/deluxe-4.JPG");
  }
}
function imgSlideExecutive(){
  if (imageNumber == 1) {
    imageNumber = 2;
    $("#executive-room img").attr("src","img/executive-2.JPG");
  }else if (imageNumber == 2) {
    imageNumber = 3;
    $("#executive-room img").attr("src","img/executive-3.JPG");
  }else if (imageNumber == 3) {
    imageNumber = 1;
    $("#executive-room img").attr("src","img/executive-4.JPG");
  }
}


// WARNING: GET CURRENT DATE FUNCTION
$(".current-date").getDate();
function getDate(){
  var date =  new Date();
  var dd = date.getDate();
  var MM = date.getMonth();
  var yyyy = date.getFullYear();
  var currentDate= dd + " / "+ MM +" / "+ yyyy;
  return currentDate;
}

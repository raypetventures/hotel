$(".correct").hide();
var executive = 0;
var deluxe = 0;
var deluxeSuite = 0;
var executiveSuite = 0;
var presidentialSuite = 0;
var superior = 0;
var amount = 0;
var roomSelected= 0;

function executiveRoom(){
  $(".correct").hide();
  if(executive == 1){
    $("#executive-room .correct").slideUp();
    executive = 0;
    amount = 0;
    roomSelected=0;
  }else {
    $("#executive-room .correct").slideDown();
    executive = 1;
    amount = 400.00;
    roomSelected=3;
  }
}

function deluxeRoom(){
  $(".correct").hide();
  if(deluxe == 1){
    $("#deluxe-room .correct").slideUp();
    deluxe = 0;
    amount = 0;
    roomSelected=0;
  }else {
    $("#deluxe-room .correct").slideDown();
    deluxe = 1;
    amount = 290.00;
    roomSelected=2;
  }
}

function deluxeSuiteRoom(){
  $(".correct").hide();
  if(deluxe == 1){
    $("#deluxeSuite-room .correct").slideUp();
    deluxe = 0;
    amount = 0;
    roomSelected=0;
  }else {
    $("#deluxeSuite-room .correct").slideDown();
    deluxe = 1;
    amount = 350.00;
    roomSelected=4;
  }
}

function executiveSuiteRoom(){
  $(".correct").hide();
  if(executiveSuite == 1){
    $("#executiveSuite-room .correct").slideUp();
    executiveSuite = 0;
    amount = 0;
    roomSelected=0;
  }else {
    $("#executiveSuite-room .correct").slideDown();
    executiveSuite = 1;
    amount = 450.00;
    roomSelected=5;
  }
}

function presidentialSuiteRoom(){
  $(".correct").hide();
  if(presidentialSuite == 1){
    $("#presidentialSuite-room .correct").slideUp();
    presidentialSuite = 0;
    amount = 0;
    roomSelected=0;
  }else {
    $("#presidentialSuite-room .correct").slideDown();
    presidentialSuite = 1;
    amount = 550.00;
    roomSelected=6;
  }
}

function superiorRoom(){
  $(".correct").hide();
  if(superior == 1){
    $("#superior-room .correct").slideUp();
    superior = 0;
    amount = 0;
    roomSelected=0;
  }else {
    $("#superior-room .correct").slideDown();
    superior = 1;
    amount = 270.00;
    roomSelected=1;
  }
}

// Total Amout Checkout
document.getElementById("amount-txt").innerHTML = "$ " + amount + ".00";
$(".box").click(
  function(){
    document.getElementById("amount-txt").innerHTML = "$ " + amount + ".00";
  }
);

// WARNING: CHECK INPUTS AFTER CONFIRM BTN IS PRESSED

$(".fa-spinner").hide();
$(".submit-btn").hide();
function confirmInputs(){
  $(".confirm-btn i").show();
  setTimeout(
    function(){
      var numberOfAdults = $(".number_of_adults").val();
      var numberOfChildren = $(".number_of_children").val();
      var specialRequest= $(".special_request").val();
      var nameOfPerson= $("#name_of_person").val();
      var emailOfPerson= $("#email_of_person").val();
      var contactOfPerson= $("#contact_of_person").val();

      if (nameOfPerson == "" || emailOfPerson == "" || roomSelected == 0) {
        $(".confirm-btn i").hide();
        // WARNING: SCROLLS TO WHERE ERROR IS
        if (roomSelected == 0) {
          $("html, body").animate({scrollTop: $(".form-payment").offset().top},1000);
          $("#click-on-a-room").css("color","red");
          setTimeout(function(){$("#click-on-a-room").css("color","black");},4000);
        } else {
          $('html, body').animate({
              scrollTop: $("#personal-info-box").offset().top
          }, 1000);
        }

        $("#error-email").html("email is required to confirm and send receipt of payment");
        $("#error-name").html("Enter the name of the person you are booking for");
      }
      else {

        var numberOfADults= $(".number_of_adults").val();
        var numberOfChildren= $(".number_of_children").val();

        $("#how_many_adults_google").val(numberOfADults);
        $("#how_many_children_google").val(numberOfChildren);
        $("#amount_charged_google").val(amount);
        $(".confirm-btn i, .confirm-btn").hide();
        $(".submit-btn").show();
      }
    }, 4000
  );
  setTimeout(
    function(){
      $("#error-email").html("");
      $("#error-name").html("");
    }
    ,9000);
}
$("#error-name").html("");


// WARNING: DEVELOPER MODE
// WARNING: GET CURRENT DATE FUNCTION
$(".current-date").html(getDate());
function getDate(){
  var date =  new Date();
  var dd = date.getDate();
  var MM = date.getMonth();
  var yyyy = date.getFullYear();
  var currentDate= dd + "/"+ MM +"/"+ yyyy;
  return currentDate;
}

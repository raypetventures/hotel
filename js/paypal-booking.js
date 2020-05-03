$('form input').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

$(".booking-submit").hide();
function confirmInputs(){
  var customerName = $(".name-first").val();
  var customerLastName = $(".name-last").val();
  var customerEmail = $(".email").val();
  var customerNumber = $(".mobilenumber").val();

  if(customerName == "" || customerLastName == "" || customerEmail == "" || customerNumber == "")
  {
    $(".no-blank").html("Fields with * can't be left blank");
    setTimeout(
      function(){
        $(".no-blank").html("");
      }, 5000
    );
  }else {
    $(".confirmation-a i").show();
    setTimeout(
      function(){
        $(".confirmation-a i").hide();
        $(".confirmation-a").hide();
        $(".booking-submit").show();
      }, 6000
    );
  }
}

// business logic
function createUsersArray(numberForArray){
  var usersArray = [];
  for (var i = 1; i <= numberForArray; i++) {
   usersArray.push(i);
  }
   return usersArray
}

function beepBoopConverter(numberToConvert){
  var convertedNumber
  if((numberToConvert % 3) === 0 && numberToConvert != 0){
    convertedNumber = "I'm sorry, Dave. I'm afraid I can't do that."
  } else if((numberToConvert.toString()).includes("1")){
    convertedNumber = "Boop"
  } else if((numberToConvert.toString()).includes("0")){
    convertedNumber = "Beep"
  } else {
    convertedNumber = numberToConvert
  }
  console.log("The converted number is:" + convertedNumber);
}


// user logic
$(function() {
  $("#numberForm").submit(function(event){
    event.preventDefault();
    var userNumber = $("#numberInput").val();
    console.log("Users input is: " + userNumber);
    beepBoopConverter(userNumber);
  });


});

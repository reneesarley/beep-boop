// business logic
function createUsersArray(numberForArray){
  var usersArray = [];
  for (var i = 1; i <= numberForArray; i++) {
   usersArray.push(i);
  }
   beepBoopConverter(usersArray)
}

function beepBoopConverter(arrayToConvert){
  var convertedNumber
  // var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  for(var i = 0; i < arrayToConvert.length; i ++){
    if((arrayToConvert[i] % 3) === 0 && arrayToConvert[i] != 0){
      convertedNumber = "I'm sorry, Dave. I'm afraid I can't do that."
    } else if((arrayToConvert[i].toString()).includes("1")){
      convertedNumber = "Boop"
    } else if((arrayToConvert[i].toString()).includes("0")){
      convertedNumber = "Beep"
    } else {
      convertedNumber = arrayToConvert[i]
    }
    console.log(arrayToConvert[i] + "=" + convertedNumber);
  }
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

// business logic
function createUsersArray(numberForArray){
  var usersArray = [];
  for (var i = 1; i <= numberForArray; i++) {
   usersArray.push(i);
  }
   return usersArray
}

function beepBoopConverter(){
  var convertedNumber
  var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  for(var i = 0; i < testArray.length; i ++){
    if((testArray[i] % 3) === 0 && testArray[i] != 0){
      convertedNumber = "I'm sorry, Dave. I'm afraid I can't do that."
    } else if((testArray[i].toString()).includes("1")){
      convertedNumber = "Boop"
    } else if((testArray[i].toString()).includes("0")){
      convertedNumber = "Beep"
    } else {
      convertedNumber = testArray[i]
    }
    console.log(testArray[i] + "=" + convertedNumber);
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

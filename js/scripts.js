// user logic
$(function() {
  $("#numberForm").submit(function(event){
    event.preventDefault();
    var userInput = $("#numberInput").val();
    var userNumber = parseInt(userInput);
    console.log("Users input is: " + userNumber);
    createUsersArray(userNumber);
  });
});

function convertedMessage(updatedNumbers){
  $("#results").text(updatedNumbers);
}

// business logic
function createUsersArray(numberForArray){
  console.log("this is the number that hits createUsersArray" + numberForArray);
  var usersArray = [];
  for (var i = 1; i <= numberForArray; i++) {
   usersArray.push(i);
  }
  console.log("usersArray after for loop to create array: " + usersArray);
   beepBoopConverter(usersArray)
}

function beepBoopConverter(arrayToConvert){
  var convertedNumber
  var convertedArray = [];
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
    convertedArray.push(convertedNumber);
    console.log(arrayToConvert[i] + "=" + convertedNumber);
  }
  console.log("this is the converted array: " + convertedArray);
  convertedMessage("this is a test of the back end callin the front end");
}

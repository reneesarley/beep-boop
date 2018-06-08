// user logic
$(function() {
  $("#numberForm").submit(function(event){
    event.preventDefault();
    var userInput = $("#numberInput").val();
    var userNumber = parseInt(userInput);
    createUsersArray(userNumber);
  });
});

function convertedMessage(updatedNumbers){
  // $(".results").text(updatedNumbers);
  $(".results").removeClass("hidden");
  for(var i = 0; i < updatedNumbers.length; i++){
    if(updatedNumbers[i] === "Beep!"){
      $(".results ul").append("<li class='beep'>"+ updatedNumbers[i]+ "</li>");
    }else if(updatedNumbers[i] === "Boop!"){
      $(".results ul").append("<li class='boop'>"+ updatedNumbers[i]+ "</li>");
    } else if((updatedNumbers[i].toString()).includes("sorry")){
      $(".results ul").append("<li class='dave'>"+ updatedNumbers[i]+ "</li>");
    } else{
    $(".results ul").append("<li>"+ updatedNumbers[i]+ "</li>");
    }
  }
}

// business logic
function createUsersArray(numberForArray){
  var usersArray = [];
  for (var i = 0; i <= numberForArray; i++) {
   usersArray.push(i);
  }
   beepBoopConverter(usersArray)
}

function beepBoopConverter(arrayToConvert){
  var convertedNumber
  var convertedArray = [];
  for(var i = 0; i < arrayToConvert.length; i ++){
    if((arrayToConvert[i] % 3) === 0 && arrayToConvert[i] != 0){
      convertedNumber = "I'm sorry, Dave. I'm afraid I can't do that."
    } else if((arrayToConvert[i].toString()).includes("1")){
      convertedNumber = "Boop!"
    } else if((arrayToConvert[i].toString()).includes("0")){
      convertedNumber = "Beep!"
    } else {
      convertedNumber = arrayToConvert[i]
    }
    convertedArray.push(convertedNumber);
  }
  convertedMessage(convertedArray);
}

// user logic
$(function() {
  $("#numberForm").submit(function(event){
    event.preventDefault();
    var userInput
    var userName
    var userNumber
    $(".results ul").text("");
    userInput = $("#numberInput").val();
    userName = $("#usersName").val();
    userNumber = parseInt(userInput);
    if(userName === "dave" || userName === "Dave"){
      daveVHalOn();
    } else if(userInput === "" || userNumber < 0){
      alert("Please enter a positive number");
    } else if(userName === ""){
        userName = "Dave";
        createUsersArray(userNumber, userName);
    } else {
        createUsersArray(userNumber, userName);
    }
  });

  function daveVHalOn(){
    $("#halVDave").removeClass("hidden");
    $("#arrayForm").addClass("hidden");
    $("body").addClass("black");
    $("#results").addClass("hidden");
    $("#halVDave").fadeOut(4000);
    document.addEventListener("click", returnHome);
  }

  function returnHome(){
    $("#halVDave").addClass("hidden");
    document.getElementById("halVDave").removeAttribute("style");
    $("#arrayForm").removeClass("hidden");
    $("body").removeClass("black");
    document.getElementById("numberForm").reset();
    document.removeEventListener("click", returnHome);
  }

});

function convertedMessage(updatedNumbers){
  $(".results").removeClass("hidden");
  for(var i = 0; i < updatedNumbers.length; i++){
    if(updatedNumbers[i] === "Beep!"){
      $(".results ul").append("<li class='beep'>"+ updatedNumbers[i]+ "</li>");
    } else if(updatedNumbers[i] === "Boop!"){
      $(".results ul").append("<li class='boop'>"+ updatedNumbers[i]+ "</li>");
    } else if((updatedNumbers[i].toString()).includes("sorry")){
      $(".results ul").append("<li class='dave'>"+ updatedNumbers[i]+ "</li>");
    } else{
    $(".results ul").append("<li>"+ updatedNumbers[i]+ "</li>");
    }
  }
}

// business logic
function createUsersArray(numberForArray, name){
  var usersArray = [];
  var userName = name
  for (var i = 0; i <= numberForArray; i++) {
   usersArray.push(i);
  }
  beepBoopConverter(usersArray, userName)
}

function beepBoopConverter(arrayToConvert, name){
  var convertedNumber
  var convertedArray = [];
  for(var i = 0; i < arrayToConvert.length; i ++){
    if((arrayToConvert[i] % 3) === 0 && arrayToConvert[i] != 0){
      convertedNumber = "I'm sorry, " + name + " I'm afraid I can't do that."
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

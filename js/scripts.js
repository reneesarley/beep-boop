// business logic
function beepBoopConverter(numberToConvert){
  // convert number input to string to emulate user inputs
  var stringNumber = numberToConvert.toString()   // convert number input to string to emulate user inputs
  var convertedNumber

  if(stringNumber.includes("0")){
    convertedNumber = "Beep"
    return convertedNumber
  } else {
    return false
  }
}



// user logic

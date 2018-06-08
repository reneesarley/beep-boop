// business logic
function beepBoopConverter(numberToConvert){
  // convert number input to string to emulate user inputs
  var convertedNumber
  if(numberToConvert === 1){
    convertedNumber = "Boop"
    return convertedNumber
  } else if(numberToConvert === 0){
    convertedNumber = "Beep"
    return convertedNumber
  } else {
    return false
  }
}



// user logic

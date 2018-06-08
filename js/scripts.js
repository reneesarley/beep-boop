// business logic
function beepBoopConverter(numberToConvert){
  // convert number input to string to emulate user inputs
  var convertedNumber

  if((numberToConvert % 3) === 0 && numberToConvert != 0){
    convertedNumber = "I'm sorry, Dave. I'm afraid I can't do that."
    return convertedNumber
  } else if(numberToConvert === 1){
    convertedNumber = "Boop"
    return convertedNumber
  } else if(numberToConvert === 0){
    convertedNumber = "Beep"
    return convertedNumber
  } else if((numberToConvert.toString()).includes("1")){
    convertedNumber = "Boop"
    return convertedNumber
  } else if((numberToConvert.toString()).includes("0")){
    convertedNumber = "Beep"
    return convertedNumber
  } else {
    return numberToConvert
  }
}



// user logic

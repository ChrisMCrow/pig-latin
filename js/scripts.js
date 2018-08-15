//back-end
var letters = /[a-z]/
var vowels = ["a", "e", "i", "o", "u", "y"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w",  "x", "z"];

var translator = function(userInput) {
  if (consonants.includes(userInput[0])) {
    for (index = 0; index < userInput.length; index++); {
      var searchTerm = vowels[index];
      var indexOfFirst = userInput.indexOf(searchTerm);
    }
    if (indexOfFirst > 2) {
      var slicedInput = userInput.slice(indexOfFirst)
      return slicedInput + userInput[0,indexOfFirst] + "ay";
    } else {
      var slicedInput = userInput.slice(1);
      return slicedInput + userInput[0] + "ay";
    }
  } else if (userInput[0] === "y"){
    userInput = userInput.slice(1);
    return userInput + 'yay'
  } else if (vowels.includes(userInput[0])){
    return userInput + 'way';
  } else if (vowels.includes(userInput)){
    return userInput + 'way';
  } else {
    return userInput;
  }
}


//front-end
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var output = translator(userInput);
    $("#output").text(output)
  });
});

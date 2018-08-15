//back-end
var letters = /[a-z]/
var vowels = ["a", "e", "i", "o", "u", "y"];
var vowelRegex = /a|e|i|o|u|y/
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w",  "x", "z"];

var translator = function(initialInput) {
  var initialInputLC = initialInput.toLowerCase();
  var userInputArray = initialInputLC.split(" ");
  var pigLatinArray = userInputArray.map(function(userInput) {
    if (consonants.includes(userInput[0])) {
      var indexOfFirstV = userInput.search(vowelRegex);
      var indexOfFirstQ = userInput.search("q");
      if (indexOfFirstQ < indexOfFirstV && indexOfFirstQ > -1) {
        var qSlice = userInput.slice(indexOfFirstQ + 2);
        return qSlice + userInput.slice(0, indexOfFirstV + 1) + "ay";
      } else if (indexOfFirstV > 1) {
        var slicedInput = userInput.slice(indexOfFirstV)
        return slicedInput + userInput.slice(0, indexOfFirstV) + "ay";
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
  });
  return pigLatinArray.join(" ");
};

//front-end
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var initialInput = $("#userInput").val();
    var output = translator(initialInput);
    $("#output").text(output)
  });
});

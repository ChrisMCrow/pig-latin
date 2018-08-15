//back-end
// var vowels = ["a", "e", "i", "o", "u", "y"];
var vowels = /a|e|i|o|u|y/
var consonants = /[^aeiouy\d]/

var translator = function(initialInput) {
  var initialInputLC = initialInput.toLowerCase();
  var userInputArray = initialInputLC.split(" ");
  var pigLatinArray = userInputArray.map(function(userInput) {
    var indexOfFirstV = userInput.search(vowels);
    var indexOfFirstQ = userInput.search("q");
    var indexOfFirstC = userInput.search(consonants);
    if (indexOfFirstC === 0) {
      if (indexOfFirstQ < indexOfFirstV && indexOfFirstQ > -1) {
        var qSlice = userInput.slice(indexOfFirstQ + 2);
        return qSlice + userInput.slice(0, indexOfFirstV + 1) + "ay";
      } else {
        var slicedInput = userInput.slice(indexOfFirstV)
        return slicedInput + userInput.slice(0, indexOfFirstV) + "ay";
      }
    } else if (initialInputLC[0] === "y"){
      var slicedInput = userInput.slice(1)
      return slicedInput + "yay";
    } else if (indexOfFirstV === 0){
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

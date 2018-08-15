//back-end
var translator = function(userInput) {
    return false;
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

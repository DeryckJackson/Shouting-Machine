$(document).ready(function() {
  $("#formOne").submit(function(event){

    const input = $("input#userInput").val().toUpperCase();
    console.log("Input is: " + input);
    $("#output").text(input);

    event.preventDefault();
  });
});
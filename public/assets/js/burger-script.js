
$(function() {
  $("#submit-btn").on("click", function(event){
    event.preventDefault();
    // console.log($("#burger-name").val().trim());
    var newBurger = {
      name: $("#burger-name").val().trim()
    }
    console.log(newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        console.log("new burger added!")
        location.reload();
      });

      $("#burger-name").val(""); 
  });

});
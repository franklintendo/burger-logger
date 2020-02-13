
$(function() {

  let uneatenBurgers = $("#uneaten-burgers").html().trim();
  let eatenBurgers = $("#eaten-burgers").html().trim();
  // console.log(uneatenBurgers);
  if (!uneatenBurgers) {
    $("#uneaten-burgers").append("<h5 class='text-center we-want-meat'>We want meat!</h5>")
  } else if (uneatenBurgers && !eatenBurgers) {
    $("#eaten-burgers").append("<h5 class='text-center we-want-meat'>We want meat!</h5>")
  }

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
        location.reload();
      });

      $("#burger-name").val(""); 
  });

  $(".devour-btn").on("click", function(event){
    var id = $(this).data("id");
    // console.log(id);

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: {
        devour: true
      }
    }).then(function(){
      // console.log("Sent to backend");
      console.log("Devoured:  "+id);
      location.reload();
    });

    

  });
});
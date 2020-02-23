$(document).ready(function() {
    $(".clickable").click(function() {
      $(".design-showing").toggle();
      $(".design-hidden").toggle();
      $("#design").show();
    });
    $(".click").click(function() {
      $(".development-showing").toggle();
      $(".development-hidden").toggle();
      $("#development").show();
    });
    $(".clic").click(function() {
      $(".product-management-showing").toggle();
      $(".product-management-hidden").toggle();
      $("#product-management").show();
    });
  $(document).ready(function(){
    $("detailsform").submit(function(event){
      // event.preventDefault();
      var name = $("input#firstname").val();
      var email = $("input#email").val();
      var message = $("textarea#comment").val();
      if ($("input#firstname").val() && $("input#email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
    });
  });
  
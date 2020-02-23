$(document).ready(function(){
    $("#designimage").click(function(){
      $("#designimage").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#img-development").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $("#img-design").click(function(){
      $("#img-design").slideDown('1500').hide('1000');
      $("#design").show('1500');
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
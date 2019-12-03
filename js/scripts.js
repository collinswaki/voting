$(document).ready(function(){
  $("form#voter-info-form").submit(function(event){
    $('#voting-age').hide();
    $('#minors').hide();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {
      if (age > 18) {
        $('#voting-age').show();
      } else if (age === 18){
        alert("Welcome!");
        $('#voting-age').show();
      } else {
        alert("Oops! Looks like you are too young, baby!");
        $('#minors').show();
      }
    } else {
      alert('Please enter your age');
    }

    event.preventDefault();
  });
});

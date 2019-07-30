var submit = $('.submit');

submit.on("click", enter);

function enter(){
  var names = $('.org').val();
  var org1 = $('.org1').val();
  var org2 = $('.org2').val();
  var org3 = $('.org3').val();
  var don1 = $('.don1').val();
  var don2 = $('.don2').val();
  var don3 = $('.don3').val();
  var answer = $('.answer');
  if (names.length == 0) {
    return false;
    answer.text("Something is missing. Please go back and fill it again.");
  } else {
    return true;
    answer.text("Thank you! We will contact you soon.");
  }
}

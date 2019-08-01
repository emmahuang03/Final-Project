var submit = $('.submit');

submit.on("click", enter);

function enter(){
  var names = $('.names').val();
  var org1 = $('.org1').val();
  var org2 = $('.org2').val();
  var org3 = $('.org3').val();
  var don1 = $('.don1').val();
  var don2 = $('.don2').val();
  var don3 = $('.don3').val();
  var answer = $('.answer');
  var body = $('body');
  var all = $('.all');

  if(names.length == 0) {
    answer.text("Something is missing. Please go back and fill it again.");
  } else if ($('.org1').prop("checked") == false && $('.org2').prop("checked") == false && $('.org3').prop("checked") == false) {
    answer.text("Something is missing. Please go back and fill it again.");
  } else if ($('.don1').prop("checked") == false && $('.don2').prop("checked") == false && $('.don3').prop("checked") == false){
    answer.text("Something is missing. Please go back and fill it again.");
  } else {
    all.text("Thank you! We will contact you soon.");
  }
}

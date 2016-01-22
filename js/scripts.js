// Business Logic
var countUp5 = function(countTo, countUp) {
  var newArray = [];

  for (var i = 0; i <= countTo; i+= countUp) {
    newArray.push(i);
    console.log(newArray);
  }
  return newArray;
};


// Interface Logic
$(document).ready(function() {
  $("form#count").submit(function(event) {
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    var finalresult = countUp5(countTo, countBy);

    $("#result").text(finalresult);
    event.preventDefault();
  });

});

//receive form input

var Whatever = require('./../js/doctor.js').calculatorModule;
var apiKey = require('./../.env').apiKey;

// $(document).ready(function() {
//   var simpleCalculator = new Whatever("a string");
//   var output = simpleCalculator.pingPong(1000);
// });

// $(document).ready(function() {
//   $('.doctor-form').submit(function(event) {
//     event.preventDefault();
//     var goal = $('#goal').val();
//     var output = doctorLookup(goal);
//     output.forEach(function(element) {
//       $('#results').append("<li>" + element + "</li>");
//       });
//     });
//   });

$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
     var goal = $('#goal').val();
    $('#results').text("The medical issue you've specified is " + goal + ". Here are a list of doctors near you who can treat this medical issue:");
  });
});

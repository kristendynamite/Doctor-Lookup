var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

// $(document).ready(function() {
//   var simpleCalculator = new Whatever("a string");
//   var output = simpleCalculator.pingPong(1000);
// });


$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  //receive form input
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
     var goal = $('#goal').val();
     var output = Doctor(goal);
     currentDoctorObject.getDoctors(goal);
    $('#results').text("The medical issue you've specified is " + goal + ". Here are a list of doctors near you who can treat this medical issue:");
    $('#results').append("<li>" + output + "</li>")
    // exports.getDoctors = function(medicalIssue) {

      // };
    // output.forEach(function(element) {
    //   $('#results').append("<li>" + element + "</li>");
    // });

  });
});

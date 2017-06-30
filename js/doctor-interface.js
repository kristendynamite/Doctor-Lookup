var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

// var doctorList = new Doctor("brian");
// doctorList.name = brian

$(document).ready(function() {
  var doctorList = new Doctor();
  //receive form input
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
     var goal = $('#goal').val();
     $('#goal').val("");
     doctorList.lastName(goal);
     $('#results').text("The medical issue you've specified is " + goal + ". Here is a list of doctors near you:");
     var output = lastName(goal);
     output.forEach (function(element) {
    $('#results').append("<li>" + "Dr. " + element + "</li>");
     });
    // exports.getDoctors = function(medicalIssue) {

      // };


  });
});

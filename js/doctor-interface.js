var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;
var doctorList = new Doctor();
// var doctorList = new Doctor("brian");
// doctorList.name = brian

$(document).ready(function() {
  //receive form input
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
     var goal = $('#goal').val();
     $('#goal').val("");
     doctorList.lastName(goal);
     $('#results').text("The medical issue you've specified is " + goal + ". Here is a list of doctors near you:");
     var output = Doctor(goal);
     output.forEach (function(element) {
       $('#results').append("<li>" + element + "</li>");
     });
    // exports.getDoctors = function(medicalIssue) {

      // };


  });
});

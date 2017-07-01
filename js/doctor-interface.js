var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

function displayDoctors(output){
  output.forEach (function(element) {
    $('#results').append("<li>" + "Dr. " + element + "</li>");
  });
}

$(document).ready(function() {
  var doctorList = new Doctor();
  //receive form input
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
     var goal = $('#goal').val();
     $('#goal').val("");
     doctorList.lastName(goal, displayDoctors);
     $('#results').text("The medical issue you've specified is " + goal + ". Here is a list of doctors in Portland, OR:");


    // exports.getDoctors = function(medicalIssue) {

      // };


  });
});

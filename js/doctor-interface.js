//receive form input

var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

// $(document).ready(function() {
//   var simpleCalculator = new Whatever("a string");
//   var output = simpleCalculator.pingPong(1000);
// });


$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  currentDoctorObject.getDoctors();
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
     var goal = $('#goal').val();
    $('#results').text("The medical issue you've specified is " + goal + ". Here are a list of doctors near you who can treat this medical issue:");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ goal + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
  });
});

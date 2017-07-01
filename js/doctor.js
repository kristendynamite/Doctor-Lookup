var apiKey = require('./../.env').apiKey;

//make an API request and display results
Doctor = function(){
};

Doctor.prototype.lastName = function(goal, displayDoctors) {
  var output = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ goal+'&location=or-portland&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      for (var i = 0; i < result.data.length; i++) {
        output.push(result.data[i].profile.last_name);
      }
      displayDoctors(output);
    }).fail(function(error){
      console.log("fail");
  });
};
exports.doctorModule = Doctor;
// exports.getDoctors = function(medicalIssue)

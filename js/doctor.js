var apiKey = require('./../.env').apiKey;

//make an API request and display results
Doctor = function(){
};

Doctor.prototype.lastName = function(goal) {
  var output = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ goal+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      for (var i = 0; i <=20; i++) {
        output.push(result.data[i].profile.last_name);
        console.log(output);
        return output;
      }
    }).fail(function(error){
      console.log("fail");
  });
};
exports.doctorModule = Doctor;
// exports.getDoctors = function(medicalIssue)

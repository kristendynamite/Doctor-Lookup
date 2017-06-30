var apiKey = require('./../.env').apiKey;

//make an API request and display results
// constructor

function Doctor(name) {
  this.name = name;
}

Doctor.prototype.getDoctors = function(goal) {
  var output = [];
  // method code
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ goal+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      var output = result.data[0].profile.bio;
      console.log(output);
    })
   .fail(function(error){
      console.log("fail");
    });
    return output;
  };

exports.doctorModule = Doctor;

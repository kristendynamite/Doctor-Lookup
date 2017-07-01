(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey= "4b300b4c2928f63c87bac4805fff8a93";

},{}],2:[function(require,module,exports){
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
        console.log(result);
        console.log(output);
      }
      displayDoctors(output);
    }).fail(function(error){
      console.log("fail");
  });
};
exports.doctorModule = Doctor;
// exports.getDoctors = function(medicalIssue)

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/doctor.js":2}]},{},[3]);

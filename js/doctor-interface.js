//receive form input

var Whatever = require('./../js/doctor.js').calculatorModule;

$(document).ready(function() {
  var simpleCalculator = new Whatever("a string");
  var output = simpleCalculator.pingPong(1000);
});

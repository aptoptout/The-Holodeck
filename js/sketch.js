// Linking Experiments — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// February 2017

// This file links all the different 'sketches' (Exp1.js etc.) to load multiple in the same or different DIVs.
// Wait for the page to load first
window.onload = function() {
  var _element = document.getElementById("c1");
  var elementWidth = _element.offsetWidth;
  var elementHeight = _element.offsetHeight;

  //Get a reference to the link on the page
  var e1 = document.getElementById("exp1");
  var e2 = document.getElementById("exp2");

  //Set code to run when the link is clicked
  // by assigning a function to "onclick"
  function showThisExperiment(_elem) {
    if(_elem == exp1) {
      var experiment_1 = new p5(exp1, 'c1');
    } else if(_elem == exp2) {
      var experiment_2 = new p5(exp2, 'c1');
    }
    
    return false;
  }
}
// Linking Experiments — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// February 2017

// This file links all the different 'sketches' (Exp1.js etc.) to load multiple in the same or different DIVs.
// Wait for the page to load first
var _element = document.getElementById("c1");
var elementWidth = _element.offsetWidth;
var elementHeight = _element.offsetHeight;

var experiments = new Array(2);
experiments[0] = new p5(exp1, 'c1');
experiments[1] = new p5(exp2, 'c1');

function showThisExperiment(event) {
    var _click = event.target.id;
    console.log(event.target, _click);

    switch(_click) {
        case 'exp1':
            experiments[0];
            break;
        case 'exp2':
            experiments[1];
            break;
        default:
            return false;
    }
}

var parent = document.getElementById('expIndex');
parent.addEventListener('click', showThisExperiment);

// if(_Exp1 == true) {
//   experiment_1 = new p5(exp1, 'c1');
// } else if(_Exp2 == true) {
//   experiment_2 = new p5(exp2, 'c1');
// }
// Linking Experiments — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// February 2017

// This file links all the different 'sketches' (Exp1.js etc.) 
// to load multiple in the same or different DIVs.
//

var _element = document.getElementById("c1");
var elementWidth = _element.offsetWidth;
var elementHeight = _element.offsetHeight;

var showThis = new p5(exp1, 'c1');

function removeActiveClass(n){
  if(n.classList.contains("activeEl")){
    n.classList.remove("activeEl");
  } else {
    return;
  }
}

function getChildren(n, skipMe){
  var r = [];
  for ( ; n; n = n.nextSibling ) 
     if ( n.nodeType == 1 && n != skipMe)
        removeActiveClass(n)
        r.push( n );
  return r;
};

function getSiblings(n) {
  return getChildren(n.parentNode.firstChild, n);
}

function getDescription(_sketch) {
  var idTag = document.getElementById("idTag");
  var name = document.getElementById("name");
  var description = document.getElementById("description");
  var repository = document.getElementById("repository");

  switch(_sketch) {
        case 'exp1':
            idTag.innerHTML = exp1.specs["id"];
            name.innerHTML = exp1.specs.name;
            description.innerHTML = exp1.specs.description;
            repository.innerHTML = exp1.specs.repository.representation;
            repository.setAttribute("href", exp1.specs.repository.link);
            break;
        default:
            return false;
    }
}

function showThisExperiment(event) {
    var _click = event.target.id;
    event.target.classList.toggle("activeEl");

    getSiblings(event.target);

    if(document.getElementById("defaultCanvas0")) {
      var element = document.getElementById("defaultCanvas0");
      element.outerHTML = "";
      delete element;
    }

    switch(_click) {
        case 'exp1':
            getDescription(_click);
            showThis = new p5(exp1, 'c1');
            break;
        case 'exp2':
            showThis = new p5(exp2, 'c1');
            break;
        case 'exp3':
            showThis = new p5(exp3, 'c1');
            break;
        default:
            return false;
    }
}

var parent = document.getElementById('expIndex');
parent.addEventListener('click', showThisExperiment);


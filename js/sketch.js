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

var idTag = document.getElementById("idTag");
var nameTag = document.getElementById("name");
var libraryTag = document.getElementById("library");
var description = document.getElementById("description");
var repository = document.getElementById("repository");

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

function getDescription() {
  var currentlyActive = document.getElementsByClassName("activeEl")[0].id;
  
  // console.log(currentlyActive);
  switch(currentlyActive) {
        case 'exp1':
            idTag.innerHTML = exp1_Specs.id;
            nameTag.innerHTML = exp1_Specs.name;
            libraryTag.innerHTML = exp1_Specs.library.representation;
            libraryTag.setAttribute("href", exp1_Specs.library.link);
            description.innerHTML = exp1_Specs.description;
            repository.innerHTML = exp1_Specs.repository.representation;
            repository.setAttribute("href", exp1_Specs.repository.link);
            break;
        case 'exp2':
            idTag.innerHTML = exp2_Specs.id;
            nameTag.innerHTML = exp2_Specs.name;
            libraryTag.innerHTML = exp2_Specs.library.representation;
            libraryTag.setAttribute("href", exp2_Specs.library.link);
            description.innerHTML = exp2_Specs.description;
            repository.innerHTML = exp2_Specs.repository.representation;
            repository.setAttribute("href", exp2_Specs.repository.link);
            break;
        case 'exp3':
            idTag.innerHTML = exp3_Specs.id;
            nameTag.innerHTML = exp3_Specs.name;
            libraryTag.innerHTML = exp3_Specs.library.representation;
            libraryTag.setAttribute("href", exp3_Specs.library.link);
            description.innerHTML = exp3_Specs.description;
            repository.innerHTML = exp3_Specs.repository.representation;
            repository.setAttribute("href", exp3_Specs.repository.link);
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
            getDescription();
            showThis = new p5(exp1, 'c1');
            break;
        case 'exp2':
            getDescription();
            showThis = new p5(exp2, 'c1');
            break;
        case 'exp3':
            getDescription();
            exp3("c1");
            break;
        default:
            return false;
    }
}

getDescription();

var parent = document.getElementById('expIndex');
parent.addEventListener('click', showThisExperiment);


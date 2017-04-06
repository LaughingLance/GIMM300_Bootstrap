 //easter egg: email me how comments are different in javascript 
//than in html.  What are they like in CSS?


var maxZ = 1000;  				 // Global var: initial z-index of shape that gets clicked
var maxElements = 150; 			 // Global var: maximum number of elements
var minElements = 30;			 // Global var: minimum number of elements
var maxElementHeight = 50;		 // Global var: maximum height value of an element
var minElementHeight = 17;		 // Global var: minimum height value of an element
var maxElementWidth = 50;		 // Global var: maximum width value of an element
var minElementWidth = 17;		 // Global var: minimum width value of an element
var maxXPosition = 635;			 // Global var: maximum X position
var maxYPosition = 235;			 // Global var: maximum Y position

// This function gets called once when the page loads as it implies
// here we will do our button initializiation and add all our initial
// elements
// Buttons: Add Square, Add Circle, Change the Element Colors, Clear Some Circles, and Clear Some Squares
window.onload = function() {
  var addS = document.getElementById("addS");
  addS.onclick = addSquare;
  var addC = document.getElementById("addC");
  addC.onclick = addCircle;
  var colors = document.getElementById("colors");
  colors.onclick = changeColors;
  var clearC = document.getElementById("clearC");
  clearC.onclick = clearCircle;
  var clearS = document.getElementById("clearS");
  clearS.onclick = clearSquare;
  
  // create several randomly positioned squares
  
  /*easter egg: Tell me which number determines the range and 
  which determines the minimum value (the floor) and why*/
  
  // minElements / minElementWidth / minElementHeight are the minimum values (the floor) this is the case because
  // this number is added after the random number is created.
  // maxElements / maxElementWidth / maxELementHeight is the range as it is the number being multiplied by the random number.
  
  var elementsCount = parseInt(Math.random() * maxElements) + minElements;
  for (var i = 0; i < elementsCount; i++) {
  	   var randomWidth = parseInt(Math.random() * maxElementWidth) + minElementWidth;
  	   var randomHeight = parseInt(Math.random() * maxElementHeight) + minElementHeight;
    addElems(randomWidth, randomHeight);
  }
};

// Creates and adds a new square div to the page.
function addElems(randomWidth, randomHeight) {
  var square = document.createElement("div");
  square.className = "square";
  // targeting CSS defined properties position is a string so needs to be in the format of 123px
  square.style.left = parseInt(Math.random() * maxXPosition) + "px";
  square.style.top = parseInt(Math.random() * maxYPosition) + "px";
  square.style.backgroundColor = getRandomColor();
  square.style.width = randomWidth;
  square.style.height = randomHeight;
  square.onclick = elementClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(square);

  var circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = parseInt(Math.random() * maxXPosition) + "px";
  circle.style.top = parseInt(Math.random() * maxYPosition) + "px";
  circle.style.backgroundColor = getRandomColor();
  circle.style.width = randomWidth;
  circle.style.height = randomHeight;
  circle.onclick = elementClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(circle);
}

// Gives a new randomly chosen color to every element on the page.
function changeColors() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

// Creates and adds a new square div to the page.
function addSquare() {
  var square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * maxXPosition) + "px";
  square.style.top = parseInt(Math.random() * maxYPosition) + "px";
  square.style.backgroundColor = getRandomColor();
  var randomWidth = parseInt(Math.random() * maxElementWidth) + minElementWidth;
  var randomHeight = parseInt(Math.random() * maxElementHeight) + minElementHeight;
  square.style.width = randomWidth;
  square.style.height = randomHeight;
  square.onclick = elementClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(square);
}

// Creates and adds a new circle div to the page.
function addCircle() {
  var circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = parseInt(Math.random() * maxXPosition) + "px";
  circle.style.top = parseInt(Math.random() * maxYPosition) + "px";
  circle.style.backgroundColor = getRandomColor();
  var randomWidth = parseInt(Math.random() * maxElementWidth) + minElementWidth;
  var randomHeight = parseInt(Math.random() * maxElementHeight) + minElementHeight;
  circle.style.width = randomWidth;
  circle.style.height = randomHeight;
  circle.onclick = elementClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(circle);
  
}

// Removes circles from the element area
 function clearCircle() {
	var elementArea = document.getElementById("elementarea");
	var elements = elementArea.getElementsByClassName("circle");
	
	for (var i = 0; i < elements.length; i++) {
		elementArea.removeChild(elements[i]);
	}
 }
 
 // Removes squares from the element area
 function clearSquare() {
	var elementArea = document.getElementById("elementarea");
	var elements = elementArea.getElementsByClassName("square");
	
	for (var i = 0; i < elements.length; i++) {
		elementArea.removeChild(elements[i]);
	}
 }

// Generates and returns a random blue / green color string such as "#008a7c".
function getRandomColor() {
  var letters = "0123456789abcdef";
  var result = "#00"; 						// sets the result to some form of blue / green by forcing the start of the result to be #00
  for (var i = 0; i < 4; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));
  }
  return result;
}

// Called when a square is clicked; moves it to the top or removes it.
function elementClick() {
  var oldZ = parseInt(this.style.zIndex);
  if (oldZ == maxZ) {
    this.parentNode.removeChild(this);      // if element is on top; remove it
  } else {
    maxZ++;
    this.style.zIndex = maxZ;				// if element is not on top; move it to the top.
  }

}

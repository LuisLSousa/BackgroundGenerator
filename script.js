var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton");

function changeBackgroundColor(){
	// to make it from left to right, add "to right," before the first color

body.style.background =
"linear-gradient("
+ color1.value
+ ","
+ color2.value
+ ")";

css.textContent = body.style.background + ";";
}

function randomColor(){
	var result = '#'; // first character of the hex color
	var hexValues = '0123456789abcdef';
	var numValues = hexValues.length;
	var hexLength = 6
	for (var i = 0; i < hexLength; i++){
		result+=hexValues.charAt(Math.floor(Math.random() * numValues));
	}
	return result;
}

function generateRandom(){
	color1.value = randomColor();
	color2.value = randomColor();
	changeBackgroundColor()
}

color1.addEventListener("input", changeBackgroundColor)

color2.addEventListener("input", changeBackgroundColor)

button.addEventListener("click", generateRandom)

changeBackgroundColor() // show initial color

// scripts.js

var a = prompt('Podaj bok a');
var	h = prompt('Podaj wysokość h');
	
function getTriangleArea(a, h) {
	if (a =< 0) {
		alert("Nieprawidłowe dane");
	}
	if (h =< 0) {
		alert("Nieprawidłowe dane");
	}

	return a * h / 2;
}

console.log(getTriangleArea(10, 6));




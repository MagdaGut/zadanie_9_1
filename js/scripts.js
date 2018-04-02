// scripts.js

var a = prompt('Podaj bok a');
var	h = prompt('Podaj wysokość h');
	
function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		alert("Nieprawidłowe dane");
	}

	return a * h / 2;
}

console.log(getTriangleArea(a, h));
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(13, 6);
var triangle3Area = getTriangleArea(34, 18);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
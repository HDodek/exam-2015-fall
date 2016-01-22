'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'

function Circle(radius) {
	this.radius = radius;

	this.getCircumference = function(radius) {
		var circum = (this.radius * 2) * Math.PI;
		return circum;
	}

	this.getArea = function(radius) {
		var r = (this.radius * this.radius) * Math.PI;
		return r;
	}

	this.toString = function() {
		this.radius = radius;
		var stats = radius.toString();
		return stats;
	}
}

var littleCircle = new Circle(4);
console.log(littleCircle.getCircumference());
console.log(littleCircle.getArea())
console.log(littleCircle.toString())










'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price 
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];


function CarStore(array) {
	this.array = array;

	this.getSumPrice = function(array) {
		var sum = 0;
		for (var i = 0; i < cars.length; i++) {
			sum += cars[i].price;
		}
		return sum;
	}

	this.getOldestCarType = function(array) {
		var oldest = cars[0];
		for (var i = 1; i < cars.length; i++) {
			if (cars[i].year< oldest.year) {
				oldest = cars[i];
			}
		}
		return oldest.type;
	}

	
	
	
}	



var carStore = new CarStore(cars);

//carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000 
console.log(carStore.getOldestCarType()); // 'Trabant'
//carStore.deleteCarByType('Ferrari');
//console.log(carStore.getSumPrice()); // 82000 


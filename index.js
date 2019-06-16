// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
	 let array = [];
	 array.push(drivers[0]);
	 array.push(drivers[1]);
	 return array;
	 }

const returnLastTwoDrivers = function (drivers) {
	let lastTwo = [];
	lastTwo.push(drivers[drivers.length - 2])
	lastTwo.push(drivers[drivers.length - 1])
	return lastTwo;

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (num) { 
	return function(fare) {
		return num * fare;
	};
};

const fareDoubler = function (fare){
	return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare) {
	return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers (arrayOfDrivers, func) {
	return func(arrayOfDrivers);

}
// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

// function returnFirstTwoDrivers(drivers) {
//   return drivers.slice(0, 2)
// }
const returnLastTwoDrivers = drivers => drivers.slice(-2);
// function returnLastTwoDrivers(drivers) {
//   return drivers.slice(-2)
// }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplier => value => multiplier * value

// const createFareMultiplier = function (multiplier) {
//   return function (value) {
//     return multiplier * value
//   }
// } 

// const fareDoubler = function (value) {
//   return value * 2
// }

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function (arrayOfDrivers, func) {
//   return func(arrayOfDrivers);
// }

const selectDifferentDrivers = (drivers, func) => func(drivers);
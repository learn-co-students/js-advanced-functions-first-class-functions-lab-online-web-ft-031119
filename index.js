function returnFirstTwoDrivers(drivers){
  return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
  return drivers.slice(-2,drivers.length)
}
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(multiplier){
  return function(value){ return multiplier * value}
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fun){
  return fun(arrayOfDrivers)
}

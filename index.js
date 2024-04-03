// Code your solution here
// create a function findMatching that takes an array of drivers names and a string as arguments
// this function returns the matching list of drivers 
// the function should be case insensitive
function findMatching(drivers, sameName) {
    return drivers.filter((driverElement) => driverElement.toLowerCase().includes(sameName.toLowerCase()))

}
// create a function fuzzyMatching that takes an array of drivers and a string as arguments for qeuring the array
// this will returns all drivers whose names begin with the provided letter 
function fuzzyMatch(drivers, letterMatch) {
    return drivers.filter((driverElement) => driverElement.toLowerCase().startsWith(letterMatch.toLowerCase()));

}
// create a function matchName that takes an array of driver objects and a string as an argument 
// each driver object has two properties 'names' and 'hometown'
// the function should return each element whose name property matches the provided string argument
function matchName(drivers, nameMatch) {
    return drivers.filter((driverElement) => driverElement.name.includes(nameMatch));
}
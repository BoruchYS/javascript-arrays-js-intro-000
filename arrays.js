var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
        return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray (array, element){
  var array = array;
  array.unshift(element);
  return array
}
function addElementToEndOfArray (array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray (array, element){
  var array = array;
  array.push(element);
  return array
}
function accessElementInArray(array, index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  var array = array;
  array.shift()
  return array
}
function removeElementFromBeginningOfArray (array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  var array=array;
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, newElement){
    myArray.unshift(newElement)
    return myArray
}
function destructivelyAddElementToBeginningOfArray (myArray, newElement){
  return [newElement, ...myArray]
}
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, newElement){
        return [newElement, ...myArray]
}
function destructivelyAddElementToBeginningOfArray (myArray, newElement){
  return myArray.unshift(newElement)
}

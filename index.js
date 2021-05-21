// Add your functions here
function map(sourceArr, callback) {
    let arr = [];
    for (let i = 0; i < sourceArr.length; i++) {
        arr.push(callback(sourceArr[i]));
    }
    return arr;
}

function reduce(sourceArr, callback, startingPoint = 0) {
  let returnValue = (!!startingPoint) ? startingPoint : sourceArr[0]
  let i = (!!startingPoint) ? 0 : 1
  for (; i < sourceArr.length; i++) {
    returnValue = callback(sourceArr[i], returnValue)
  }
  return returnValue
} 

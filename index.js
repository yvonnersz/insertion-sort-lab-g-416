// array = [2, 3, 4, 5, 6, 7]

function findMinAndRemove(array){
  let lowestNumberArray = [];
  lowestNumberArray.push(Math.min(...array));
  return lowestNumberArray
}

function insertionSort(array){
  if (array.length > 1) {
      let lowestInteger = Math.min(...array); // 1
      let index = array.findIndex(lowestInteger); // [3]
      let newArray = array.slice(0, index) + array.slice(index + 1, array.length)
      findMinAndRemove(newArray)
  }
}

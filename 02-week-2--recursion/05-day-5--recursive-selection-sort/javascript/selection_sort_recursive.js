function selectionSortRecursive(arr) {
  // type your code here
  // recursion should end when all elements of the array are removed 
  if (arr.length === 0) return []
  // find minimum element in the array, using spread operator to access the elements as objects
  let min = Math.min(...arr)
  // find the index of this minimum element
  let index = arr.indexOf(min)
  // remove the minimum element from the array
  arr.splice(index, 1)
  // define the new array to be the result of this function
  let newArray = selectionSortRecursive(arr)
  // add the minimum element to the new array
  // using unshift because recursion will completes last calls first, then work its way to the first calls
  // push gives the new array in decreasing order
  newArray.unshift(min)
  // we want the new array returned with all elements sorted 
  return newArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 3, 8, 8]");
  console.log("=>", selectionSortRecursive([8, 2, 8, -10, 0, 3]));
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

// return the sorted array when arr[i] <= arr[i + 1] for the entire array
// compare two numbers and splice the array based on which number is greater 
// let removed
// arr[0] <= arr[1] ? arr : removed = arr.splice(0, 1)
// arr.splice(1, 0, removed[0])

// instead of the above, which is more non-recursive, 
// can use Math.min to find the minimum value in the array
// add minimum values to a new array and return the new array
function recursiveSearch(arr, target) {
  // type your code here
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === target) {
  //     return true
  //   }
  //   return recursiveSearch(arr, target)
  // }
  // the above did not work because every time the function calls itself,
  // the index starts again from 0 resulting in stack overflow.
  if (arr[0] === target) return true
  else if (arr.length === 0) return false
  else return recursiveSearch(arr.slice(1), target)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch(["banana", "apple", "orange", "peach"], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch(["banana", "apple", "orange", "peach"], "orange"));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

// element of array must equal target
// use the index of the element to check if the value equals the target
// add 1 to the index 
// call the function again with the increased index 
// set the condition to call the function only while the return is false, or until the return is true

// the above did not work because the index will not be remembered after each recursion 
// taking a slice of the array works because it inputs a different array each time, 
// with a different value as the first element.
// this does a similar thing to using the index, but instead of the index changing,
// the array itself changes.
function rotateArray(arr, k) {
  // type your code here
  if (k === 0 || arr.length === 0) return arr
  const lastElement = arr.pop()
  // console.log(lastElement)
  arr.unshift(lastElement)
  // console.log(arr)
  return rotateArray(arr, k - 1)
  // return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: [10, 3, 'banana', 'x', 33, 5]");
  console.log("=>", rotateArray([5, 10, 3, 'banana', 'x', 33], 5));

  console.log("");

  console.log("Expecting: ['x', 33, 5, 10, 3, 'banana']");
  console.log("=>", rotateArray([5, 10, 3, 'banana', 'x', 33], 8));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", rotateArray([], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution

// take the last element, remove it then add it to the beginning of the array
// do this k times 
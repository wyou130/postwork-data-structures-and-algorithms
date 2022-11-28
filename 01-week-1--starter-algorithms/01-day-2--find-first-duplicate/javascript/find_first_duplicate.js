function findFirstDuplicate(arr) {
  // type your code here
  // initialize new array with first element of arr
  let newArray = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    // return the element if the new array already contains the element
    if (newArray.includes(arr[i])) {
      return arr[i]
    }
    // otherwise push the element into the new array
    newArray.push(arr[i])
  }
  // once we have iterated over all the elements, we can return -1 if there are no duplicates or if the array is empty
  if (newArray.length === arr.length || arr.length === 0) return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([1, 2, 5, 2]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Take first element of the array
// Push into a new array
// Take next element of the array
// Check if the new array contains this next element
// If not, push this next element into the new array and continue to iterate
// If it does, return this next element

// A new array is initialized with the first element of the existing array. 
// For each element in the existing array, starting at index 1, we check if the element is already in the new array.
// If it is, then the iteration stops and we return that element.
// Otherwise, the element is pushed into the new array and we continue checking the next element.
// At the end of the iteration, we check if the new array length is equal to the existing array length, or if the array is empty.
// Both of these scenarios return -1
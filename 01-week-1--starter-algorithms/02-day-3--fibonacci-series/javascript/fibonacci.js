function fibonacci(num) {
  // type your code here
  // num is the index of the element in this array
  if (num === 0) return 0
  // initialize array with first two elements, 0 and 1
  let array = [0, 1]
  // iterate through until we reach the index we're looking for, which is num - 1 since we already have the first two elements
  for (let i = 0; i < num - 1; i++) {
    // take the sum of these two elements by their indices
    let next = array[i] + array[i + 1]
    // push this sum into the array
    array.push(next)
  }
  // once for loop is complete, return the last element of the array
  return array[array.length - 1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 144");
  console.log("=>", fibonacci(12));

  console.log("");

  console.log("Expecting: 8");
  console.log("=>", fibonacci(6));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// A new array is created with the first two numbers of the Fibonacci sequence.
// Starting with index of 0, we take the sum of the number at that index and the number at one index greater.
// This sum is then pushed into the array.
// The for loop is repeated until we reach the desired index which is 2 less than the argument represented by num.
// Once the loop is finished, we return the last element of the array.
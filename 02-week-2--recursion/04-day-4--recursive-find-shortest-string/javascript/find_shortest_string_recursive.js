function findShortestStringRecursive(arr) {
  // type your code here
  // when there is only one element left, we want to return that value
  if (arr.length === 1) return arr[0]
  // compare the length of the first two strings
  // remove the string that is longer from the array 
  arr[0].length <= arr[1].length ? arr.splice(1,1) : arr.splice(0,1)
  // call the function on the new array
  return findShortestStringRecursive(arr)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");

  console.log("Expecting: 'perr'");
  console.log("=>", findShortestStringRecursive(['perr', 'wallace', 'sniff', 'charlie', 'pear']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
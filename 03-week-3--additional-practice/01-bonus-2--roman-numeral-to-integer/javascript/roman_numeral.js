function romanNumeral(string) {
  // type your code here
  let numArray = []
  for (let i = 0; i < string.length; i++) {
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

// initialize an empty array
// iterate over the string
// if the character is 'I', push 1 into the array
// if 'V', push 5 into the array
// if 'X', push 10 
// if 'L', push 50
// if 'C', push 100
// if 'D', push 500
// if 'M', push 1000
// use a switch statement for the above conditions
// 'MMIV' (2004) -> [1000, 1000, 1, 5]
// once string is finished, iterate over the array with map
// if element n < n + 1, then make n negative
// call reduce method on array with function adding the elements
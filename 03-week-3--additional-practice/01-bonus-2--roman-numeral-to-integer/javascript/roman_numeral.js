function romanNumeral(string) {
  // type your code here
  // initialize an empty array to store the number values
  let numArray = []
  // iterate over the string and associate each roman numeral with a number
  // push that number into the array
  // using switch statement because of the number of conditions possible 
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "I":
        numArray.push(1)
        break
      case "V":
        numArray.push(5)
        break
      case "X":
        numArray.push(10)
        break
      case "L":
        numArray.push(50)
        break
      case "C":
        numArray.push(100)
        break
      case "D":
        numArray.push(500)
        break
      case "M":
        numArray.push(1000)
    }
  }
  // once string is finished, iterate over the array
  // not using map here because need to access indices to compare
  // for loop allows comparison by index but first, new empty array needs to be initialized
  let finalArray = []
  for (let i = 0; i < numArray.length; i++) {
      // if the number is smaller than the number after it, make that number negative
      if (numArray[i] < numArray[i + 1]) {
        finalArray.push(numArray[i] * -1)
      }
      // otherwise keep number as is
      else finalArray.push(numArray[i])
    }
    // call reduce method on this final array with a callback function that adds the elements
    return finalArray.reduce((total, num) => total + num)
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

  console.log("");

  console.log("Expecting: 2004");
  console.log(romanNumeral('MMIV'));

  console.log("");

  console.log("Expecting: 2397");
  console.log(romanNumeral('MMCCCLXLVII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

// if the character is 'I', push 1 into the array
// if 'V', push 5 into the array
// if 'X', push 10 
// if 'L', push 50
// if 'C', push 100
// if 'D', push 500
// if 'M', push 1000
// use a switch statement for the above conditions
// 'MMIV' (2004) -> [1000, 1000, 1, 5]

// We want to first convert each roman numeral into a number data type.
// Since evaluating a roman numeral is just adding up what each one stands for, pushing the numbers into an array and reducing it will do the trick.
// Once each numeral has been converted, we need to check if there are any numbers that are smaller than the next number,
// because that would mean that the smaller number needs to be subtracted from the following one.
// Making that number negative will achieve the same result.
// We need to create another new array so we can push in the transformed numbers.
// Finally, we can call the reduce method on the array to add everything up.
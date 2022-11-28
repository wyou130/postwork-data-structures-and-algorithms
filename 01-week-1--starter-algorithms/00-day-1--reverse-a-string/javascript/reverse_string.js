function reverseString(str) {
  // type your code here
// With built in methods
  // let array = str.split('')
  // let reversedArray = array.reverse()
  // let reversedString = reversedArray.join('')
  // console.log(reversedString)
// Without built in methods
  let reverse = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse
  // console.log(reverse)
}

// reverseString("wow this is cool")

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Initialize empty string
// Take the last character
// Add the second to last character 
// Take the string so far
// Add the next character to the current string 
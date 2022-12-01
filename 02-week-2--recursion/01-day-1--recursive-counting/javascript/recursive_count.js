function recursiveCount(num = 0) {
  // type your code here
  // function only runs under the condition that num < 10
  if (num < 10) {
    // we want to print num, then add 1 to it
    console.log(num)
    num++
    // we call the function itself so it can continue to run while the condition is true
    recursiveCount(num)
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
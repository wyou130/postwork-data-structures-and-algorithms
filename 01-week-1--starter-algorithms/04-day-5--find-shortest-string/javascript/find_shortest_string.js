function findShortestString(arr) {
  // type your code here
  // define a variable that keeps track of the shortest string, initialized with the first element of the array
  let shortestString = arr[0]
    // compare each string in the array against the current shortest string
    for (let i = 0; i < arr.length; i++) {
      // only if the element is shorter than the current shortest does the element become the shortest string
      // that way, if two strings are the same length, the first one is returned since we go in increasing order
      if (shortestString.length > arr[i].length) {
        shortestString = arr[i]
      }
    }
    return shortestString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'perr'");
  console.log("=>", findShortestString(['wallace', 'perr', 'sniff', 'charlie', 'peer']));

  console.log("");

  console.log("Expecting: 'i'");
  console.log("=>", findShortestString(['this', 'array', 'will', 'return', 'i']));

  // BENCHMARK HERE

  let currentTime = Date.now()

  let longArray = []

  for (let i = 0; i < 100; i++) {
    const months = ["January", "February", "March", "April", "May", "June", "July"]
    longArray.push(months[Math.floor(Math.random() * months.length)])
  }

  for (let i = 0; i < 1000; i++) {
    findShortestString(['flower', 'juniper', 'lily'])
    findShortestString(longArray)
  }

  const averageTime = (Date.now() - currentTime) / 2000

  console.log(averageTime)

}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// The variable shortestString keeps track of the shortest string as we iterate through the array.
// We compare the length of the current shortest string to the length of each element in order, 
// setting the shortestString variable to that element only if the length of that element is less than that of the current shortestString.
// After going through the array, the element that has remained the shortest string is returned.
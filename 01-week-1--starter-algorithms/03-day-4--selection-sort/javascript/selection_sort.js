function selectionSort(arr) {
  // type your code here
  // let newArray = []
  // let larger = arr[0]
  // for (let i = 0; i < arr.length - 1; i++) {
  //   let subtract = larger - arr[i + 1] 
  //   if (subtract < 0) {
  //     newArray.push(larger)
  //     larger = arr[i + 1]
  //   }
  //   else {
  //     newArray.push(arr[i + 1])
  //     larger = arr[i]
  //   }
  //   console.log(newArray)
  // }
  // return newArray

  // create a for loop for the first number to compare against
  for (let i = 0; i < arr.length; i++) {
    // set the index of that first number to be the index of the minimum number
    let minIndex = i
    // for each number we compare against, we need to loop through the rest of the numbers
    for (let j = i + 1; j < arr.length; j++) {
      // when the second number is smaller than the first number, we set the index of the minimum number to be the index of the second number
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // once the second loop is complete, swap the values at i and the minIndex - no change if minIndex remains i
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-5, 3, 6, 10]");
  console.log("=>", selectionSort([6, 10, -5, 3]));

  console.log("");

  console.log("Expecting: [-3, 0, 1, 9, 88]");
  console.log("=>", selectionSort([88, 9, -3, 0, 1]));

  // BENCHMARK HERE, and print the average runtime
  let startTime = Date.now()
  
  const smallInput = []

  // create the array with only 3 numbers
  for (let i = 0; i < 3; i++) {
    smallInput.push(Math.random());
  }

  const longInput = [];

  // create the array with 100 numbers
  for (let i = 0; i < 100; i++) {
    longInput.push(Math.random());
  }

  // perform function 2000 times total to see how long it takes for both a small input and a long input 
  for (let i = 0; i < 1000; i++) {
    selectionSort(smallInput);
    selectionSort(longInput);
  }

  // take the average time for each iteration
  let averageTime = (Date.now() - startTime) / 2000

  console.log(averageTime)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// initialize new empty array
// take first two elements of the existing array by their indices and subtract them
// if the subtraction result is negative (less than 0) 
// then push the first element into the new array and compare the second element to the next element in the array
// if the subtraction result is positive (greater than 0) 
// then push the second element into the new array and compare the first element to the next element in the array
// existing array = [3, -1, 5, 2]
// new array = [-1, 3, 2, 5]
// continue to create new array and perform subtractions until all subtractions are negative, or while subtractions result in positive numbers

// The above became too complex
// Used two for loops instead and kept track of the index of the smallest element while looping through
// No new arraay created 
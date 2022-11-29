function selectionSort(arr) {
  // type your code here
  let newArray = []
  let larger = arr[0]
  for (let i = 0; i < arr.length - 1; i++) {
    let subtract = larger - arr[i + 1] 
    if (subtract < 0) {
      newArray.push(larger)
      larger = arr[i + 1]
    }
    else {
      newArray.push(arr[i + 1])
      larger = arr[i]
    }
    console.log(newArray)
  }
  // how to get the remaining element of arr into newArray?
  // newArray.push(arr[arr.length - 1])
  return newArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-5, 3, 6, 10]");
  console.log("=>", selectionSort([6, 10, -5, 3]));

  // BENCHMARK HERE, and print the average runtime
  let startTime = Date.now()
  
  const smallInput = []

  for (let i = 0; i < 3; ++i) {
    smallInput.push(Math.random());
  }

  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

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
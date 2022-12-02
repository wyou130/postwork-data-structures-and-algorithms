function fibonacci(n) {
  // type your code here
  if (n < 2) return n
  return fibonacci(n - 2) + fibonacci(n - 1)
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

  console.log("Expecting: 5");
  console.log("=>", fibonacci(5));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
// if n = 0, return 0
// if n = 1, return 1
// so basically if n < 2, return n
// fibonacci(0) = 0
// fibonacci(1) = 1

// fibonacci(5) = fibonacci(4) + fibonacci(3)
// fibonacci(4) = fibonacci(3) + fibonacci(2)
// fibonacci(3) = fibonacci(2) + fibonacci(1)
// fibonacci(2) = fibonacci(1) + fibonacci(0)
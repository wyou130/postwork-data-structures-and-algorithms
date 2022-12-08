function balancingParentheses(string) {
  // type your code here
  // initialize tracker variables for number of opening parentheses, closing parentheses, and stray parentheses (first and last characters)
  let countOpen = 0
  let countClose = 0
  let stray = 0
  // if the first character is a closing parenthesis, it is counted as a stray
  // if not, it is counted as an opening parenthesis
  string.charAt(0) === ')' ? stray++ : countOpen++
  // if the string is longer than 1 (so the first and last characters are not the same character)
  // check the last character to see if it is a stray or a closing parenthesis
  if (string.length > 1) {
    string.charAt(string.length - 1) === '(' ? stray++ : countClose++;
  }
  // iterate through the rest (middle) of the string to track how many opening and closing parentheses
  for (let position = 1; position < string.length - 1; position++) {
    if(string.charAt(position) === '(') {
      countOpen++
    }
    else {
      countClose++
    }
  }
  // the additional parentheses needed for the string to be considered balanced 
  // is the absolute difference between opening and closing parentheses tracked, plus any stray parentheses
  let difference = (Math.abs(countOpen - countClose)) + stray
  return difference
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("");

  console.log("Expecting: 4");
  console.log(balancingParentheses('((((()'));

  console.log("");

  console.log("Expecting: 5");
  console.log(balancingParentheses(')((((()'));

  console.log("");

  console.log("Expecting: 6");
  console.log(balancingParentheses(')((((()('));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('(()('));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// can count how many opening parentheses there are, and how many closing parentheses there are
// then find the difference between them
// take into account any stray closing parentheses in the beginning and stray opening parentheses at the end
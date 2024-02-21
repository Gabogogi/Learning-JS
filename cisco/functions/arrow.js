/*  concise way to write anonymous functions in JavaScript
 Basic syntax:
const functionName = (parameters) => {
     Function body
  };

   If the function body consists of a single statement, the curly braces and "return" keyword can be omitted:
  const functionName = (parameters) => singleExpression;

   If the function takes no parameters, parentheses are still required:
  const functionName = () => {
     Function body
  }; */


// 5.1.10 SECTION PRACTICE:
/* Exercise one:
given this function:
 Try to modify the above piece of code to make it as short as possible. Suggestions:
let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
      retVal = -1;
     } else if(a > b) {
      retVal = 1;
     }
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]
use an anonymous function;
use an arrow function;
consider skipping the if statement. */
let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0);
console.log(sorted); // [10, 20, 30, 40, 50]

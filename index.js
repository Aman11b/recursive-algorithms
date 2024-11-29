import { factorial } from "./recursion.js";
import { stringReverse } from "./recursion.js";
import { palindrome } from "./recursion.js";
import { decimalToBinary } from "./recursion.js";
import { sumOfNaturalNum } from "./recursion.js";
import { binarySearch } from "./recursion.js";
import { fibonacciNonOptimized } from "./recursion.js";
import { fibonacciOptimized } from "./recursion.js";


console.log("------   -------");

console.log("----factorial----")
console.log(factorial(5));

console.log("----string reverse----")
console.log(stringReverse("ordin project"));

console.log("----palindrome----")
console.log(palindrome('kayak'));
console.log(palindrome('kayaky'));

console.log("------decimal to binary---------");
console.log(decimalToBinary(10));

console.log("------  binary Search -------");
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
console.log(binarySearch(sortedArray,target));


console.log("------ Fibonacci non optimized  -------");
console.log(fibonacciNonOptimized(5));
console.log(fibonacciNonOptimized(7));

console.log("------ Fibonacci optimized  -------");
console.log(fibonacciOptimized(5));
console.log(fibonacciOptimized(7));




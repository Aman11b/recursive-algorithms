# Recursive Algorithms Collection

## Overview
This repository contains a comprehensive collection of recursive algorithms implemented in JavaScript, covering various problem-solving techniques and computational methods.

## Algorithms Implemented

### 1. Factorial Calculation
- Computes factorial of a number
- Recursive approach
- Time Complexity: O(n)
- Space Complexity: O(n)

### 2. String Reversal
- Reverses a string using recursion
- Character-by-character approach
- Time Complexity: O(n)
- Space Complexity: O(n)

### 3. Palindrome Checker
- Determines if a string is a palindrome
- Recursive character comparison
- Time Complexity: O(n)
- Space Complexity: O(n)

### 4. Decimal to Binary Conversion
- Converts decimal to binary representation
- Recursive digit extraction
- Time Complexity: O(log n)
- Space Complexity: O(log n)

### 5. Sum of Natural Numbers
- Calculates sum of first n natural numbers
- Recursive addition
- Time Complexity: O(n)
- Space Complexity: O(n)

### 6. Binary Search
- Searches sorted array efficiently
- Divide and conquer approach
- Time Complexity: O(log n)
- Space Complexity: O(log n)

### 7. Fibonacci Sequence
- Two implementations:
  a. Non-optimized (Exponential complexity)
  b. Memoized (Linear complexity)
- Demonstrates optimization techniques

### 8. Merge Sort
- Efficient sorting algorithm
- Divide and conquer strategy
- Time Complexity: O(n log n)
- Space Complexity: O(n)

## Usage

```javascript
import { 
  factorial, 
  stringReverse, 
  palindrome,
  // ... other functions
} from './recursive-algorithms.js';

// Example usage
console.log(factorial(5));  // 120
console.log(stringReverse("hello"));  // "olleh"
console.log(palindrome("racecar"));  // true

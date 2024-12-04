# Implicit Type Coercion Bug in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript related to implicit type coercion when using the + operator for string concatenation. The bug arises when the function receives mixed data types, leading to unintended behavior.

## Bug Description

The JavaScript function `foo` intends to concatenate two numbers as strings.  However, if either input is not a number, JavaScript's implicit type coercion can produce unexpected results. For example, concatenating a number with a string using the + operator results in string concatenation.

## Solution

The solution explicitly converts both inputs to strings before concatenation to ensure consistent behavior regardless of input types. This avoids unexpected results due to implicit type coercion.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run the buggy version of the code: `node bug.js`
4. Observe the unexpected output for non-numeric inputs.
5. Run the fixed version: `node bugSolution.js`
6. Notice the corrected output, demonstrating the solution.

## Files

* `bug.js`: The JavaScript code demonstrating the bug.
* `bugSolution.js`: The JavaScript code demonstrating the solution.
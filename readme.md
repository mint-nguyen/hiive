## Problem statements

Please create a GitHub repo that is publicly available with a solution to the following problem. The solution can be in any language, with preference given to solutions in TypeScript. Please include instructions on how to run your code.

1. We need to alphabetically order a string. For example, given the input “HiiveIsLive", the output “eehiiiilsvv" is produced.

2. We need to further extend the function to take a second input which is a custom alphabet. The input should be an ordered list of all 26 characters in any order. The function should use this alphabet for ordering the input string.

## Assumptions for problem #1

- Input: string; output: string.
- The string only contains alphabetical characters. No numerical characters or special characters.
- The input can be either lowercase or uppercase. The output string should only contain lowercase characters.
- String can be empty.

## Solution ideas for problem #1

1. Lowercase the input
2. Convert string to array
3. Use JS built-in functions to sort array
4. Convert array back to string

Time complexity: O(nlogn)
Space complexity: O(n)

## Assumption for problem #2

- Input 1: string
- Input 2: string with all unique 26 characters
- Output: string
- The custom alphabet can be in any order
- The custom alphabet is valid: meaning that it doesn't need to be validated

### Solution ideas for problem #2

1. Create an object that maps each character in the custom alphabet with its index.
2. Lowercase the input string
3. Convert the input string to array
4. Sort the array according to the custom alphabet order
5. Convert the array back to the string

Time complexity: O(nlogn)
Space complexity: O(n)

## How to run

### Prerequisites

- Install Node: https://nodejs.org/en

### Running

```bash
node .\testOrderString.js
```

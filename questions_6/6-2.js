// This file contains the solution to the question 6-2 coding test.

// Let's say we have an array of first 45 numbers with one missing number,
// this function finds the missing integer from the list.
function findMissingNumber(arr) {
  // get the sum of first 45 numbers using the n*(n+1)/2 formula
  const expectedSum = (45 * (45 + 1)) / 2; // expected sum of all numbers from 1 to 45
  // checking the actual sum
  let actualSum =  0
  arr.forEach((digit) => {
    actualSum += digit;
  })

  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}

// Function that will take input from the user and check if it is palindrome
// if the word is not palindrome then return it in the reverse order. 
// For example "hello" is not a palindrome, it should return "olleh“
function mainFunction(testString) {
  const palindromeCheck = checkIfPalindrome(testString);
  if (palindromeCheck) {
    return 'The string given is a palindrome and a reversal is not necessary';
  }
  const reversedString = reverseString(testString);
  return reversedString;
}
// checks if a string is a palindrome
function checkIfPalindrome(stringToBeChecked) {
  const reversedString = reverseString(stringToBeChecked);
  if (reversedString === stringToBeChecked) {
    return true; // string is a palindrome
  }
  return false;
}

// function to reverse string
function reverseString(string) {
  const reversedArray = []
  string.split('').forEach((letter) => {
    reversedArray.unshift(letter);
  })
  const reversedString = reversedArray.join('');
  return reversedString;
}

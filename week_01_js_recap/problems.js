// Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Find max in array
function findMax(arr) {
  let max = null;
  arr.forEach((n) => (max = n > max ? n : max));
  return max;
}

// Check if palindrome
function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

module.exports = { reverseString, findMax, isPalindrome };

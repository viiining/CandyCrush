// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Method 1:
// (RunTime - 70ms)

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 先用 regex 將所有非字母的字元取代並轉為小寫
  let filteredString = s.replace(/[^a-zA-Z\d]/g, "").toLowerCase();

  let first = 0;
  let last = filteredString.length - 1;

  while (first < last) {
    if (filteredString[first] !== filteredString[last]) {
      return false;
    }

    first++;
    last--;
  };

  return true;
};

// Method 2:
// (RunTime - 67ms)

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let filteredString = s.replace(/[^a-zA-Z\d]/g, "").toLowerCase();

  // 直接將過濾後的字串反轉
  let reversedString = filteredString.split('').reverse().join('');

  return filteredString === reversedString;
};
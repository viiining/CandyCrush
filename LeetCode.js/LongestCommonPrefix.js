// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"


// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Method 1:
// (RunTime - 58ms)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    // 比較該字母在其他字串相同位置的字母
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || char !== strs[j][i]) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};


// Method 2:
// (RunTime - 52ms)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }

  // 將陣列排序，這樣具有相同前綴的字串就會被排在一起
  strs.sort();

  // 比較排序後的陣列的第一個字串和最後一個字串的每個字母
  let firstStr = strs[0];
  let lastStr = strs[strs.length - 1];
  let i = 0;

  // 如果找到不同的字母或某個字串的長度不足，就返回目前的前綴
  while (i < firstStr.length && firstStr[i] === lastStr[i]) {
    i++;
  }

  return firstStr.substring(0, i);
};
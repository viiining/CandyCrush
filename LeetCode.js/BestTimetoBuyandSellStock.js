// You are given an array prices where prices[i] is the price of a given stock on the i day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Method 1:
// 想法對，但是超時！
//這種暴力解法的時間複雜度是 O(n^2)，在價格數組很大的情況下，可能會導致超時。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      };
    };
  };
  return max
};

// Method 2:
// 這種方法的時間複雜度是 O(n)，因為只需一次遍歷。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrice = prices[0]
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit)
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }
  };
  return maxProfit
};

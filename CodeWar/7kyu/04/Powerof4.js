// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

// (In C# Integer means all integer Types like Int16,Int32,.....)

function powerOf4(n) {
  if (typeof n === "number") {
    const logNum = Math.log(n) / Math.log(4); // 找對數
    return Number.isInteger(logNum);
  }
  return false;
}

console.log(powerOf4(1024)); // returns true
console.log(powerOf4(1)); // returns true
console.log(powerOf4(44)); // returns false
console.log(powerOf4("not a positive integer")); // returns false

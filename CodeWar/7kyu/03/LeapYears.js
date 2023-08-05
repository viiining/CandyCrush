// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

// Method 1
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      return true;
    }
  }
  return false;
}

// Method 2
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

console.log(isLeapYear(2100));

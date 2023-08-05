// Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

// Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string. The function should return an empty array with a 0 length string, '', as input.

function rotate(str) {
  if (str === "") {
    return [];
  }
  const list = [];
  const chars = str.split("");

  for (let i = 1; i <= str.length; i++) {
    const rotated = [...chars.slice(i), ...chars.slice(0, i)]; // to separate the word into two parts
    list.push(rotated.join(""));
  }

  return list;
}

console.log(rotate("Hello"));

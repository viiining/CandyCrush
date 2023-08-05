function pigIt(str) {
  const arr = str.split(" ");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const regex = /[^a-zA-Z]/;
    if (word.match(regex)) {
      newArr.push(word.slice(1) + word[0]);
    } else {
      newArr.push(word.slice(1) + word[0] + "ay");
    }
  }
  return newArr.join(" ");
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !

function duplicateEncode(word) {
  let newWord = word.split("");
  for (let i = 0; i < newWord.length; i++) {
    if (newWord === newWord) {
      return (newWord = ")");
    }
    return (newWord = "(");
  }
}

console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("(( @"));

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

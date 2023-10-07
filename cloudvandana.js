function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
function reverseWordsSentence(sentence) {
  let reversedSentence = '';
  let word = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      reversedSentence += reverseWord(word) + ' ';
      word = '';
    } else {
      word += sentence[i];
    }
  }
  reversedSentence += reverseWord(word);
  return reversedSentence;
}
const inputSentence = "This is a sunny day";
const reversedResult = reverseWordsSentence(inputSentence);
console.log(reversedResult);

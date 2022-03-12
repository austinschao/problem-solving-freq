'use strict'
// Parameter => two strings, one is a word and other is some letters
// Return => True, if word can be made with letters, else false

// Check the letter counter to see if the value of the
//    key matching the word counter is greater or equal to the
//    word counter key-value

/** Checks to see if word can be made from letters */
function canConstructWord(word, letters) {
  if (word.length > letters.length) {
    return false;
  }
  // Create count obj of both arguments
  const wordCount = makeFreqCounter(word);
  const lettersCount = makeFreqCounter(letters);
  // Check the letter counter to see if the value of the
  //    key matching the word counter is greater or equal to the
  //    word counter key-value
  for (let key of lettersCount.keys()) {
    if (lettersCount.get(key) < wordCount.get(key)) {
      return false;
    }
  }
  return true;
}


// Create a counter (map) for both arguments
function makeFreqCounter(str) {
  const count = new Map();

  for (let char of str) {
    let charCount = count.get(char) || 0;
    count.set(char, charCount + 1);
  }
  return count;
}
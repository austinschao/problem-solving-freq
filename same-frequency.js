"use strict";
// make frequency counter, count the frequencies
// of each integer and if key value pairs matches
//in both, return true, else return false

/**
 * Figures out if two given integers have the same
 * frequency of digits.
 */
function sameFrequency(int1, int2) {
  const int1Str = int1.toString();
  const int2Str = int2.toString();

  if (int1Str.length !== int2Str.length) {
    return false;
  }

  for(let char of int1Str){
    if(int2Str.includes(char) === false){
      return false
    }
  }

  const int1Freqs = makeFreqCounter(int1Str);
  const int2Freqs = makeFreqCounter(int2Str);
  console.log("int1freq", int1Freqs, "int2freq", int2Freqs);

  for (let key of int1Freqs.keys()) {
    if (int1Freqs[key] !== int2Freqs[key] ) {
      return false
    }
  }
  return true
}

function makeFreqCounter(str) {
  let freqs = new Map();

  for (let char of str) {
    let charCount = freqs.get(char) || 0;
    freqs.set(char, charCount + 1);
  }
  return freqs;
}
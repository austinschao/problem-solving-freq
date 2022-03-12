"use strict";

// add whatever parameters you deem necessary & write docstring
//Taking an array of integers and a target average,
//checking if the average of any two values in the array === target
// return true or false

/**Given a sorted arr of integers and a target num,
 * check if average of any pair of integers matches target*/
function averagePair(integers, target) {
  let left = 0;
  let right = integers.length - 1;

  while (left < right) {
    const intAverage = (integers[left] + integers[right]) / 2;
    if (intAverage === target) {
      return true;
    } else if (intAverage > target) {
      right--;
    } else {
      left++;
    }
  }
  return false
}

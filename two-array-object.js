'use strict'

/**Creating an object from an arr of keys
 *  and arr of values
*/


// Paramater => arr of keys and arr of values
// Return => An object made from the two arrays
//           if the values is less than keys, add null

// Init an empty object
// iterate through the arr of keys and value
//  at the same time and add them as a
//  key value pair to the object


function twoArrayObject(keys, values) {
  const objFromArr = {};

  for (let i = 0; i < keys.length; i++) {
    if (values[i] === undefined) {
      values[i] = null;
    }
    objFromArr[keys[i]] = values[i];
  }
  return objFromArrays;
}

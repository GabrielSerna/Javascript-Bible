/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

// Write code here
function sumObjectValues(object) {
  let sumNums = 0

  for ( let num in object) {
    if (typeof object[num] === "number" && object.hasOwnProperty(num)) sumNums += object[num];
  }

  return sumNums
}

console.log(sumObjectValues(nums));
//42

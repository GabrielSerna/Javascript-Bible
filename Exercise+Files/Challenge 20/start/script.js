/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write sumPlusMinus() function here
function sumPlusMinus(nums) {

  let posNums = nums.filter( el => el >= 0).reduce((tot, num) => tot + num, 0);
  let negNums = nums.filter( el => el < 0).reduce((tot, num) => tot + num, 0);

  return {
    plus: posNums,
    minus: negNums
  }
};

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}

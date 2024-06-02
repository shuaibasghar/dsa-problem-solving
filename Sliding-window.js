/**
 SLIDING WINDOW
This pattern involves creating a window which can either be an array or number from one position to another

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.
 */

// An Example
/**
 Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
 */

// Solution
function maxSubarraySum(arr, num) {
  //   debugger;
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity; // -Infinity is a number in JavaScript, which represents the negative infinity. It is a special value that’s less than any other number.
  // why use -Infinity, because we are looking for the maximum sum, so we need to compare the sum with the maximum number
  // if we use 0, then the sum will be always greater than 0, so we will not get the correct result

  for (let i = 0; i < arr.length - num + 1; i++) {
    // arr.length - num + 1, because we need to stop the loop before the last num elements in the array
    // because we are going to add the last num elements in the array, so we need to stop the loop before the last num elements
    console.log("i", i);
    let temp = 0;
    for (let j = 0; j < num; j++) {
      console.log("j", j);
      console.log("arr[i + j]", arr[i + j]);

      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10

// maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
// Time Complexity - O(n^2)
// Space Complexity - O(1)

// Solution 2
function maxSubarraySum2() {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2); // 10

// maxSubarraySum2([4, 2, 1, 6, 2], 4); // 13
// Time Complexity - O(n)
// Space Complexity - O(1)

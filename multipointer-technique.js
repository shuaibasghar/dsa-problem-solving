/**
 Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
 */

function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
sumZero1([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]

// Time complexity: O(n^2) -- Quadratic time complexity
// Space complexity: O(1)  -- Constant space complexity

// REFACTORED
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]

// Time complexity: O(n) -- Linear time complexity
// Space complexity: O(1) -- Constant space complexity

/**
 countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
 */
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return document.write("check your input is empty", 0);
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return document.write("count of unique values is ", i + 1);
}
// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([]);

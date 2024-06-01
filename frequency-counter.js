// FREQUENCY COUNTERS
// This pattern uses objects or sets to collect values/frequencies of values

// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

/**
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
 */

function same(arr1, arr2) {
  // check if the length of the arrays are the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // check if the square of the first array is in the second array
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1); // remove the element from the second array
  }
  return true;
}

// Time complexity: O(n^2)

// REFACTORED
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //   console.log("frequencyCounter1", frequencyCounter1);
  for (let val of arr1) {
    console.log("val", val);
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  console.log("frequencyCounter1", frequencyCounter1);

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // check if the frequency of the square of the key in the first array is the same as the frequency of the key in the second array
    // frequency means the number of times the key appears in the array
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
same([1, 2, 3], [4, 1, 9]); //true
// same([1, 2, 3], [1, 9]);//false
// same([1, 2, 1], [4, 4, 1]); //false (must be same frequency)
/*
//--------> Refactored code explanations <--------//

The for...of loop is used to iterate over each element (val) in the array arr1. For each iteration, it checks if the current value (val) already exists as a key in the frequencyCounter1 object.

The line frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; is doing a couple of things. First, it's looking up the current value in the frequencyCounter1 object. If the value doesn't exist, JavaScript returns undefined. The || operator is used here to provide a default value of 0 when the lookup returns undefined. This is a common pattern in JavaScript for providing default values.

After the || operation, we have a number which is the current count of val in the frequencyCounter1 object (or 0 if it doesn't exist yet). We then add 1 to this count and assign it back to frequencyCounter1[val]. This effectively counts the frequency of each value in the array arr1 and stores the result in the frequencyCounter1 object.

By the end of the loop, frequencyCounter1 will be an object where the keys are the unique values from arr1 and the values are the corresponding frequencies of these values in arr1.

*/

/**
 ANAGRAMS
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}
validAnagram("anagram", "nagaram"); // true

// Time complexity: O(n)

function validAnagram2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const lookup = {};
  for (let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];
    //if letter exists increment otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    let letter = arr2[i];
    //can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram2("anagram", "nagaram"); // true

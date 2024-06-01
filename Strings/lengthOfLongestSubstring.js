// Longest substring without repeating character
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

//---------1. Brute force technique ---------time Complexity O(nsquare)
//--------it will take two much time
//Combinations
// a
//ab
//abc
//abca

//--------2.Sliding window ----- we do shifting-----we take window and two pointers
//left and right means end and start pointer
//so start aur end ke andar jo values iterate hojaen gi wo hi hamari substring aur length hogi
//so hum DataStructure use karein ge Set()---- kun ke ye unique characters store karta aur repeating characters remove karne hain
//working
//Final String -> abcabcbb -> length 7

//start=0;
//end=0;

//when abc inserted
//abc----abcbb
//start 0
//end 2
// max 3

//jab abc add ho jae gi to piche abcbb bach jae ga
//----aur jab do bara a aae ga to s[start] delete kar de ga
//start ki value zero ha to start se 0-index means a ko delet kar de ga aur new a ko add kare ga
// us case mein string ho jae gi bca aur orignal string rahe gi bcbb

//bcabcbb
//start 1
//end 3
//max 3

//cabcbb
//start 2
//end 4
//max 3

//abcbb
//start 3
//end 5
//max 3

//bcbb
//start 4
//end 6
//max 3

//cbb
//start 5
//end 7
//max 3

//bb
//start 6
//end 8
//max 3

//b
//start 7
//end 8
//max 3

function lengthOfLongestSubstring(s) {
    //Sliding Window Technique
    //if not any string return 0
    if (!s) {
        return 0;
    }

    let start = 0; //pointer left
    let end = 0; ////pointer right
    let maxLength = 0;

    const uniqueCharacters = new Set();

    //Loop
    while (end < s.length) {
        //agar uniqueCharacters mein s[end] means s[0] which is a agar "a" present ni hai to us ko add krdo aur end ki value barha end++
        if (!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);
        } else {
            uniqueCharacters.delete(s[start]);
            start++;
        }
    }
    console.log(start, end);
    return maxLength;
}
// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;
//     let start = 0;
//     // characterMap
//     let charMap = {};

//     for (let end = 0; end < s.length; end++) {
//         const currentChar = s[end];
//         console.log("currentChar", currentChar);
//         if (charMap[currentChar] >= start) {
//             // If the current character is repeated within the current window, update the start index
//             start = charMap[currentChar] + 1;
//             // console.log("start", start);
//             // console.log("characterMap", charMap);
//             console.log("Start", start);
//         }

//         // charMap[currentChar] = end; // Store the index of the current character

//         // const currentLength = end - start + 1;
//         // maxLength = Math.max(maxLength, currentLength);
//     }
//     // return maxLength;
// }

const input = "abcabcbb";
const length = lengthOfLongestSubstring(input);
console.log(length); // Output: 3

/**
 * 
 
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charSet = new Set();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    while (charSet.has(currentChar)) {
      // If the current character is already in the set, remove the characters from the start
      charSet.delete(s[start]);
      start++;
    }

    charSet.add(currentChar); // Add the current character to the set

    const currentLength = end - start + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}


 * 
 */

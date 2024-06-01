/*
palindrome;------dad 

if we reverse the dad it will be the same 
word dad so this string is a palindrome

dad -> dad -> true
level -> level -> true
ajay -> yaja -> false
noon -> noon -> true

121 -> 121 -> true
222 -> 222 -> true

*/

//builtin function
// function isPal(str) {
//     let reverseStr = str.split("").reverse().join("");
//     // console.log(reverseStr);
//     return str.toLowerCase() === reverseStr.toLowerCase();
// }

// console.log(isPal("level"));

//without builtin function
function isPal(str) {
    let newStr = str.toLowerCase();
    let left = 0;
    let right = newStr.length - 1;
    while (left < right) {
        if (newStr[left] !== newStr[right]) return false;

        left++;
        right--;
    }
    return true;
}
console.log(isPal("ajay"));

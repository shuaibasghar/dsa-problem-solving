/*
Anagram:- 
"hello" ---- "llheo"

1.condition -> length of the both string must be same.
2.no. of letters must be same arrangement can be different.

count same letters quantity
h----1 time
e----1
o----1
l----2 time

first String {h:1,e:1,l:2,o:1}
we check each letter in fist string it is present or not so
h is present we will decrease the value of h:0
e is present we will decrease the value of e:0
l is present we will decrease the value of l:1
l is present we will decrease the value of l:0
o is present we will decrease the value of o:0

new map {h:0,e:0,l:0,o:0} if all value must be zero than string is angram otherwise it is not anagram
*/

function isAnagram(string1, string2) {
    if (string1.length != string2.length) return false;

    let counter = {};
    for (let letter of string1) {
        // counter[letter] = counter[letter] ; ----1st time / initial time it will be undefined agar undefined hota hai to usko zero lele
        counter[letter] = (counter[letter] || 0) + 1;
        /* 
        //output: 
        h:1----firstTime it was undefined when it was undefined it becomes zero so 0+1=1
        e:1---------0+1=1
        l:1---------0+1=1
        2 ----->so this time lis aready added number is one so it is not undefined 1+1=2
        1
        */
    }

    for (let items of string2) {
        if (!counter[items]) return false;
        counter[items] -= 1;
    }
    // console.log(counter);
    return true;
}
console.log(isAnagram("hello", "llheo"));

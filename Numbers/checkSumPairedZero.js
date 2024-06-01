//checking first pair whose sum is zero ---Problem ---1
//[-5,-4,-3,-2,0,2,4,6,8]
//[-4,4]-> output
//

//this is sorted array
/*
function getSumPairZero(array) {
    //traversing -->to visit each and every element of array
    for (let number of array) {
        // console.log(number);
        console.log("Outer Loop ");
        for (let j = 1; j < array.length; j++) {
            console.log("Inner Loop ");

            if (number + array[j] === 0) {
                return [number, array[j]];
            }
        }
    }
}
const reuslt = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(reuslt);
//O(n^2) quadratic time complexity----to make it linear means o(n)
 */

//optimize code ---- for making it quadratic to linear
//--SOLUTION --2

/* 
Explanation:-
[-5,-4,-3,-2,0,2,4,6,8]
left = -5 and right = 8
jab left+right > 0 hoga to right-- kardein 
aur jab left+right < 0 hoga to left++ kardein ge
aur phir left = -4 ho jae ga aur isi tarha chalta rahe ga

*/

function FindSumPair() {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
const result = FindSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

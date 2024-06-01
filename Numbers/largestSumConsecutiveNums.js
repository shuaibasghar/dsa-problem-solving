/**
 * 
 
//[1,2,3,4,3,5,4,6,7,8] =>Total elements -10
//Count largest sum of consecutive Digits

//num = 4---means hum 4 pairs ka sum nikalen ge
num ham apni marzi ke lein ge lekin wo total number se kam ho 
means first time it will be 
1,2,3,4=10 
2,3,4,3=12
3,4,3,5=15
4,3,5,4=26
. 
.
4,6,7,8=25 this is the largest consecutive sum 

//conditions
num > array --> error message means number should be less then array.length
loop will run 7 time
formula for loop

totalElements -num +1
10-4+1=7

*/

function findLargest(array, num) {
    if (num > array.length) {
        throw new Error("num value must be less than total number of array");
    } else {
        let maxSum = 0;
        for (let i = 0; i < array.length - num + 1; i++) {
            let tmpSum = 0;
            for (let j = 0; j < num; j++) {
                console.log("i", i, "----", "j", j);
                tmpSum += array[i + j];
            }
            if (tmpSum > maxSum) {
                maxSum = tmpSum;
            }
        }
        return maxSum;
    }
}
const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);

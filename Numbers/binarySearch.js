/*
//Divide & Conquerer Technique
//Find index of given no. in a sorted array 7

[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ===> index 6 ===>output

if array sorted

min = 0 ===> element 1
max=array.length-1 ===> element 15

conditions
1. midIndex = min+max/2 ===> (0+14)/2 ===> 7(index) ===> element=8
if array[midIndex]<number(7) ===> min=midIndex+1;
if array[midIndex]>number(7) ===> max=midIndex-1; ,min=0, max=7-1=6 
[1,2,3,4,5,6,7]
(min+max)/2===>3
so now midIndex=3 which is less than numbers
index+1=4
min=4 max=6 [5,6,7]
midIndex=(min+max)/2===> (6+4)/2===>5
min=midIndex=5+1=6
min=6, max=6
midIndex=(min+max)/2===> (6+6)/2===>6
min=midIndex=6+1=7   ab dono conditions fail ho rahee hain is liye 6 hee is ka index hai 
if both conditions failed in that case midIndex is our output
else midIndex



*/

function seacrchAlog(array, number) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2);

        console.log("midIndex", midIndex, "min", min, "max", max);
        if (array[midIndex] < number) {
            min = midIndex + 1;
        } else if (array[midIndex] > number) {
            max = midIndex - 1;
        } else {
            return midIndex;
        }
    }
    return -1; //if the number is not in array
}
const result = seacrchAlog(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    7
);
console.log(result);

//Time Complexity is Binary O(log(n)) --> ek array ke element ke liye jitna time lagta hai ek iteration ke liye bhi wohi time leti hai agra 5 bar loop chala to ye 5ms leti hai
// Binary is better than Linear time complexity

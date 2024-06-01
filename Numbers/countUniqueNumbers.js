//Count unique numbers
/*
sorted array
[1,1,2,2,3,4,4,5,6,7,8,8]
i=1,j=1
output -> 8 return the value of i which will be 8 because last number will be 8 its lenght will be 8.
agar i aur j ki value match karti hai to loop chalta rahe ga aur ja ki value 2 j=2
ab i=1 hai aur j=2 
jab i aur j match ni karein ge to niche likhi hui conditions apply karein ge
conditions
i=0,j=1  
if(array[i]!==array[j])
1. i++
2. array[i]=array[j] -----j mein jo value hai wo i ko assign ho jae gi
to [1,2,2,2,3,4,4,5,6,7,8,8]
i=2,j=2 jese hi j=3 ho jae gi to wo i ko assign hojae gi q ke phir i!==j condition true ho jae gi
to [1,2,3,2,3,4,4,5,6,7,8,8]
aur i mein increment ho jae ga
to i=2 aur j=3

*/
function countUnique(array) {
    let uniqueArray = [];
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i + 1; // i+1 is liye k ham jab logic bana rahe the to last mein i ki vlaue 8 mil rahi thee jo ke hamein return karwani hai to i zero defined hai to is liye ham i +1 kr rahe hain agar oper sirf i defined hot to ham i return krwate khali
    } else {
        throw new Error("Array is Empty ");
    }
    console.log(uniqueArray);
}
const result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(result);

/*
Checking Square in another array
arr1=[1,2,3,4], arr2=[1,9,4,16]

conditions:-
1st
make square of first array and then match it to second array

if(array1[i] * array1[i] === array2[j])
let isSquare=true
*/

function isSquare(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        let isSquare = false;
        for (let j = 0; j < array1.length; j++) {
            // if (array1[i * j] === array2[j])
            if (array1[i] * array1[i] === array2[j]) {
                isSquare = true;
            }
            //agar array 2 ki sare elements check karne ke bad koi square ni mile to return krde false
            //if we do not write this condition by default it will return true because when outer loop completed we have to return true
            //is ne sare elements check kiye aur koi square ni hai to ye false return kr de ga
            if (j === array2.length - 1) {
                if (!isSquare) {
                    return false;
                }
            }
        }
    }
    return true;
}

// const result = isSquare([1, 2, 3, 4], [1, 9, 16, 0]);===> output false because !isSquare found if all elements square found then it will return true
const result = isSquare([1, 2, 3, 4], [1, 9, 16, 4]);
console.log(result);

//time complexity is quadratic O(n^2)

//optimized
//time complexity Linear O(n)
/*
array1=[1,2,4,2] array2=[1,4,4,16]
conditions:-
map1={1:1,2:2,4:1}
map1={1:1,4:2,16:1}

--take keys from map1 and check its square in map2
--also take key from map1 and check the key is present in map2 with key*key condition 
--check both conditions for false if false return false


*/
function isSquareNew(array1, array2) {
    let map1 = {};
    let map2 = {};
    for (item of array1) {
        map1[item] = (map1[item] || 0) + 1; //how this is working see console.log(map1)--output
        /*
        console.log(map1);//output===> 
        { '1': 1 } pehli bar loop chala 0+1=1
        { '1': 1, '2': 1 } dusri bar 2 aaya 0+1
        { '1': 1, '2': 1, '4': 1 } teesri bar 4 aaya 0+1
        { '1': 1, '2': 2, '4': 1 }  ab sare elements aa gae ja dobara 2 aya hai to us ki pehli bar value 1 thee 1+1=2 ho gaee
        */
    }
    for (item2 of array2) {
        map2[item2] = (map2[item2] || 0) + 1;
        // console.log(map2);
    }
    //take key from map1
    //we use for in not of we use for of only for array but for key we use for in
    for (let key in map1) {
        // console.log(key);

        if (!map2[key * key]) {
            //object keys compare in terms of Square
            return false;
        }

        //and value also must be same
        //comparing value
        if (map1[key] !== map2[key * key]) {
            return false;
        }
    }

    // console.log(map1, map2);
    return true;
}
const result2 = isSquareNew([1, 2, 4, 2], [1, 4, 4, 16]);
console.log("result2", result2);

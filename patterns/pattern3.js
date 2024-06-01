/* 
1 2 3 4 
1 2 3 4 
1 2 3 4 
*/
/*
4 3 2 1
4 3 2 1
4 3 2 1
4 3 2 1
*/

// const makePattern = (n) => {
//     let pattern = "";
//     let i = 1;
//     while (i <= n) {
//         let j = 1;
//         while (j <= n) {
//             pattern = pattern + " " + j;
//             j = j + 1;
//         }
//         pattern = pattern + "\n";
//         i = i + 1;
//     }
//     return pattern;
// };
// console.log(makePattern(5));

//reverse
const makePattern = (n) => {
    let pattern = "";
    let i = 1;
    while (i <= n) {
        let j = n;
        while (j >= 1) {
            pattern = pattern + " " + j;
            j = j - 1;
        }
        pattern = pattern + "\n";
        i = i + 1;
    }
    return pattern;
};
console.log(makePattern(5));

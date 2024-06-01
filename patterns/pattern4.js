/* 
1 2 3 
4 5 6
7 8 9

*/

const makePattern = (n) => {
    let pattern = "";
    let i = 1;
    let count = 1;
    while (i <= n) {
        let j = 1;

        while (j <= n) {
            pattern = pattern + " " + count;
            count = count + 1;
            j = j + 1;
        }
        pattern = pattern + "\n";
        i = i + 1;
    }
    return pattern;
};
console.log(makePattern(5));

/* 
1 1 1
2 2 2
3 3 3
*/
/*
const makePattern = (n) => {
    let pattern = "";
    let i = 1;
    while (i <= n) {
        let j = 1;
        while (j <= n) {
            pattern += i;
            j++;
        }
        pattern += "\n";
        i++;
    }
    return pattern;
};
console.log(makePattern(3));

//in for loop

*/

const makePatternWithFor = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            pattern += i;
        }
        pattern += "\n";
    }
    return pattern;
};
console.log(makePatternWithFor(3));

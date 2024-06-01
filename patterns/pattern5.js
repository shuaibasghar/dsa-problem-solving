/*
 *
 * *
 * * *
 * * * *
 */

const makePattern = (n) => {
    let pattern = "";
    let i = 1;
    while (i <= n) {
        let j = 1;

        while (j <= i) {
            pattern = pattern + " " + "*";
            j = j + 1;
        }
        pattern = pattern + "\n";
        i = i + 1;
    }
    return pattern;
};
console.log(makePattern(5));

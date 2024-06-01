/**
 * * *
 * * *
 * * *
 */

const makePattern = (n) => {
    let pattern = "";
    let i = 1;
    while (i <= n) {
        let j = 1;
        while (j <= n) {
            // process.stdout.write("*");
            pattern += "*";
            j++;
        }
        // process.stdout.write("\n");
        pattern += "\n";
        i++;
    }
    return pattern;
};
console.log(makePattern(3));

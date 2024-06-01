//check sum zero
//[-5,-4,-3,-2,0,2,4,6,8] input
function getSumPairZero(array) {
    for (let number = 0; number < array.length; number++) {
        console.log(array[number]);
        for (let j = 1; j < array.length; j++) {
            if (array[number] + array[j] === 0) {
                return [array[number], array[j]];
            }
        }
    }
}
console.log(getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

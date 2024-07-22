'use strict';

function oneArray(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr = newArr.concat(array[i]);
    }
    return newArr;
}
const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let result;

// result = arr.flat(3);
// console.log(result);

// Without flat :
result = oneArray(arr);
console.log(result);
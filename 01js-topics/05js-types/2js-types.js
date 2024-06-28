'use strict';


// *** JS Types ***


// 36.
// const array = [2, 4, 5, 1, 7];

// const result1 = array.push(10);
// console.log(result1);
// console.log(array);

// const result2 = array.unshift(20);
// console.log(result2);
// console.log(array);

// const result3 = array.pop();
// console.log(result3);
// console.log(array);

// const result4 = array.shift();
// console.log(result4);
// console.log(array);

// 37.
// const obj = {
//     name: 'John',
//     age: 25
// };
// const array = [obj, 6, 9, 'apple', 'Mango', 77];
// console.log(array);
// const result1 = array.slice(3, 5);
// console.log(result1);
// result1.pop();
// console.log(result1);
// console.log(array);

// console.log(array[0]);
// const newArr = array.slice();
// console.log(newArr);
// newArr[0].name = 'Selena';
// console.log(newArr[0]);
// console.log(array[0]);

// 38.
// const array = [5, 6, { a: 'Apple', b: 'Mango' }, 77, 90];

// const shallowArr = [...array];
// shallowArr[2].a = 'banana';
// console.log(array[2]);
// console.log(shallowArr[2]);

// const deepArr = JSON.parse(JSON.stringify(array));
// deepArr[2].b = 88;
// console.log(array[2]);
// console.log(deepArr[2]);

// only works when 'lodash' package is installed.
// import _ from 'lodash';
// const _ = require('lodash');
// const array = [5, 6, { a: 'Apple', b: 'Mango' }, 77, 90];
// const deepArr2 = _.cloneDeep(array);
// console.log(deepArr2);

// 39. 
// const array = ['item1', 'item2', 'item3'];
// console.log(array);

// const result1 = array.splice(2, 1, 'item10');
// console.log(result1);
// console.log(array);

// const result2 = array.splice(2, 0, 'item6');
// console.log(result2);
// console.log(array);

// const result3 = array.splice();
// console.log(result3);
// console.log(array);

// const result4 = array.splice(1);
// console.log(result4);
// console.log(array);

// const result4 = array.splice(1, 3, 'item7', 'item8', 9, 88);
// console.log(result4);
// console.log(array);

// const result5 = array.splice(5, 3, 'item7', 'item8', 9, 88);
// console.log(result5);
// console.log(array);

// const result6 = array.splice(-1, 2, 'item7', 'item8', 9, 88);
// console.log(result6);
// console.log(array);

// const result7 = array.splice(1, 5, 'item7', 'item8', 9, 88);
// console.log(result7);
// console.log(array);

// const result8 = array.splice(1, -2, 'item7', 'item8');
// console.log(result8);
// console.log(array);

// 40.
// const students = [['Selena', 25], ['John', 34], ['Tom', 45]];

// for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].length; j++) {
//         console.log(students[i][j]);
//     }
// }

// students.forEach(student => {
//     student.forEach(data => {
//         console.log(data);
//     })
// })

// for (let i of students) {
//     for (let j of i) {
//         console.log(j);
//     }
// }

// 41.
// const a = [1, 2];
// const b = [3, 4];
// const c = a.concat(b);
// console.log(c);

// const students = [['Selena', 25], ['John', 34], ['Tom', 45]];
// let newAr = [];
// for (let i = 0; i < students.length; i++) {
//     newAr = newAr.concat(students[i]);
// }
// console.log(newAr);

// 42.
// const string1 = 'Hello';
// const string2 = 'JavaScript';
// let result;

// result = string1.toLowerCase()
// console.log(result);

// result = string1.concat(' ', string2);
// console.log(result);

// console.log(string2.length);
// console.log(string1.includes('o'));

// result = string2.split();
// console.log(result);

// result = string1.slice(2, 4);
// console.log(result);

// string1[2] = 'Z';
// console.log(string1);
// TypeError: Cannot assign to read only property '2' of string 'Hello'

// 43.
// const object = {
//     name: 'John',
//     age: 26,
//     city: 'Delhi'
// };
// for (let i in object) {
//     console.log(`${i} - ${object[i]}`);
// }

// const array = [2, 4, 6];
// for (let i in array) {
//     console.log(`${i} - ${array[i]}`);
// }

// const string = 'apple';
// for (let i in string) {
//     console.log(`${i} - ${string[i]}`);
// }

// 44.
// console.log(true - 'apple');
// console.log(5 * 'mango');
// console.log(typeof NaN);
// let result;
// result = isNaN(5 - 'a');
// console.log(result);
// result = isNaN(8);
// console.log(result);
// result = 2 / 0;
// console.log(result);
// result = -2 / 0;
// console.log(result);


// 45.
// const num1 = 6e7;
// console.log(num1);
// const num2 = 4e-6;
// console.log(num2);

// const num3 = 0xff;
// console.log(num3);
// const num4 = 0xabcdef;
// console.log(num4);
// const num5 = 0x00;
// console.log(num5);

// const num1 = 9;
// console.log(Number.isInteger(num1));
// const num2 = 98.74554;
// console.log(num2.toFixed(2));
// const num3 = 78645;
// console.log(num3.toFixed(3));
// const add = 0.1 + 0.2 + 0.4;
// console.log(add);
// console.log(add.toFixed(2));
// const add2 = (0.1 * 10 + 0.2 * 10 + 0.4 * 10) / 10;
// console.log(add2);

// const a = true;
// const b = false;
// const c = 'apple';
// const d = '88';
// const e = new Number(66);
// const f = 76;
// console.log(Number(a));
// console.log(Number(b));
// console.log(Number(c));
// console.log(Number(d));
// console.log(typeof e);
// console.log(typeof f);


// *** End ***


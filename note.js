'use strict';

// *** JavaScript Introduction ***


// # var is Function scope :
// 1.
// var userName = 'john';
// (function data() {
//     var userName = 'selena';
//     console.log(userName);
// }());
// console.log(userName);

// 2.
// var age = 25;
// if (true) {
//     var age = 6;
//     console.log(age);
// }
// console.log(age);

// # let and const are block scope :
// 3.
// const userName = 'john';
// function data() {
//     const userName = 'selena';
//     console.log(userName);
// };
// console.log(userName);
// data();

// 4.
// let userName = 'john';
// (function data() {
//     let userName = 'selena';
//     console.log(userName);
// }());
// console.log(userName);

// 5. 
// let age = 25;
// if (true) {
//     let age = 6;
//     console.log(age);
// }
// console.log(age);

// 6.
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// 7.
// const a = 5;
// const b = new Number(5);
// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(a == b);
// console.log(a === b);
// console.log(a + b);
// const c = Number(5);
// console.log(c, typeof c);
// console.log(a === c);

// 8.
// Boolean(expression) will simply convert the expression into a boolean primitive value, while new Boolean(expression) will create a wrapper object around the converted boolean value.
// const a = true;
// const b = Boolean(true);
// const c = new Boolean(true);
// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(a == b);
// console.log(a == c);
// console.log(a === c);

// 9. 
// console.log(true == 1);
// console.log(true === 1);
// console.log(true == 5);

// console.log(false == 0);
// console.log(false === 0);
// console.log(false == 5);

// 10.
// const a = 5;
// const b = 5;
// const c = 5;
// console.log(a == b == c);
// console.log(a === b === c);

// 11.
// const a = Symbol(5);
// const b = Symbol(5);
// console.log(a);
// console.log(typeof a);
// console.log(a == b);
// console.log(a === b);
// console.log(a.description == b.description);
// console.log(a.description === b.description);
// const n1 = Symbol('j');
// const n2 = Symbol('j');
// console.log(n1 == n2);
// console.log(n1 === n2);
// console.log(n1.description == n2.description);
// console.log(n1.description === n2.description);

// 12.
// let id = Symbol('id');
// let person = {
//     userName: 'John',
//     [id]: 20
// }
// console.log(person);

// 13. var++ vs ++var :
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log('Break');
// for (let j = 0; j < 3; ++j) {
//     console.log(j);
// }
// let a = 5;
// a++;
// console.log(a);
// let x = 5, y = 5;
// console.log(x++);
// console.log(++y);

// 14.
// let a = (1, 2, 3);
// console.log(a);
// const b = void (10);
// console.log(b);

// 15. 
// let result;
// result = 2 + '3';
// console.log(result, ':', typeof result);
// result = '2' + 3;
// console.log(result, ':', typeof result);
// result = '2' + true;
// console.log(result, ':', typeof result);
// result = '2' + null;
// console.log(result, ':', typeof result);
// result = '2' + undefined;
// console.log(result, ':', typeof result);
// result = '2' + void (0);
// console.log(result, ':', typeof result);
// result = 5 + 3 + '2'
// console.log(result);
// result = 5 + '3' + 2
// console.log(result);
// result = '5' + 3 + 2
// console.log(result);

// 16. 
// let result;
// result = Number('5');
// console.log(result, ':', typeof result);
// result = +'5';
// console.log(result, ':', typeof result);
// result = 2 + + '2';
// console.log(result, ':', typeof result);
// result = Boolean(6);
// console.log(result, ':', typeof result);
// result = Boolean(0);
// console.log(result, ':', typeof result);
// result = Boolean(undefined);
// console.log(result, ':', typeof result);
// result = String(6);
// console.log(result, ':', typeof result);
// result = Object(6);
// console.log(result, ':', typeof result);
// result = Array(6);
// console.log(result, ':', typeof result);
// console.log(result.length, Array.isArray(result));
// result = Symbol(5);
// console.log(result, ':', typeof result);

// 17. 
// let result;
// result = null(5);
// console.log(result, ':', typeof result);
// result = undefined(5);
// console.log(result, ':', typeof result);
// Error : null / undefined is not a function.
// result = Set(5);
// console.log(result, ':', typeof result);
// Error : Constructor Set requires 'new'.
// result = Map(5);
// console.log(result, ':', typeof result);
// Error : Constructor Map requires 'new'.


// 18.
// let result;
// result = 10 + '5';
// console.log(result, ':', typeof result);
// result = 10 - '5';
// console.log(result, ':', typeof result);
// result = 10 * '5';
// console.log(result, ':', typeof result);
// result = 10 / '5';
// console.log(result, ':', typeof result);
// result = 10 % '5';
// console.log(result, ':', typeof result);

// 19. 
// let result;
// result = Boolean('0');
// console.log(result);
// result = Boolean(0);
// console.log(result);
// result = Boolean(' ');
// console.log(result);
// result = Boolean('');
// console.log(result);
// result = 'Apple' - 7;
// console.log(result);
// result = 7 - 'Apple';
// console.log(result);

// *** JavaScript Control Flow ***
// 20. 
// let age = 18;
// if (age >= 18) console.log('You can vote');
// else console.log('You can not vote');
// const result = (age >= 18) ? 'You can vote' : 'You can not vote.';
// console.log(result);

// 21. 
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(`i = ${i}, j = ${j} `);
//     }
// }
// let i = 0;
// for (; i < 3;) {
//     console.log(i);
//     i++
// }

// 22.
// let i = 5;
// while (i > 0) {
//     console.log(i);
//     i--
// }
// let j = 5;
// do {
//     console.log(j);
//     j--;
// } while (j > 0);

// 23.
// for (let i = 0; i <= 3; i++) {
//     for (let j = 0; j <= 3; j++) {
//         if (j == 2) {
//             break;
//         }
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }
// console.log('2nd Loop');
// outerLoop: for (let i = 0; i <= 3; i++) {
//     innerLoop: for (let j = 0; j <= 3; j++) {
//         if (j == 2) {
//             break outerLoop;
//         }
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }

// 24. 
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// console.log('While Loop');
// let num = 0;
// while (num <= 10) {
//     if (num % 2 === 0) {
//         ++num;
//         continue;
//     }
//     console.log(num);
//     ++num;
// }
// console.log('Continue in Nested Loops');
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j <= 3; j++) {
//         if (j == 2) {
//             continue;
//         }
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }
// console.log('2nd Loop');
// outerLoop: for (let i = 0; i < 2; i++) {
//     innerLoop: for (let j = 0; j <= 3; j++) {
//         if (j == 2) {
//             continue outerLoop;
//         }
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }

// 25.
// let trafficLight = 'yellow';
// let message = '';
// switch (trafficLight) {
//     case 'red':
//         message = 'Stop immediately.'
//         break;
//     case 'yellow':
//         message = 'Prewpare to stop.';
//         break;
//     case 'green':
//         message = 'Continue driving.'
//         break;
//     default:
//         message = 'Invalid traffic light color.'
// }
// console.log(message);

//  *** Functions ***

// 26. 
// function dsiplayScopes() {
//     let message = 'Function Scope Variable';
//     if (true) {
//         let message = 'Block Scope Variable';
//         console.log(`Inner Scope : ${message}`);
//     }
//     console.log(`Ouster Scope : ${message}`);
// }
// dsiplayScopes();

// 27.
// let a = 10, b = 20;
// console.log('The value of a = ' + a, 'and the value of b = ' + b);
// console.log('The value of a = ', a, 'and the value of b = ', b);
// console.log(`The value of a = ${a} and the value of b = ${b}`);
// console.log(a, typeof a);

// 28. 
// test(2, 5);
// function test(a, b) {
//     console.log(a + b);
// }
// data();
// const data = function () {
//     console.log('Data');
// }
// data();
// const data2 = (function () {
//     console.log('Data2');
// }());
// (function () {
//     console.log('data3');
// }());

// 29.
// function factorial(num) {
//     if (num > 1) return num * factorial(num - 1);
//     else return 1;
// }
// console.log(factorial(4));

//  *** Objects ***


// 30.
// const student = {
//     name: 'John',
//     age: 25,
//     greet: function () {
//         return `Hello from ${this.name}, I lives in ${this.city}`;
//     },
//     marks: {
//         science: 98,
//         maths: 87
//     },
//     city: 'delhi'
// }
// console.log(student);
// console.log(student.name);
// console.log(student['city']);
// console.log(student.marks.science);
// console.log(student['marks']['maths']);
// student.marks.maths = 76;
// console.log(student.marks);
// console.log(student.greet());
// delete student.city;
// console.log(student);

// 31. 
// let result;
// result = new String('Apple');
// console.log(result, typeof result);
// result = new Number(5);
// console.log(result, typeof result);
// result = new Boolean(9);
// console.log(result, typeof result);
// result = new Object();
// console.log(result, typeof result);
// result = new Object({ id: 1, name: 'John' });
// console.log(result, typeof result);
// result = new Array();
// console.log(result, typeof result);
// result = new Array(2, 3, 4);
// console.log(result, typeof result);


// 32. 
// const person = {
//     id: 1,
//     name: 'John'
// }
// console.log(person.name);
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const person1 = new Person('Selena', 34);
// console.log(person1);
// const person2 = new Person('John', 23);
// console.log(person2);

// 33. 
// const person = {
//     // data property
//     name: 'John',
//     age: 23,
//     // accessor property(getter)
//     get getName() {
//         return this.name;
//     },
//     //accessor property(setter)
//     set changeName(newName) {
//         this.name = newName;
//     }
// }
// console.log(person.name);
// console.log(person.getName);
// person.changeName = 'Selena'
// console.log(person.name);

// 34.
// const fruits = {
//     id: 1,
//     name: 'Apple',
//     city: 'delhi'
// }

// Object.defineProperty(fruits, 'getName', {
//     get: function () {
//         return this.name;
//     }
// });
// console.log(fruits.getName);

// Object.defineProperty(fruits, 'changeName', {
//     set: function (newName) {
//         this.name = newName;
//     }
// });
// fruits.changeName = 'Mango';
// console.log(fruits.name);

// 35.
// function Car(name, model) {
//     this.name = name;
//     this.model = model;
//     this.city = 'New York';
// }

// const c1 = new Car('BMW', 2024);
// const c2 = new Car('Rover', 2020);

// Car.prototype.color = 'Red';

// console.log(`${c1.name} : ${c1.model} : ${c1.color}`);

// Car.prototype.drive = function () {
//     console.log(`Driving ${this.name}`);
// }
// c1.drive();
// c2.drive();

// Car.prototype.city = 'Delhi';
// console.log(`Name : ${c1.name} , City : ${c1.city}`);

// Car.prototype.color = 'Blue';
// console.log(`Name : ${c2.name} , Color : ${c2.color}`);

// Car.prototype = { color: 'Yellow' };
// console.log(`Name : ${c1.name} , Color : ${c1.color}`);
// const c3 = new Car('Audi', 2015);
// console.log(`Name : ${c3.name} , Color : ${c3.color}`);


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


// *** Exception and Modules ***


// 46.
// setTimeout(() => {
//     try {
//         let result = 5 / a;
//         console.log(result);
//     }
//     catch (error) {
//         console.log(error);
//     }
//     finally {
//         console.log('This block finished');
//     }
// })

// function processInput(input) {
//     try {
//         if (input === '') {
//             throw new Error('Input can not be empty.')
//         }
//         let number = parseInt(input);
//         if (isNaN(number)) {
//             throw new Error('Input must be a number.')
//         }

//         let result = number ** 3;
//         console.log(result);
//     }
//     catch (error) {
//         console.log('Error : ', error?.message);
//     }
//     finally {
//         console.log('Cleaning up the resources');
//     }
// }
// processInput('');
// processInput('apple');
// processInput(5);
// processInput();

// 47.
// const age = 20;
// const result = (age < 18) ?
//     () => console.log('Child') :
//     () => console.log('Adult');
// result();

// 48.
// function add(x = 1, y = x + 2) {
//     console.log(x + y);
// }
// add(5, 4);
// add(5);
// add();

// 49.
// function display(msg) {
//     console.log(msg);
// }
// display`Hewllo JavaScript`;
// display('Hello JavaScript');

// 50.
// const array = [1, 2, 3];
// console.log(array);
// console.log(array[0], array[1], array[2]);
// console.log(...array);
// const array2 = [...array];
// console.log(Array.isArray(array2));

// const array1 = [1, 2, 3];
// const array2 = array1;
// array2[1] = 10;
// console.log(array1);
// console.log(array2);

// const array1 = [1, 2, 3];
// const array2 = [...array1];
// array2[1] = 10;
// console.log(array1);
// console.log(array2);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [10, 11, array1, 12, 13, array2];
// console.log(array3);
// const array4 = [10, 11, ...array1, 12, 13, ...array2];
// console.log(array4);

// const array1 = [1, 2, [3, 4, 5], 6, 7, [8, 9], 10];
// console.log(array1);
// let array2 = [];
// array2 = array2.concat(...array1);
// console.log(array2);

// 51.
// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const obj3 = { obj1, obj2 };
// console.log(obj3);
// const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// 52.
// function test(...args) {
//     console.log(args);
//     let sum = 0;
//     for (let i of args) {
//         sum += i;
//     }
//     console.log(sum);
// }
// test(5);
// test(1, 2, 3);

// function add(a, b) {
//     console.log(a + b);
// }
// const num = [1, 2, 3];
// add(...num)

// 53. Map :
// const map1 = new Map();
// map1.set('data1', { id: 1, name: 'John' });
// map1.set('data2', { id: 2, name: 'Selena' });
// console.log(map1);
// console.log(typeof map1);

// let result;
// result = map1.get('data1');
// console.log(result);

// result = map1.has('data2');
// console.log(result);

// result = map1.delete('data3');
// console.log(result);

// result = map1.delete('data2');
// console.log(result);
// console.log(map1);

// map1.clear();
// console.log(map1);

// result = map1.size;
// console.log(result);

// for (let [key, value] of map1) {
//     console.log(key, '-', value);
// }

// map1.forEach((value, key) => {
//     console.log(key, '-', value);
// });

// for (let key of map1.keys()) {
//     console.log(key);
// }

// for (let values of map1.values()) {
//     console.log(values);
// }

// for (let elem of map1.entries()) {
//     console.log(elem[0], '-', elem[1]);
// }

// 54. Map : Object Key
// const map1 = new Map();
// let obj = { id: 1, name: 'key' };
// map1.set(obj, { city: 'Delhi', grade: 'A+' });
// console.log(map1);

// 55. Weak Map :
// const weakMap1 = new WeakMap();

// weakMap1.set('data1', { name: 'Tom', city: 'New York' });
// console.log(weakMap1);

// TypeError: Invalid value used as weak map key
// const obj1 = {};
// const obj2 = {};
// weakMap1.set(obj1, { name: 'Tom', city: 'New York' });
// console.log(weakMap1);
// weakMap1.set(obj2, 'John');
// console.log(weakMap1);

// let result;
// result = weakMap1.get(obj1);
// console.log(result);

// result = weakMap1.has(obj2);
// console.log(result);

// result = weakMap1.delete(obj1);
// console.log(weakMap1);

// 56. Set :
// const set1 = new Set([1, 2, 3, 3, 4]);
// console.log(set1);

// const array = [1, 2, 2, 3];
// const set2 = new Set(array);
// console.log(set2);

// let result;
// result = set1.values();
// console.log(result);

// result = set1.has(5);
// console.log(result);

// set1.add(6);
// console.log(set1);

// set1.delete(3);
// console.log(set1);

// set1.clear();
// console.log(set1);

// for (let i of set1) {
//     console.log(i);
// }

// set1.forEach(set => {
//     console.log(set);
// })

// 57.
// const weakSet1 = new WeakSet();
// const obj = { id: 1 };

// weakSet1.add(obj);
// console.log(weakSet1);

// let result;
// result = weakSet1.has(obj);
// console.log(result);

// weakSet1.delete(obj);
// console.log(weakSet1);

// 58. Mathematical Set Operations :
// uniom : // contain elements of both sets :
// function union(setA, setB) {
//     let unionSet = new Set(setA);
//     for (let i of setB) {
//         unionSet.add(i);
//     }
//     return unionSet;
// }
// const set1 = new Set(['apple', 'banana', 'mango']);
// const set2 = new Set(['apple', 'grapes', 'mango']);
// const result = union(set1, set2);
// console.log(result);

// intersection : elements of set a that are also in set b.
// function intersection(setA, setB) {
//     let intersectionSet = new Set();
//     for (let i of setB) {
//         if (setA.has(i)) {
//             intersectionSet.add(i);
//         }
//     }
//     return intersectionSet;
// }
// const set1 = new Set(['apple', 'banana', 'mango']);
// const set2 = new Set(['apple', 'grapes', 'mango']);
// const result = intersection(set1, set2);
// console.log(result);

// Set Difference Operation : // elements of set a that are not in set b :
// 1st way :
// function difference(setA, setB) {
//     let differenceSet = new Set();
//     for (let i of setA) {
//         if (!setB.has(i)) {
//             differenceSet.add(i);
//         }
//     }
//     return differenceSet;
// }
// const set1 = new Set(['apple', 'banana', 'mango']);
// const set2 = new Set(['apple', 'grapes', 'mango']);
// const result = difference(set1, set2);
// console.log(result);

// 2nd way :
// function difference(setA, setB) {
//     let differenceSet = new Set(setA);
//     for (let i of setB) {
//         differenceSet.delete(i);
//     }
//     return differenceSet;
// }
// const set1 = new Set(['apple', 'banana', 'mango']);
// const set2 = new Set(['apple', 'grapes', 'mango']);
// const result = difference(set1, set2);
// console.log(result);

//  Set Subset Operation : // true if all elements of set b is in set a :
// function subset(setA, setB) {
//     for (let i of setB) {
//         if (!setA.has(i)) {
//             return false;
//         }
//     }
//     return true;
// }
// const set1 = new Set(['apple', 'banana', 'mango']);
// const set2 = new Set(['apple', 'grapes', 'mango']);
// const result = subset(set1, set2);
// console.log(result);

// 59. Unique Array Elements :
// const array = [1, 2, 3, 2, 2, 4, 1];

// const uniqueArray1 = [... new Set(array)];
// console.log(uniqueArray1);

// const uniqueArray2 = array.filter((item, index) =>
//     array.indexOf(item) === index
// )
// console.log(uniqueArray2);

// let uniqueArray3 = [];
// for (let i = 0; i < array.length; i++) {
//     if (!uniqueArray3.includes(array[i])) {
//         uniqueArray3.push(array[i])
//     }
// }
// console.log(uniqueArray3);

// 60. 
// const obj = {
//     id: 1,
//     userName: 'John',
//     age: 26,
//     city: 'New York',
//     hobbies: {
//         read: true,
//         game: false
//     }
// };

// const { userName, age } = obj;
// console.log(userName, age);

// const { userName: objName } = obj;
// console.log(objName);

// const { city = 'Delhi' } = obj;
// console.log(city);

// const { age, ...rest } = obj;
// console.log(rest);

// const { userName, hobbies: { read, game } } = obj;
// console.log(userName, read, game);

// 61.
// const array = ['apple', 'banana', 'orange'];

// const [, fruit] = array;
// console.log(fruit);

// const [, x, ...y] = array;
// console.log(y);

// let x = 5, y = 8;
// [x, y] = [y, x]
// console.log(`After swapping : x = ${x}, y = ${y}`);

// const array = [1, [3, 4]];
// const [x, [y, z]] = array;
// console.log(x, y, z);

// 62.

'use strict';


// *** JS - ES6 ***

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
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello from ${this.name} and age is ${this.age}`);
//     }
// }

// class Student extends Person {

// }
// const person1 = new Person('John', 32);
// person1.greet();

// const student1 = new Student('Selena', 23);
// student1.greet();

// 63.
// class Car {
//     constructor(model) {
//         this.model = model;
//         this.name = 'BMW';
//     }
//     info() {
//         console.log(`Car name is ${this.name} and Car model is ${this.model}`);
//     }
// }
// class Bike extends Car {
//     constructor(model) {
//         super(model);
//         this.name = 'Bajaj';
//     }
//     info() {
//         console.log(`Car name is ${this.name} and Car model is ${this.model}`);
//     }
// }
// const car1 = new Car(2024);
// car1.info();

// const bike1 = new Bike(2020);
// bike1.info();

// 64.
// const string = 'apple';
// for (let i of string) {
//     console.log(i);
// }

// function* generatorFunc() {
//     yield 10;
//     yield 20;
//     yield 30;
// }
// const obj = generatorFunc();
// for (let i of obj) {
//     console.log(i);
// }

// 65. Proxy for validation :
// const student = {
//     name: 'John',
//     age: 26
// };

// const handler = {
//     get(obj, prop) {
//         if (prop == 'name') {
//             return obj[prop];
//         } else {
//             return 'Not Allowed';
//         }
//     }
// }

// const proxy = new Proxy(student, handler);
// console.log(proxy.name);
// console.log(proxy.age);

// 66 Proxy for Read Only View of an Object :
// const student = {
//     name: 'Selena',
//     age: 26
// };

// const handler = {
//     set: function (obj, prop, value) {
//         if (obj[prop]) {
//             console.log('Read Only');
//         }
//     }
// }

// const proxy = new Proxy(student, handler);
// proxy.name = 'John';

// 67. Proxy for Side Effects :
// function test() {
//     console.log('Executes this function.');
// }

// const handler = {
//     set: function (target, prop, value) {
//         if (prop === 'name' && value === 'Selena') {
//             test();
//         } else {
//             console.log('Can only access name property');
//         }
//     }
// }

// const proxy = new Proxy({}, handler);
// proxy.name = 'Selena';
// proxy.age = 25;


//  *** End ***


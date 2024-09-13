'use strict';

// 75.
// const jsonData = {
//     "name": "john",
//     "age": 25,
//     "hobby": {
//         "reading": true,
//         "gaming": false,
//         "sports": "football"
//     },
//     "class": ["Javascript", "React", "Node"]
// };

// console.log(jsonData);
// console.log(typeof jsonData);

// let result;

// result = jsonData.name;
// console.log(result);

// result = jsonData.hobby.gaming;
// console.log(result);

// result = jsonData.class[1];
// console.log(result);

// result = jsonData["age"];
// console.log(result);

// result = jsonData["hobby"]["reading"];
// console.log(result);

// result = jsonData["class"][2];
// console.log(result);

// const objData = JSON.parse(jsonData);
// console.log(objData);

// const realJson = JSON.stringify(jsonData);
// console.log(realJson);

// 76.
// const jsonData = '{ "name": "John", "age": 22 }';
// console.log(jsonData);
// const objData = JSON.parse(jsonData);
// console.log(objData);
// const newJsonData = JSON.stringify(objData);
// console.log(newJsonData);

// 77.
// let date;

// date = new Date();
// console.log(date);

// date = new Date(0);
// console.log(date);

// date = new Date('2019-09-15');
// console.log(date);

// date = new Date('2016');
// console.log(date);

// date = new Date('2012-06-18T03:45:00Z');
// console.log(date);

// date = new Date('05/02/2020');
// console.log(date);

// date = new Date('jul/02/2020');
// console.log(date);

// date = new Date('july/02/2020');
// console.log(date);

// date = new Date('18/may/2020');
// console.log(date);

// date = new Date('18/07/2020');
// console.log(date);
// Invalid Date

// date = new Date('12 feb 2018');
// console.log(date);

// date = new Date(2010, 2, 16, 11, 35, 10, 0);
// console.log(date);

// date = new Date(2010, 2, 16, 11, 35);
// console.log(date);

// 78.
// const timeInMilliseconds = Date.now();
// console.log(timeInMilliseconds);
// console.log(String(timeInMilliseconds).length);

// const date = new Date;
// console.log(date);

// const day = date.getDate();
// console.log(day);

// const year = date.getFullYear();
// console.log(year);

// const utcDate = date.getUTCDate();
// console.log(utcDate); 

// const ev = new Date('Feb 20, 2015');
// const ev = date;
// ev.setDate(11);
// console.log(ev.getDate());

// const d1 = date.toLocaleDateString();
// console.log(d1);

// const d2 = date.toDateString();
// console.log(d2);

// const d3 = date.toLocaleTimeString();
// console.log(d3);

// const d4 = date.toLocaleString();
// console.log(d4);

// const d5 = date.getMinutes();
// console.log(d5);

// const d6 = date.getUTCMonth();
// console.log(d6);

// const d7 = date.getMonth();
// console.log(d7);

// 79. Closures :
// function calculate(x) {
//     function add(y) {
//         return x + y;
//     }
//     return add;
// }

// const result1 = calculate(5);
// console.log(result1);
//  It returns add function definition.

// console.log(result1());
// NaN

// console.log(result1(6));

// const result2 = calculate(2);
// console.log(result2(4));

// Both result1 and result2 are closures.

// 80. Generally, closures are used for data privacy. 
// 1st way : without closure :
// let a = 0;
// function sum() {
//     function increaseSum() {
//         return a = a + 1;
//     }
//     return increaseSum;
// }
// const x = sum();
// console.log(x());
// console.log(x());
// console.log(x());
// a = a + 1;
// console.log(a);
// console.log(x());

// 2nd way with closure :
// let a = 0;
// function sum() {
//     let a = 0;
//     function increaseSum() {
//         return a = a + 1;
//     }
//     return increaseSum;
// }
// const x = sum();
// console.log(x());
// console.log(x());
// console.log(x());
// a = a + 1;
// console.log(a);
// console.log(x());

// 81. this example :
// A.this Inside Global Scope: :
// console.log(this);
// this.name = 'selena';
// console.log(this.name);

// B.this Inside Function: :
// function test() {
//     console.log(this);
// }
// test();

// (function greet() {
//     console.log(this);
// }());

// C.this Inside Constructor Function: :
// function Person() {
//     this.name = 'Selena';
//     console.log(this);
// }
// const person1 = new Person();
// console.log(person1.name);

// class Person {
//     constructor() {
//         this.name = 'Selena';
//         console.log(this);
//     }
// }
// const person1 = new Person();
// console.log(person1.name);

// D.this Inside Object Method: :
// const person = {
//     name: 'John',
//     age: 25,
//     fun: function greet() {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.fun();

// const person = {
//     name: 'John',
//     age: 25,
//     greet() {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.greet();

// E.this Inside Inner Function : 
// const person = {
//     name: 'John',
//     age: 25,
//     greet() {
//         function innerFun() {
//             console.log(this);
//             console.log(this.age);
//         }
//         innerFun();
//     }
// }
// person.greet();

// function outer() {
//     const x = 4;
//     function inner() {
//         console.log(this);
//         console.log(this.x);
//     }
//     inner();
// }
// const result = outer();
// console.log(result);

// F.this Inside Arrow Function: : 
// const greet = () => {
//     console.log(this);
// }
// greet();

// const person = {
//     name: 'John',
//     age: 25,
//     fun: () => {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.fun();

// const person = {
//     name: 'John',
//     age: 25,
//     greet() {
//         const innerFun = () => {
//             console.log(this);
//             console.log(this.age);
//         }
//         innerFun();
//     }
// }
// person.greet();

// G.this Inside Function with Strict Mode: 
// this.name = 'john';
// function test() {
//     console.log(this);
// }
// test();

// 'use strict';
// this.name = 'john';
// function test() {
//     console.log(this);
// }
// test();

// 'use strict';
// this.name = 'john';
// function test() {
//     console.log(this.name);
// }
// test.call(this); 

// 82. Strict Mode :
// a = 'hello';
// console.log(a);
// ReferenceError: a is not defined

// person = { name: 'john', age: 25 };
// console.log(person);
// delete person;
// 'delete' cannot be called on an identifier in strict mode.

// function hello(p1, p1) {
//     console.log(p1 + p1);
// }
// hello(2, 4);
// without strict mode, result = 8;
// with strict mode, Duplicate parameter name not allowed in this context.

// const obj = {};
// Object.defineProperty(obj, 'x', { value: 30, writable: false });
// console.log(obj);
// console.log(obj.x);
// obj.x = 18;
// console.log(obj.x);

// const obj = { get x() { return 10; } };
// console.log(obj);
// console.log(obj.x);
// obj.x = 15;
// console.log(obj.x);

// const obj = { name: 'john', age: 20 };
// Object.preventExtensions(obj);
// console.log(obj);
// obj.city = 'Delhi';
// console.log(obj);

// const a = 010;
// const b = 0o10;
// console.log(a);
// console.log(b);
// Octal literals are not allowed.Use the syntax '0o10'.

// const arguments = 7;
// console.log(arguments);
// const eval = 10;
// console.log(eval);
//  Unexpected eval or arguments in strict mode

// SyntaxError: Unexpected strict mode reserved word :
// const implements = 1;
// console.log(implements);

// const interface = 2;
// console.log(interface);

// var let = 3;
// console.log(let);

// const package = 4;
// console.log(package);

// const private = 5;
// console.log(private);

// const protected = 6;
// console.log(protected);

// const public = 7;
// console.log(public);

// const static = 8;
// console.log(static);

// const yield = 9;
// console.log(yield);

// 83.
// const array = [1, 2, 3];
// const arrayIterator = array[Symbol.iterator]();
// console.log(arrayIterator);
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());

// const string = 'hello';
// const stringIterator = string[Symbol.iterator]();
// console.log(stringIterator);
// console.log(stringIterator.next());
// console.log(stringIterator.next());
// console.log(stringIterator.next());
// console.log(stringIterator.next());
// console.log(stringIterator.next());
// console.log(stringIterator.next());

// const num = [5, 6, 7];

// for (let i of num[Symbol.iterator]()) {
//     console.log(i);
// }

// for (let i of num) {
//     console.log(i);
// }

// 84.
// function displayElements(array) {
//     let n = 0;
//     return {
//         next() {
//             if (n < array.length) {
//                 return {
//                     value: array[n++],
//                     done: false
//                 }
//             }
//             return {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }
// const arr = ['r', 'e', 'a', 'c', 't'];
// const arrayIterator = displayElements(arr);
// console.log(arrayIterator);
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());

// 85. iterable object :
// const iterableObj = {
//     [Symbol.iterator]() {
//         let step = 0;
//         return {
//             next() {
//                 step++;
//                 if (step === 1) {
//                     return { value: '1', done: false }
//                 }
//                 else if (step === 2) {
//                     return { value: '2', done: false }
//                 }
//                 else if (step === 3) {
//                     return { value: '3', done: false }
//                 }
//                 return { value: '', done: true }
//             }
//         }
//     }
// }
// for (const i of iterableObj) {
//     console.log(i);
// }

// 86. Generators :
// function* generatorFun() {
//     console.log(1);
//     yield 100;

//     console.log(2);
//     yield 200;

//     const x = yield 'Hello';

//     console.log(x);
//     console.log(3);

//     yield 400;
//     console.log(4);
// }
// const generator = generatorFun();

// console.log(generator);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next('apple'));
// console.log(generator.next());

// for (let i of generator) {
//     console.log(i);
// }

// 87.
// function* generatorFun() {
//     yield 10;
//     yield 20;
//     yield 30;
//     return 40;
//     yield 50;
// }
// const generator = generatorFun();

// console.log(generator);

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// console.log(generator.throw(new Error('Error Occured!')));

// 88.
// function match(string) {
//     const regex = /^a...s$/;
//     const result = regex.test(string);
//     if (result) {
//         console.log('Match');
//     }
//     else {
//         console.log('No Match');
//     }
// }
// const str1 = 'alias';
// match(str1);
// const str2 = 'Alias';
// match(str2);
// const str3 = 'apps';
// match(str3);

// 89.
// const regex = /\d/;
// const result1 = regex.test('java1');
// console.log(result1);
// const result2 = regex.test('React');
// console.log(result2);

// const string = 'find me';
// const pattern = /me/;
// const result1 = string.search(pattern);
// console.log(result1);
// const result2 = string.replace(pattern, 'found you');
// console.log(result2);

// 90.
// const string = 'Hello hello hello';
// const result1 = string.replace(/hello/, 'world');
// console.log(result1);
// const result2 = string.replace(/hello/g, 'world');
// console.log(result2);
// const result3 = string.replace(/hello/i, 'world');
// console.log(result3);
// const result4 = string.replace(/hello/gi, 'world');
// console.log(result4);

// 91. JavaScript Bitwise Operators :
// 32 Bit Integer Range : 
// let result;
// result = -(2 ** 31);
// console.log(result);
// result = 2 ** 31 - 1;
// console.log(result);

// Bitwise AND: 
// const a = 12, b = 25;
// const result = a & b;
// console.log(result);

// Bitwise OR : 
// const a = 12, b = 25;
// const result = a | b;
// console.log(result);

// Bitwise XOR : 
// const a = 12, b = 25;
// const result = a ^ b;
// console.log(result);

// Bitwise NOT:
// const a = 12;
// const result = ~a;
// console.log(result);

// Left shift :
// const a = 8, b = 1;
// const result = a << b;
// console.log(result);

// Sign - propagating right shift :
// let result;
// const a = 8, b = 1, c = -3;
// result = a >> b;
// console.log(result);
// result = c >> b;
// console.log(result);

// Zero - fill right shift : 
// let result;
// const a = 8, b = 1, c = -3;
// result = a >>> b;
// console.log(result);
// result = c >>> b;
// console.log(result);


// 92 Currying :
// Example 1 :
// function sum(a, b, c) {
//     return a + b + c;
// }
// const result = sum(2, 3, 7)
// console.log(result);

// Example 2 : Curried Function:
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }
// const result = sum(2)(3)(7);
// console.log(result);

// * Using Arrow Functions:
// const sum = a => b => c => a + b + c;
// const result = sum(2)(3)(7);
// console.log(result);

// Example 3 : Practical Usage : 
// const logger = level => message => console.log(`[${level}] ${message}`);
// const infoLogger = logger('INFO');
// const errorLogger = logger('ERROR');
// infoLogger('This is an info message');
// errorLogger('This is an error message');

// Example 4 : Currying vs.Partial Application : 
// function add(a, b, c) {
//     return a + b + c;
// }
// const partialAdd = add.bind(null, 1, 2);
// console.log(partialAdd(3));

// 93. Debugger :
// const a = 6;
// const b = 'apple';
// debugger;
// console.log(a + b);


// *** End ***


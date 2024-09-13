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
// console.log(a === b);

// 9. true == 1 and false == 0 only, both are not equal to any other number.
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
// console.log('Break');
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

// 16. Note : typeof always gives output types in lowercase.
// let result;
// result = Number('5');
// console.log(result, ':', typeof result);
// result = +'5';
// console.log(result, ':', typeof result);
// result = 2 + + '2';
// console.log(result, ':', typeof result);
// result = Boolean(6);
// console.log(result, ':', typeof result);
// result = Boolean('apple');
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
// // Error : null / undefined is not a function.
// result = Set(5);
// console.log(result, ':', typeof result);
// // Error : Constructor Set requires 'new'.
// result = Map(5);
// console.log(result, ':', typeof result);
// // Error : Constructor Map requires 'new'.


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
// result = 7 - true;
// console.log(result);
// result = 7 - false;
// console.log(result);
// console.log(Number(true));
// console.log(Number(false));


// *** End ***


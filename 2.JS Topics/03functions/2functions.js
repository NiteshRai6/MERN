'use strict';

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

// ReferenceError: Cannot access 'data' before initialization.

// data2();
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

// 30. Function Parameter Behave :
// Example 1 : With let :
// function test(props) {
//     console.log(props);
//     if (true) {
//         let props = 20;
//         console.log(props);
//     }
//     console.log(props);
// }
// test(10);

// Example 2 : With var :
// function test(props) {
//     console.log(props);
//     if (true) {
//         var props = 20;
//         console.log(props);
//     }
//     console.log(props);
// }
// test(10);

// Example 3 : Redeclare with let :
// SyntaxError: Identifier 'props' has already been declared:
// function test(props) {
//     let props = 20;
//     console.log(props);
// }
// test(10);

// Example 4 : Redeclare with var :
// function test(props) {
//     var props = 20;
//     console.log(props);
// }
// test(10);


// *** End *** 


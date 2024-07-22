'use strict';

// Q1. Javascript Program to Generate a Random Number ?
// Example 1: Generate a Random Number : Default bw 0 & 1 :
// const a = Math.random();
// console.log(a);
// Example 2: Get a Random Number between 1 and 10
// Math.random() * (highestNumber - lowestNumber) + lowestNumber
// const number = Math.random() * (10 - 1) + 1;
// console.log(`The random number between 1 and 10 is : ${number}`);
// Example 3 : Math.floor() :
// const number = Math.floor(Math.random() * (9999 - 1000) + 1000);
// console.log(`The random number between 1 and 10 is : ${number}`);
// Example 4: Integer Value between Two Numbers(Inclusive)
// input from the user
// const min = parseInt(prompt("Enter a min value: "));
// const max = parseInt(prompt("Enter a max value: "));
// const a = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(`Random value between ${min} and ${max} is ${a}`);

// Q2. JavaScript Program to Find Sum of Natural Numbers Using Recursion ?
// function sum(num) {
//     if (num > 0) {
//         return num + sum(num - 1);
//     }
//     else {
//         return num;
//     }
// }
// const number = parseInt(prompt('Enter a positive Integer ?'));
// if (number < 0) {
//     console.log('Enter a positive Integer ?');
// }
// else {
//     const result = sum(number);
//     console.log(`sum = ${result}`);
// }

// Better way :
// function sum(num) {
//     if (num < 1) return false;
//     const result = num > 0 ? num + sum(num - 1) : num;
//     return result;
// }
// let result;
// result = sum(5);
// console.log(result);

// console.log(5 * (5 + 1) / 2);

// function sumForRange(min, max) {
//     let sum = 0;
//     for (let i = min; i <= max; i++) sum += i;
//     return sum;
// }
// let result;
// result = sumForRange(10, 30);
// console.log(result);

// Q3.JavaScript Program to Guess a Random Number ? 
// function guessNumber() {
//     const random = Math.floor(Math.random() * 10) + 1;
//     let guess = parseInt(prompt('Guess a number from 1 to 10 ?'));
//     while (guess !== random) {
//         console.log(`Guessed number = ${guess} & random number = ${random}`);
//         guess = parseInt(prompt('Guess a number from 1 to 10 ?'));
//     }
//     if (guess === random) {
//         console.log(`Correct Guess!`);
//     }
// }
// guessNumber();

// Q4.JavaScript Program to find a factorial of a number using recursion ? 
// function factorial(num) {
//     if (num === 0) {
//         return 1;
//     }
//     else {
//         return num * factorial(num - 1);
//     }
// }
// const number = parseInt(prompt('Enter a positive a Integer ?'));
// if (number < 0) {
//     console.log('Please Enter a positive a Integer!');
// }
// else {
//     const result = factorial(number);
//     console.log(`Factorial of ${number} = ${result}`);
// }

// Q5.JavaScript Program to convert decimal to binary ? 
// toString([radix]) returns a String value in a specified radix(base),
// here toString(2) converts the decimal number into binary.
// const number = parseInt(prompt('Enter a decimal number ?'));
// const binary = number.toString(2);
// console.log(`Decimal number ${number} in binary = ${binary}`);

// Q6.JavaScript Program to convert character to a ascii code ? 
// Example 1 :
// const string = prompt('Enter a character ?');
// const ascii = string.charCodeAt(0);
// console.log(`The ASCII value of ${string} = ${ascii}`);
// Example 2 :
// const string = prompt('Enter a character ?');
// const ascii = string.codePointAt();
// console.log(`The ASCII value of ${string} = ${ascii}`);

// Note : charCodeAt() is UTF-16, codePointAt() is Unicode. charCodeAt() returns a number between 0 and 65535. Both methods return an integer representing the UTF-16 code of a character, but only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535). 

// Q6.JavaScript Program to set a default parameter value for a function ? 
// function sum(x = 4, y = x - 2) {
//     return x + y;
// }
// const result1 = sum(10, 20);
// console.log(result1);
// const result2 = sum();
// console.log(result2);

// Note : Function declarations are hoisted which means that they can be used before the function is declared. They are initialized at compile time while a function expression is not hoisted, they can only be called after the function is declared and read by the interpreter.

// Q7.JavaScript Program to check if a varible is of function type ? 
// function testVariable(variable) {
//     if (typeof variable === 'function') {
//         console.log('Function type.');
//     }
//     else {
//         console.log('Not a function type');
//     }
// }
// const check = true;
// const data = () => {
//     console.log('Data');
// }
// testVariable(check);
// testVariable(data);
// 2nd Way : if(variable instanceof Function){}.
// 3rd Way: if (Object.prototype.toString.call(variable) == '[object Function]');

// Q7.JavaScript Program to pass parameter to a setTimeout function ?
// function sum(x, y) {
//     let add = x + y;
//     console.log(add);
// }
// setTimeout(sum, 3000, 5, 6);
// console.log('This executes before.');

// Q8. JavaScript Program to Perform Function Overloading ?
// In programming, function overloading refers to the concept where multiple functions with the same names can have different implementations.However, in JavaScript, if there are multiple functions with the same name, the function that is defined at the last gets executed.
// The function overloading feature can be implemented in some other ways.
// Example 1: Using if/else-if Statement :
// function sum() {
//     if (arguments.length == 0) {
//         console.log('You have not passed any argument');
//     }
//     else if (arguments.length == 1) {
//         console.log('Pass at least two arguments');
//     }
//     else {
//         let result = 0;
//         let length = arguments.length;
//         for (let i = 0; i < length; i++) {
//             result = result + arguments[i];
//         }
//         console.log(result);
//     }
// }
// sum();
// sum(5);
// sum(5, 9);
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
// In JavaScript, the arguments object is automatically available inside a function that represents the passed arguments to a function.
// Example 2: Using switch Statement :
// function sum() {
//     switch (arguments.length) {
//         case 0:
//             console.log('You have not passed any arguments');
//             break;
//         case 1:
//             console.log('Pass at least two arguments.');
//             break;
//         default:
//             let result = 0;
//             let length = arguments.length;
//             for (let i = 0; i < length; i++) {
//                 result += arguments[i];
//             }
//             console.log(result);
//             break;
//     }
// }
// sum();
// sum(2);
// sum(2, 3);
// sum(2, 4, 6, 8);

// Better way :
// function randomSum() {
//     if (arguments.length < 2) return false;
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// let result;
// result = randomSum(5, 4, 8, 9);
// console.log(result);

// Q9. JavaScript Program to Pass a Function as Parameter ?
// function greet() {
//     return 'Hello';
// }
// function userName(user, func) {
//     const message = func();
//     console.log(`${message}, ${user}`);
// }
// userName('John', greet);
// userName('Selena', greet);

// *** End *** 


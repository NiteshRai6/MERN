'use strict';

// Q1. JavaScript Program to Solve Quadratic Equation ?
// let root1, root2;
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// let discriminant = b * b - 4 * a * c;

// // condition for real and different roots
// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // condition for real and equal roots
// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // if roots are not real
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//     console.log(
//         `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//     );
// }
// toFixed(2) is also used to rounds up the decimal number to two decimal values.

// Q2. Javascript Program to Check if a number is Positive, Negative, or Zero ?
// Way 1 : By if-else :
// const number = parseInt(prompt('Enter a number ?'));
// if (number > 0) {
//     console.log(`Given number ${number} is positive`);
// }
// else if (number == 0) {
//     console.log(`Given number ${number} is zero`);
// }
// else if (number < 0) {
//     console.log(`Given number ${number} is negative`);
// }
// else {
//     console.log(`Please enter a valid number`);
// }
// Way 2 : By Nested if-else :
// const number = parseInt(prompt('Enter a number ?'));
// if (number >= 0) {
//     if (number == 0) {
//         console.log(`Given number ${number} is zero`);
//     } else {
//         console.log(`Given number ${number} is positive`);
//     }
// }
// else if (number < 0) {
//     console.log(`Given number ${number} is negative`);
// }
// else {
//     console.log(`Please enter a valid number`);
// }
// Way 3 : By Ternary Operator :
// const number = parseInt(prompt('Enter a number ?'));
// const result = number >= 0 ? 'positive' : 'negative';
// console.log(result);

// Q3. Javascript Program to Check if a Number is Odd or Even ?
// const number = parseInt(prompt('Enter a number ?'));
// if (number % 2 === 0) {
//     console.log(`Given number ${number} is Even`);
// }
// else if (number % 2 === 1) {
//     console.log(`Given number ${number} is Odd`);
// }
// else {
//     console.log(`Please enter a valid number`);
// }
// Way 2 : By Ternary Operator :
// const number = parseInt(prompt('Enter a number ?'));
// const result = number % 2 === 0 ? 'Positive' : 'Negative';
// console.log(`Given number ${number} is ${result}`);

// Q4. JavaScript Program to Find the Largest Among Three Numbers ?
// Way 1 : By If-alse :
// const number1 = parseFloat(prompt('Enter the first number ?'));
// const number2 = parseFloat(prompt('Enter the second number ?'));
// const number3 = parseFloat(prompt('Enter the third number ?'));
// if (number1 >= number2 && number1 >= number3) {
//     console.log(`${number1} is Largest among these Three Numbers`);
// }
// else if (number2 >= number1 && number2 >= number3) {
//     console.log(`${number2} is Largest among these Three Numbers`);
// }
// else if (number3 >= number1 && number3 >= number2) {
//     console.log(`${number3} is Largest among these Three Numbers`);
// }
// else {
//     console.log(`Please enter a valid number`);
// }
// Way 2 :
// const number1 = parseFloat(prompt('Enter the first number ?'));
// const number2 = parseFloat(prompt('Enter the second number ?'));
// const number3 = parseFloat(prompt('Enter the third number ?'));
// const largest = Math.max(number1, number2, number3);
// console.log(`${largest} is Largest among these Three Numbers`);

// Q5. JavaScript Program to Check Prime Number ?

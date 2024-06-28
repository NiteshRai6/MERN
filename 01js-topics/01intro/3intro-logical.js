// 'use strict';
// Q1.JavaScript Program To Print Hello World ?
// console.log('Hello World!');
// alert('Hello World!');
// document.write('Hello World!');
// print the content to the HTML document.

// Q2. JavaScript Program to Add Two Numbers ?
// 1st Way :
// const num1 = 5;
// const num2 = 7;
// const sum = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// 2nd Way : prompt takes input as String.
// const num1 = parseInt(prompt('Enter the first number'));
// const num2 = parseInt(prompt('Enter the second number'));
// const sum = num1 + num2;
// alert(`The sum of ${num1} and ${num2} is ${sum}`);

// Q3. JavaScript Program to Find the Square Root ?
// const number = parseInt(prompt('Enter the number to find its square root ?'));
// const sqrt = Math.sqrt(number);
// alert('The square root of ' + number + ' is ' + sqrt);

// Q4. JavaScript Program to Calculate the Area of a Triangle ?
// Way 1 : area = (base * height) / 2
// const base = parseInt(prompt('Enter the base of a traingle ?'));
// const height = parseInt(prompt('Enter the height of a traingle ?'));
// const area = (base * height) / 2;
// alert(`The area of a traingle is ${area}`);
// Way 2 : for all dides : s = (a+b+c)/2 , area = √(s*(s - a) * (s - b) * (s - c)) 
// const side1 = parseInt(prompt('Enter the side1 of a traingle ?'));
// const side2 = parseInt(prompt('Enter the side2 of a traingle ?'));
// const side3 = parseInt(prompt('Enter the side3 of a traingle ?'));
// const substance = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(substance * (substance - side1) * (substance - side2) * (substance - side3));
// alert(`The area of a traingle is ${area}`);

// Q5. JavaScript Program to Swap Two Variables ? **
// Way 1 : Using a Temporary Variable : swap strings or other data types :
// let a = prompt('Enter the first value for "a" ');
// let b = prompt('Enter the second value for "b" ');
// let temp;
// temp = a;
// a = b;
// b = temp;
// alert(`After swapping, The value of "a" is ${a} and the value of "b" is ${b}`);
// Way 2 : Using es6(ES2015) Destructuring assignment :
// let a = prompt('Enter the first value for "a" ');
// let b = prompt('Enter the second value for "b" ');
// [a, b] = [b, a];
// alert(`After swapping, The value of "a" is ${a} and the value of "b" is ${b}`);
// Way 3 : Using Arithmetic Operators : Only for number type.
// let a = parseInt(prompt('Enter the first number for "a" '));
// let b = parseInt(prompt('Enter the second number for "b" '));
// a = a + b;
// b = a - b;
// a = a - b;
// alert(`After swapping, The value of "a" is ${a} and the value of "b" is ${b}`);
// Way 4 : Using Bitwise XOR(^) operator : only integer (whole number) values :
// let a = parseInt(prompt('Enter the first number for "a" '));
// let b = parseInt(prompt('Enter the second number for "b" '));
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// alert(`After swapping, The value of "a" is ${a} and the value of "b" is ${b}`);

// Q6. JavaScript Program to Convert Kilometers to Miles ?
// miles = kilometers * 0.621371
// let kilometers = parseInt(prompt('Enter the kilometers '));
// const factor = 0.621371;
// const miles = kilometers * factor;
// alert(`The given kilometers ${kilometers} in miles = ${miles}`);

// Q7. Javascript Program to Convert Celsius to Fahrenheit ?
// fahrenheit = celsius * 1.8 + 32
// celsius = (fahrenheit - 32) / 1.8
// const celsius = parseInt(prompt('Enter the temperature in celsius ?'));
// const fahrenheit = celsius * 1.8 + 32;
// alert(`The given celsius temperature ${celsius} in fahrenheit = ${fahrenheit}`);

// Q8. JavaScript Program To Work With Constants ?
// const a = 6;
// function check() {
//     console.log(a);
// }
// check();
// Output : 6;
// const a = 6;
// function check() {
//     const a = 8;
//     console.log(a);
// }
// check();
// Output : 8;
// {
//     const x = 5;
// }
// {
//     console.log(x);
// }
// ReferenceError: x is not defined
// const arr = [2, 4, 6];
// arr[3] = 8;
// console.log(arr);
// output :  [2, 4, 6, 8];
// const arr2 = [1, 2, 3, 4];
// arr2[2] = 9;
// console.log(arr2);
// output : [1, 2, 9, 4];
// Arra is of Reference Type, and const is not a constant but gives constant reference. so const Array can be manipulated but never reasigned.
// const data = ['apple'];
// data = ['Mango'];
// console.log(data);
// TypeError: Assignment to constant variable.

// Q9. JavaScript Program to Write to Console ?
// function sayName(name) {
//     return `Name is ${name}`;
// }
// console.log(sayName('John'));

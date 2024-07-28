'use strict';

// Q1. JavaScript Program to Display Date and Time ?
// The six numbers in new Date() specify year, month, day, hour, minute, second respectively.Also, the month starts from 0. Hence, January is 0 and December is 11.
// The toDateString() method returns the date portion of a Date object.
// The toLocaleTimeString() method returns the time portion of a Date object.
// const date = new Date();
// console.log(date);
// const n = date.toDateString();
// console.log(n);
// const time = date.toLocaleTimeString();
// console.log(time);
// const givenDate = new Date(2023, 4, 12, 9, 23, 8);
// console.log(givenDate);

// Q2. JavaScript Program to Check Leap Year ?
// A year is a leap year if the following conditions are satisfied:
// The year is a multiple of 400. OR
// The year is a multiple of 4 and not a multiple of 100.
// Example 1: Check Leap Year Using if...else : 
// function checkLeapYear(year) {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         console.log(`${year} is a Leap Year.`);
//     }
//     else {
//         console.log(`${year} is Not a Leap Year.`);
//     }
// }
// const y1 = 2000;
// const y2 = 2024;
// const y3 = 1900;
// checkLeapYear(y1);
// checkLeapYear(y2);
// checkLeapYear(y3);
// Example 2: Check Leap Year Using newDate() :
// The getDate() method returns the day of the month. : 
// function checkLeapYear(year) {
//     const leap = new Date(year, 1, 29).getDate() === 29;
//     console.log(leap);
//     if (leap) {
//         console.log(`${year} is a Leap Year.`);
//     }
//     else {
//         console.log(`${year} is Not a Leap Year.`);
//     }
// }
// const y1 = 2000;
// const y2 = 2024;
// const y3 = 1900;
// checkLeapYear(y1);
// checkLeapYear(y2);
// checkLeapYear(y3);

// Q3. JavaScript Program to Format the Date ?
// const currentDate = new Date();
// let day = currentDate.getDate();
// if (day < 10) {
//     day = '0' + day;
// }
// let month = currentDate.getMonth() + 1;
// if (month < 10) {
//     month = '0' + month;
// }
// let year = currentDate.getFullYear();
// const formatDate1 = day + '-' + month + '-' + year;
// console.log(formatDate1);
// const formatDate2 = day + '/' + month + '/' + year;
// console.log(formatDate2);
// const formatDate3 = month + '-' + day + '-' + year;
// console.log(formatDate3);
// const formatDate4 = month + '/' + day + '/' + year;
// console.log(formatDate4);

// Q4. Javascript Program to Display Current Date ?
// const currentDate = new Date();
// const date = currentDate.toDateString();
// const time = currentDate.toLocaleTimeString();
// console.log(date);
// console.log(time);

// Q5. JavaScript Program to Compare The Value of Two Dates ?
// const d1 = new Date();
// const d2 = new Date();
// const compare1 = d1 < d2;
// console.log(compare1);
// const compare2 = d1 > d2;
// console.log(compare2);
// const compare3 = d1 <= d2;
// console.log(compare3);
// const compare4 = d1 >= d2;
// console.log(compare4);
// const compare5 = d1.getTime() === d2.getTime();
// console.log(compare5);
// const compare6 = d1.getTime() !== d2.getTime();
// console.log(compare6);
// console.log(d1.getTime());
// console.log(d2.getTime());

// Q6. JavaScript Program to Create Countdown Timer ?
// let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
// let x = setInterval(function () {
//     let now = new Date().getTime();
//     let timeLeft = countDownDate - now;
//     let days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
//     let hours = Math.floor(timeLeft / (60 * 60 * 1000) % 24);
//     let minutes = Math.floor(timeLeft / (60 * 1000) % 60);
//     let seconds = Math.floor(timeLeft / (1000) % 60);
//     console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//     if (timeLeft < 0) {
//         clearInterval(x);
//         console.log('Countdown finished!');
//     }
// }, 2000);

// Q7. JavaScript Program to Include a JS file in Another JS file ? 
// import { data, add } from './module.js';
// console.log(data);
// add(5, 6);

// Q8. Random Number Between Two Numbers ?
// If you want to find a random integer in between min(inclusive) to max(inclusive), you can use the following formula:
// Math.floor(Math.random() * (max - min + 1)) + min
// const min = 5;
// const max = 20;
// const random = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(random);

// Q9. JavaScript Program To Get The Current URL ?
// Only for browser :
// const url1 = window.location.href;
// const url2 = document.URL;
// console.log(url1);
// console.log(url2);

// Q10. JavaScript Program to Validate An Email Address ?
// function validateEmail(email_id) {
//     const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (regex_pattern.test(email_id)) {
//         console.log('The email address is valid');
//     }
//     else {
//         console.log('The email address is not valid');
//     }
// }
// validateEmail('abc123@gmail.com');
// validateEmail('hello@com');

// Q11. JavaScript Program to Implement a Stack ?
// The stack is a data structure that follows Last In First Out(LIFO) principle.The element that is added at last is accessed at first. 
// Stack class is created to implement the stack data structure.The class methods like add(), remove(), peek(), isEmpty(), size(), clear() are implemented.
// class Stack {
//     constructor() {
//         this.items = [];
//     }
//     add(element) {
//         return this.items.push(element);
//     }
//     remove() {
//         if (this.items.length > 0) {
//             return this.items.pop();
//         }
//     }
//     peek() {
//         return this.items[this.items.length - 1];
//     }
//     isEmpty() {
//         return this.items.length == 0;
//     }
//     size() {
//         return this.items.length;
//     }
//     clear() {
//         this.items = [];
//     }
// }
// const stack = new Stack();
// stack.add(1);
// stack.add(5);
// stack.add(8);
// stack.add(16);
// console.log(stack.items);
// stack.remove();
// console.log(stack.items);
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());
// stack.clear();
// console.log(stack.items);

// Q12. JavaScript Program to Implement a Queue ?
// A queue is a data structure that follows the First In First Out(FIFO) principle.
// Initially, this.items is an empty object which is treated as a queue.
// The enqueue() method adds elements to the queue.
// The dequeue() method removes the first element from the queue.
// The peek() method returns the first element from the queue.
// The size() method shows the total number of elements in the queue.
// The isEmpty() method returns a boolean checking if the queue is empty or not.
// The clear() method clears and resets the queue.
// class Queue {
//     constructor() {
//         this.items = {};
//         this.headIndex = 0;
//         this.tailIndex = 0;
//     }
//     enqueue(element) {
//         this.items[this.tailIndex] = element;
//         this.tailIndex++;
//     }
//     dequeue() {
//         const removedItem = this.items[this.headIndex];
//         delete this.items[this.headIndex];
//         this.headIndex++;
//         return removedItem;
//     }
//     peek() {
//         return this.items[this.headIndex];
//     }
//     size() {
//         return this.tailIndex - this.headIndex;
//     }
//     isEmpty() {
//         if (this.tailIndex - this.headIndex == 0) {
//             return true
//         }
//         else return false;
//     }
//     clear() {
//         this.items = {};
//         this.headIndex = 0;
//         this.tailIndex = 0;
//     }
// }
// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(40);
// console.log(queue.items);
// const removedItem = queue.dequeue();
// console.log(removedItem);
// console.log(queue.items);
// console.log(queue.peek());
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.clear();
// console.log(queue.items);

//Q13. JavaScript Program to Check if a Number is Float or Integer ?
// Example 1: Using Number.isInteger() : 
// function checkInteger(num) {
//     if (typeof num == 'number' && !isNaN(num)) {
//         if (Number.isInteger(num)) {
//             console.log(`${num} is an Integer.`);
//         }
//         else {
//             console.log(`${num} is a Float value.`);
//         }
//     }
//     else {
//         console.log(`${num} is not an Integer.`);
//     }
// }
// checkInteger(8);
// checkInteger(0.66);
// checkInteger('apple');
// Example 2: Using Regex : 
// This program only works for numbers.
// function checkNumber(x) {
//     let regexPattern = /^-?[0-9]+$/;
//     let result = regexPattern.test(x);
//     if (result) {
//         console.log(`${x} is an integer.`);
//     }
//     else {
//         console.log(`${x} is a float value.`)
//     }
// }
// checkNumber(44);
// checkNumber(-44);
// checkNumber(3.4);
// checkNumber(-3.4);

// Q14. JavaScript Program to Get the Dimensions of an Image ?
// Only run on Browser.
// const img = new Image();
// img.src = '/public/react-img.jpeg';
// img.onload = function () {
//     console.log(`width : ${this.width}, height: ${this.height}`);
// }

// Q15.JavaScript Program to Convert Date to Number ?
// the new Date() constructor is used to create a date object.
// The getTime() method returns the number of milliseconds from midnight of January 1, 1970(EcmaScript epoch) to the specified date.
// const date = new Date();
// const time = date.getTime();
// console.log(time);


// ** 100 Questions End **

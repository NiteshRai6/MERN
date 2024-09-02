'use strict';

// Q1. Number is Prime or Not And List of prime numbers in given range ?

// * Number is Prime or Not  :
// function isPrime(num) {
// if (num < 2 || !Number.isInteger(num)) {
//     return 'Enter a positive Integer.'
// }
//     let flag = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag) return true
//     else return false;
// }
// const result = isPrime(89);
// console.log(result);

// * List of prime numbers in given range :
// function primeList(min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max) || min >= max)
//         return 'Enter valid range.';

//     if (min < 2) min = 2;
//     let primes = [];

//     for (let i = min; i <= max; i++) {
//         let flag = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag) primes.push(i);
//     }
//     return primes;
// }

// const result = primeList(1, 20);
// console.log(result);


// Q2.Factorial by normal and recusrion ?

// * Factorial By Normal Way :
// function factorial(num) {
//     if (num < 0 || !Number.isInteger(num)) {
//         return 'Enter a positive Integer.'
//     }
//     if (num === 0) return 1;
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// const result = factorial(6);
// console.log(result);

// * Factorial By Recursion : 
// function factorial(num) {
//     if (num < 0 || !Number.isInteger(num)) {
//         return 'Enter a valid number';
//     }
//     if (num === 0) return 1;
//     return num * factorial(num - 1);
// }
// const result = factorial(5);
// console.log(result);


// Q3. Fibonacci Series Up to n Terms And Up to a Certain Number ?

// * Fibonacci Up to n Terms :
// function fibonacci(terms) {
//     if (terms < 1 || !Number.isInteger(terms)) {
//         return 'Enter valid terms.'
//     }
//     let sequence = [];
//     let n1 = 0, n2 = 1, nextTerm;
//     for (let i = 1; i <= terms; i++) {
//         sequence.push(n1);
//         nextTerm = n1 + n2
//         n1 = n2;
//         n2 = nextTerm;
//     }
//     return sequence;
// }
// const result = fibonacci(10);
// console.log(result);

// * Fibonacci Up to a Certain Number :
// function fibonacci(num) {
//     if (num < 1 || !Number.isInteger(num)) {
//         return 'Enter positive Integer';
//     }
//     let sequence = [];
//     let n1 = 0, n2 = 1, nextTerm;
//     while (n1 <= num) {
//         sequence.push(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
//     return sequence;
// }
// const result = fibonacci(30);
// console.log(result);


// Q4. is ArmsStrong Number and generate ArmsStrong numbers ?

//  * Check is ArmsStrong Number :
// function isArmStrong(num) {
//     if (num < 0 || !Number.isInteger(num)) {
//         return false;
//     }
//     const digits = String(num).length;
//     let sum = 0;
//     let temp = num;
//     while (temp > 0) {
//         let remainder = temp % 10;
//         sum += remainder ** digits;
//         temp = parseInt(temp / 10);
//     }
//     if (num === sum) return true;
//     else return false;
// }
// const result = isArmStrong(153);
// console.log(result);

// * Generate ArmsStrong Numbers :
// function isArmsStrong(num) {
//     if (num < 0 || !Number.isInteger(num)) {
//         return 'Enter a positive Integer'
//     }
//     let sum = 0;
//     const digits = num.toString();
//     for (let i of digits) {
//         sum += parseInt(Math.pow(i, digits.length));
//     }
//     if (num === sum) return true;
//     else return false;
// }
// const result = isArmsStrong(370);
// console.log(result);

// function generateArmsStrong(start, end) {
//     let data = [];
//     for (let i = start; i <= end; i++) {
//         if (isArmsStrong(i)) {
//             data.push(i);
//         }
//     }
//     return data;
// }
// const nums = generateArmsStrong(10, 10000);
// console.log(nums);


// Q5. Find HCF (GCD) and LCM. ?

// * HCF :
// function hcf(a, b) {
//     const min = a < b ? a : b;
//     for (let i = min; i >= 1; i--) {
//         if (a % i === 0 && b % i === 0) {
//             return i;
//         }
//     }
// }
// const result = hcf(32, 48);
// console.log(result);

// * LCM :
// function lcm(a, b) {
//     const max = a > b ? a : b;
//     for (let i = max; i <= (a * b); i++) {
//         if (i % a === 0 && i % b === 0) {
//             return i;
//         }
//     }
// }
// const result = lcm(8, 12);
// console.log(result);

// * LCM Calculation Using HCF: 
// function findHcf(a, b) {
//     const min = a < b ? a : b;
//     for (let i = min; i >= 1; i--) {
//         if (a % i === 0 && b % i === 0) {
//             return i;
//         }
//     }
// }
// const num1 = 8, num2 = 12;
// const hcf = findHcf(num1, num2);
// console.log('HCF :', hcf);
// const lcm = (num1 * num2) / hcf;
// console.log('LCM :', lcm);


// Q6. Create function to Insert Item in an Array at specified index for 
// Dynamic data ?

// By Loop :
// function insertItem(array, index, item) {
//     for (let i = array.length; i > index; i--) {
//         array[i] = array[i - 1];
//     }
//     array[index] = item;
//     return array;
// }
// const arr = [1, 2, 3, 4, 5];
// const result = insertItem(arr, 2, 10);
// console.log(result);

// By Splice :
// function insertItem(array, index, item) {
//     array.splice(index, 0, item);
//     return array;
// }
// const arr = [1, 2, 3, 4, 5];
// const result = insertItem(arr, 2, 10);
// console.log(result);


// Q7. Remove Duplicate Items for single Array & for multiple Arrays ?

// * for Single Array, By Loop :
// function uniqueArr(arr) {
//     let unique = [];
//     for (let i of arr) {
//         if (!unique.includes(i)) {
//             unique.push(i);
//         }
//     }
//     return unique;
// }
// const array = [1, 2, 3, 2, 2, 3, 4];
// const result = uniqueArr(array);
// console.log(result);

// * for Single Array, By Set :
// function uniqueArr(arr) {
//     const unique = [... new Set(arr)];
//     return unique;
// }
// const array = [1, 2, 3, 2, 2, 3, 4];
// const result = uniqueArr(array);
// console.log(result);

// * for multiple Arrays, By Loop & Concat :
// function uniqueMergedArr(arr1, arr2) {
//     const mergeArr = arr1.concat(arr2);
//     const uniqueArr = [];
//     for (let i of mergeArr) {
//         if (!uniqueArr.includes(i)) {
//             uniqueArr.push(i);
//         }
//     }
//     return uniqueArr;
// }
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// const result = uniqueMergedArr(array1, array2);
// console.log(result);

// * for multiple Arrays, By Set :
// function uniqueMergedArr(arr1, arr2) {
//     const mergedArr = [...arr1, ...arr2];
//     const uniqueArr = [... new Set(mergedArr)];
//     return uniqueArr;
// }
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// const result = uniqueMergedArr(array1, array2);
// console.log(result);


// Q8. Sort Array of Objects by Property Values ?

// function comparePropName(a, b) {
//     const name1 = a.name.toUpperCase();
//     const name2 = b.name.toUpperCase();
//     const compare = name1 > name2 ? 1 : name1 < name2 ? -1 : 0;
//     return compare;
// }
// const data = [
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Selena', age: 32 },
//     { id: 3, name: 'Adam', age: 19 },
//     { id: 4, name: 'Charlie', age: 36 },
// ];
// const result = data.sort(comparePropName);
// console.log(result);

//  Sort by Callback for prop name :
// const result2 = data.sort((a, b) => {
//     const name1 = a.name.toUpperCase();
//     const name2 = b.name.toUpperCase();
//     const compare = name1 > name2 ? 1 : name1 < name2 ? -1 : 0;
//     return compare;
// })
// console.log(result2);

// Sort by Callback for prop age :
// const result3 = data.sort((a, b) => a.age - b.age);
// console.log(result3);


// Q9. Return all Pairs of given Array Elements whose addition = Target Sum ?
// function pairSum(arr, sum) {
//     let pairArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum) {
//                 pairArr.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return pairArr;
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const targetSum = 12;
// const result = pairSum(array, targetSum);
// console.log(result);


// Q10. Convert Multidimensional Array in 1D Array, without flat method ?

// *  By Loop :
// function flattenArray(arr) {
//     let newArr = [];
//     for (let i of arr) {
//         if (Array.isArray(i)) {
//             newArr = newArr.concat(flattenArray(i));
//         }
//         else {
//             newArr.push(i);
//         }
//     }
//     return newArr;
// }
// const array = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// const result = flattenArray(array);
// console.log(result);

// * By flat() :
// function flattenArray(arr) {
//     const newArr = arr.flat(Infinity);
//     return newArr;
// }
// const array = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// const result = flattenArray(array);
// console.log(result);


// Q11. Check Whether a String is Palindrome or Not ?

//  By Loop :
// function checkPalindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// const string = 'madam';
// const result = checkPalindrome(string);
// console.log(result);

//  By Built-in Methods :
// function checkPalindrome(str) {
//     const revStr = str.split('').reverse().join('');
//     if (str === revStr) {
//         return true;
//     }
//     else return false;
// }
// const string = 'madam';
// const result = checkPalindrome(string);
// console.log(result);


// Q12. Reverse a String ?

// By Loop :
// function reverseStr(str) {
//     const len = str.length;
//     let newStr = '';
//     for (let i = len - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// const string = 'apple';
// const result = reverseStr(string);
// console.log(result);

// By Built-in Methods :
// function reverseStr(str) {
//     const revStr = str.split('').reverse().join('');
//     return revStr;
// }
// const string = 'apple';
// const result = reverseStr(string);
// console.log(result);


// Q13. Check the Number of Occurrences of a Character in the String ?
// function countChar(str, char) {
//     let count = 0;
//     for (let i of str) {
//         if (i === char) {
//             count++;
//         }
//     }
//     return count;
// }
// const string = 'apple';
// const letter = 'p';
// const result = countChar(string, letter);
// console.log(result);


// Q14. Convert the First Letter of a String into UpperCase ?
// function capitalizeFirstLetter(str) {
//     const newStr = str[0].toUpperCase() + str.slice(1);
//     return newStr;
// }
// const string = 'react';
// const result = capitalizeFirstLetter(string);
// console.log(result);


// Q15. Count the Number of Vowels in a String ?
// function countVowels(str) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let i of str) {
//         if (vowels.includes(i)) {
//             count++
//         }
//     }
//     return count;
// }
// const string = 'JavaScript';
// const result = countVowels(string);
// console.log(result);


// Q16. Generate a Range of Numbers and Characters ?
// function* iterate(a, b) {
//     for (let i = a; i <= b; i++) {
//         yield i;
//     }
// }
// function range(a, b) {
//     if (typeof a && typeof b === 'string') {
//         const data = [...iterate(a.charCodeAt(), b.charCodeAt())]
//             .map(n => String.fromCharCode(n));
//         return data;
//     }
//     else {
//         const data = [...iterate(a, b)];
//         return data;
//     }
// }
// const result = range('c', 'g');
// console.log(result);
// const result2 = range(13, 21);
// console.log(result2);


// Q17. Print 5 times real time at the gap of 1 seconds ?
// * by setInterval() :
// let count = 0;
// const intervalId = setInterval(() => {
//     count++
//     if (count === 5) {
//         clearInterval(intervalId);
//     }
//     const time = new Date().toLocaleTimeString();
//     console.log(time);
// }, 1000);

//  * by setTimeOut() :
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         const time = new Date().toLocaleTimeString();
//         console.log(time);
//     }, i * 1000);
// }


// Q18. Explain Closures with example ?
// let count = 1;
// function outer() {
//     let count = 1;
//     return function inner() {
//         return count++;
//     }
// }
// const result = outer();
// console.log(result());
// console.log(result());
// console.log(result());
// count++;
// console.log(count);
// console.log(result());


// Q19. Explain 7 different use cases of 'this' keyword ?

// A.this Inside Global Scope : refers to the global object (window object in browsers).
// console.log(this);
// this.name = 'selena';
// console.log(this.name);

// B.this Inside Function : refers to the global object (window object in browsers).
// function test() {
//     console.log(this);
// }
// test();

// (function greet() {
//     console.log(this);
// }());

// C.this Inside Constructor Function / class : refers to the object inside which it is used.
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

// D.this Inside Object Method : refers to the object it lies within.
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

// E.this Inside Inner Function (inside a method) : refers to the global object.
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

// F.this Inside Arrow Function : refers to its parent scope object.
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

// G.this Inside Function with Strict Mode : undefined. 
// this.name = 'john';
// function test() {
//     console.log(this);
// }
// test();


// Q20. Create custom iterator function ? 
// function displayElements(arr) {
//     let n = 0;
//     return {
//         next() {
//             if (n < arr.length) {
//                 return {
//                     value: arr[n++],
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
// const array = [5, 10, 15, 20];
// const arrIterator = displayElements(array);
// console.log(arrIterator);
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());


// Q21. Create custom Iterable object ? 
// (pre - defined: iterable_name[Symbol.iterator]() )
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
// for (let i of iterableObj) {
//     console.log(i);
// }


// 22. Create Countdown Timer ?
// const countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
// const intervalId = setInterval(function () {
//     const now = new Date().getTime();
//     const timeLeft = countDownDate - now;
//     const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
//     const hours = Math.floor(timeLeft / (60 * 60 * 1000) % 24);
//     const minutes = Math.floor(timeLeft / (60 * 1000) % 60);
//     const seconds = Math.floor(timeLeft / (1000) % 60);
//     console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//     if (timeLeft < 0) {
//         clearInterval(intervalId);
//         console.log('Countdown finished.');
//     }
// }, 2000);


// Q23. JavaScript Program to Implement a Stack ? 
// (LIFO)(by using array), Methods : add,remove,peek,isEmpty,size & clear
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
//     isEmtry() {
//         return this.items.length === 0;
//     }
//     size() {
//         return this.items.length;
//     }
//     clear() {
//         this.items = [];
//     }
// }
// const stack = new Stack();
// console.log(stack);
// stack.add(5);
// stack.add(10);
// stack.add(15);
// console.log(stack);
// console.log(stack.items);
// stack.remove();
// console.log(stack.items);
// let result;
// result = stack.peek();
// console.log(result);
// result = stack.isEmtry();
// console.log(result);
// result = stack.size();
// console.log(result);
// stack.clear();
// console.log(stack.items);


// Q24. JavaScript Program to Implement a Queue ? 
// (FIFO)(by using object) : enqueue, dequeue, peek, size, isEmpty & clear
// class Queue {
//     constructor() {
//         this.items = {};
//         this.headIndex = 0;
//         this.tailIndex = 0;
//     }
//     enqueue(element) {
//         this.items[this.tailIndex] = element;
//         this.tailIndex++
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
//         return this.size() === 0;
//     }
//     clear() {
//         this.items = {};
//         this.headIndex = 0;
//         this.tailIndex = 0;
//     }
// }
// console.log(Queue);
// const queue = new Queue();
// console.log(queue);
// queue.enqueue(5);
// queue.enqueue(10);
// queue.enqueue(15);
// let result;
// result = queue.items;
// console.log(result);
// result = queue.dequeue();
// console.log(result);
// console.log(queue.items);
// result = queue.peek();
// console.log(result);
// result = queue.size();
// console.log(result);
// result = queue.isEmpty();
// console.log(result);
// queue.clear();
// console.log(queue.items);


// Q25. Explain var and let scope in lopp and in timeout ?

// * for loop and setTimeout() with var :
// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)
// }

// * for loop and setTimeout() with let :
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)
// }


// Q26. Explain Array map, reduce and filter in one example ?
// Example of Square of Array elements and then filter the even elements and then 
// sum of filtered elements.
// function data(array) {
//     const result = array
//         .map(i => i ** 2)
//         .filter(i => i % 2 == 0)
//         .reduce((accumulator, value) => accumulator + value, 0);
//     return result;
// }
// const arr = [1, 2, 3, 4, 5];
// const result = data(arr);
// console.log(result);


// Q27. Explain call, apply and bind method ?

// * call & apply with object & function :
// const obj = {
//     name: 'Alice',
//     age: 25,
//     city: 'New York'
// }
// function user(type, gender) {
//     console.log(`User Name : ${this.name}, User Type = ${type}, User Age : ${this.age}, User Gender : ${gender} `);
// }
// user.call(obj, 'Admin', 'Male');
// user.apply(obj, ['Manager', 'Female']);

// * cal & apply with 2 objects only :
// const obj = {
//     name: 'Alice',
//     city: 'New York'
// }
// const data = {
//     id: 1,
//     name: 'John',
//     age: 25,
//     info(gender, country) {
//         console.log(`
//             Name : ${this.name}, 
//             Gender: ${gender},
//             Age : ${data.age}
//             Country: ${country}
//             `);
//     }
// }
// data.info.call(obj, 'Male', 'India');
// data.info.apply(obj, ['Female', 'USA']);

// * bind () :
// const obj = {
//     name: 'Alice',
//     city: 'New York'
// }
// const data = {
//     id: 1,
//     name: 'John',
//     age: 25,
//     info(gender, country) {
//         console.log(`
//             Name : ${this.name}, 
//             Gender: ${gender},
//             Age : ${data.age}
//             Country: ${country}
//             `);
//     }
// }
// const result = data.info.bind(obj, 'Male', 'UK');
// result();

// ** End **
'use strict';

// Q1.JavaScript Program to Shuffle Deck of Cards ? ***
// // declare card elements :
// const suits = ["Spades", "Diamonds", "Club", "Heart"];
// const values = [
//     "Ace",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "Jack",
//     "Queen",
//     "King",
// ];
// // empty array to contain cards
// let deck = [];
// // create a deck of cards
// for (let i = 0; i < suits.length; i++) {
//     for (let x = 0; x < values.length; x++) {
//         let card = { Value: values[x], Suit: suits[i] };
//         deck.push(card);
//     }
// }
// // shuffle the cards
// for (let i = deck.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     let temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
// }
// console.log('The first five cards are:');
// // display 5 results
// for (let i = 0; i < 5; i++) {
//     console.log(`${deck[i].Value} of ${deck[i].Suit}`)
// }

// Q2. JavaScript Program to Create Objects in Different Ways ?
// You can create an object in three different ways:
// Using object literal
// By creating instance of Object directly
// By using constructor function
// Example 1: Using object literal : 
// const person = {
//     name: 'John',
//     age: 25,
//     hobbies: ['cricket', 'singing', 'reading'],
//     greet: function () {
//         console.log(`Hello by ${this.name}`);
//     },
//     score: {
//         math: 90,
//         science: 76
//     }
// }
// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies[1]);
// person.greet();
// console.log(person.score.science);
// Example 2: Create an Object using Instance of Object Directly :
// const person = new Object({
//     name: 'John',
//     age: 25,
//     hobbies: ['cricket', 'singing', 'reading'],
//     greet: function () {
//         console.log(`Hello by ${this.name}`);
//     },
//     score: {
//         math: 90,
//         science: 76
//     }
// });
// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies[1]);
// person.greet();
// console.log(person.score.science);
// Example 3: Create an object using Constructor Function :
// function Person() {
//     this.name = 'John',
//         this.age = 25,
//         this.hobbies = ['cricket', 'singing', 'reading'],
//         this.greet = function () {
//             console.log(`Hello by ${this.name}`);
//         },
//         this.score = {
//             math: 90,
//             science: 76
//         }
// }
// const person = new Person();
// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies[1]);
// person.greet();
// console.log(person.score.science);
// Example 4: Create an object using Constructor Class :
// class Person {
//     constructor() {
//         this.name = 'John',
//             this.age = 25,
//             this.hobbies = ['cricket', 'singing', 'reading'],
//             this.greet = () => {
//                 console.log(`Hello by ${this.name}`);
//             },
//             this.score = {
//                 math: 90,
//                 science: 76
//             }
//     }
// }
// const person = new Person();
// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies[1]);
// person.greet();
// console.log(person.score.science);

// Q3. JavaScript Program to Remove a Property from an Object ?
// const person = {
//     name: 'John',
//     age: 25,
//     hobbies: ['cricket', 'singing', 'reading'],
//     greet: function () {
//         console.log(`Hello by ${this.name}`);
//     },
//     score: {
//         math: 90,
//         science: 76
//     }
// }

// delete person.age;
// delete person['score'];
// console.log(person);

// By Destructuring :
// const { age, score, ...rest } = person;
// console.log(rest);

// Q4. JavaScript Program to Check if a Key Exists in an Object ?
// Example 1 : By in property :
// const person = {
//     name: 'John',
//     age: 26,
//     city: 'Delhi'
// }
// const hasKey = 'age' in person;
// if (hasKey) {
//     console.log('Person has key');
// }
// else {
//     console.log('Person does not have key.');
// }
// Example 2 : By hasOwnProperty() :
// const person = {
//     name: 'John',
//     age: 26,
//     city: 'Delhi'
// }
// const hasKey = person.hasOwnProperty('name');
// if (hasKey) {
//     console.log('Person has key');
// }
// else {
//     console.log('Person does not have key.');
// }

// Q5. JavaScript Program to Clone a JS Object ?
// Example 1. Clone the Object Using Object.assign() : 
// const person = {
//     name: 'John',
//     age: 26,
//     city: 'Delhi'
// }
// const clone = Object.assign({}, person);
// clone.name = 'Selena';
// console.log(person.name);
// console.log(clone.name);
// Example 2: Clone the Object Using Spread Syntax :
// const person = {
//     name: 'John',
//     age: 26,
//     city: 'Delhi'
// }
// const clone = { ...person }
// clone.name = 'Selena';
// console.log(person.name);
// console.log(clone.name);
// Example 3: Clone the Object Using JSON.parse()
// JSON.parse() only works with Number and String object literal.It does not work with an object literal with function or symbol properties.
// const person = {
//     name: 'John',
//     age: 26,
//     city: 'Delhi'
// }
// const clone = JSON.parse(JSON.stringify(person));
// clone.name = 'Selena';
// console.log(person.name);
// console.log(clone.name);

// 06. JavaScript Program to Loop Through an Object ?
// Example 1: Loop Through Object Using for...in :
// The for...in loop will also count inherited properties.
// If you want, you can only loop through the object's own property by using the hasOwnProperty() method.
// const person = {
//     name: 'John',
//     age: 26,
//     city: 'Delhi'
// }
// const student = { gender: "Male" };
// person.__proto__ = student;
// for (let key in person) {
//     console.log(`${key} - ${person[key]}`);
// }
// Example 2: Loop Through Object Using Object.entries and for...of :
// The Object.entries() method returns an array of a given object's key/value pairs. The for...of loop is used to loop through an array.
// const person = {
//     name: 'John',
//     age: 26,
//     city: 'Delhi'
// }
// for (let [key, value] of Object.entries(person)) {
//     console.log(`${key} - ${value}`);
// }
// const data = Object.entries(person);
// console.log(data);
// const data = Object.values(person);
// console.log(data);

// Q7. JavaScript Program to Merge Property of Two Objects ?
// if the two objects have the same key, then the second object's key overwrites the first object's key.
// Example 1 : By Object.assign() :
// const person = {
//     name: 'John',
//     age: 25
// };
// const student = {
//     gender: 'Male'
// };
// const newObj = Object.assign(person, student);
// console.log(newObj);
// Example 2 : By Spread operator :
// const person = {
//     name: 'John',
//     age: 25
// };
// const student = {
//     gender: 'Male'
// };
// const newObj = { ...person, ...student }
// console.log(newObj);

// Q8. JavaScript Program to Count the Number of Keys/Properties in an Object ?
// Example 1 : By for in loop :
// const person = {
//     name: 'John',
//     age: 25,
//     hobbies: ['coding', 'singing', 'playing']
// };
// let count = 0;
// for (let key in person) {
//     ++count;
// }
// console.log(count);
// Example 2 : By Object.keys method :
// const person = {
//     name: 'John',
//     age: 25,
//     hobbies: ['coding', 'singing', 'playing']
// };
// let count = Object.keys(person).length;
// console.log(count);

// Q9. JavaScript Program to Add Key/Value Pair to an Object ?
// Example 1 : By Dot (.) Notation :
// const person = {
//     name: 'John',
//     age: 25,
//     hobbies: ['coding', 'singing', 'playing']
// };
// person.city = 'Delhi';
// console.log(person);
// Example 2 : By Square Bracket ([]) Notation :
// const person = {
//     name: 'John',
//     age: 25,
//     hobbies: ['coding', 'singing', 'playing']
// };
// person['city'] = 'Delhi';
// console.log(person);

// Q10. JavaScript Program to Convert Objects to Strings ?
// Example 1 : By JSON.stringyfy() :
// const person = {
//     name: 'John',
//     age: 25,
//     hobbies: ['coding', 'singing', 'playing']
// };
// const data = JSON.stringify(person)
// console.log(data);
// console.log(typeof data);
// Example 2 : By String()  :
// const person = {
//     name: 'John',
//     age: 25,
//     hobbies: ['coding', 'singing', 'playing']
// };
// const data1 = String(person);
// const data2 = String(person['name']);
// console.log(data1);
// console.log(typeof data1);
// console.log(data2);
// console.log(typeof data2);

// Q11. JavaScript Program to Replace all Instances of a Character in a String ?
// example 1 : By Regex /a/g : /g represents that the operation is carried out for all in instances of the string.
// const string = 'JavaScript is a Programing Language';
// const splitString = string.replace(/a/g, 'A');
// console.log(splitString);
// Example 2 : By split & join built in methoda :
// The split('a') method splits the string into an array.
// The join('A') method joins all the array elements into a string by adding A between each array element.
// const string = 'JavaScript is a Programing Language';
// const splitString = string.split('a');
// const joinString = splitString.join('A');
// console.log(splitString);
// console.log(joinString);

// Q12. JavaScript Program to Remove Specific Item From an Array ?
// // Example 1 : By for loop :
// function removeItemFromArray(array, item) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== item) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }
// const result = removeItemFromArray([1, 2, 3, 1, 2, 3, 4, 5, 3], 3);
// console.log(result);
// Example 2 : By splice :
// only works for arrays without duplicate elements.
// Only the first element of an array that matches is removed.
// function removeItemFromArray(array, item) {
//     const index = array.indexOf(item);
//     if (index > -1) {
//         array.splice(index, 1);
//     }
//     return array;
// }
// const result = removeItemFromArray([1, 2, 3, 1, 2, 3, 4, 5, 3], 3);
// console.log(result);

// Q13. JavaScript Program to Check if An Array Contains a Specified Value ?
// Example 1 : by includes() :
// const array = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const hasValue = array.includes('React');
// if (hasValue) {
//     console.log('Yes, Array contains a value');
// }
// else {
//     console.log('Array does not contains a value');
// }
// / Example 2 : by indexOf :
// const array = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const hasValue = array.indexOf('React') !== -1;
// if (hasValue) {
//     console.log('Yes, Array contains a value');
// }
// else {
//     console.log('Array does not contains a value');
// }

// Q14. JavaScript Program to Insert Item in an Array at specified index ?
// The splice() method adds and / or removes an item.
// By splice() : In the splice() method,
// The first argument specifies the index where you want to insert an item.
// The second argument(here 0) specifies the number of items to remove.
// The third argument specifies the element that you want to add to an array.
// function insertElement() {
//     const array = [1, 2, 3, 4, 5, 6];
//     const index = 2;
//     const element = 10;
//     array.splice(index, 0, element);
//     console.log(array);
// }
// insertElement();
// By for loop :
// function insertElement() {
//     const array = [1, 2, 3, 4, 5, 6];
//     const index = 2;
//     const element = 10;
//     for (let i = array.length; i > index; i--) {
//         array[i] = array[i - 1];
//     }
//     array[index] = element;
//     console.log(array);
// }
// insertElement();

// Better Way :
// function insertItem(array, index, item) {
//     for (let i = array.length; i > index; i--) {
//         array[i] = array[i - 1];
//     }
//     array[index] = item;
//     return array;
// }
// let result;
// result = insertItem([5, 10, 15, 25], 3, 20);
// console.log(result);

// Q15. JavaScript Program to Append an Object to an Array ?
// Example 1 : by push() :
// function insertObject(arr, obj) {
//     arr.push(obj);
//     console.log(arr);
// }
// const array = [1, 2, 3];
// const object = { a: 5, b: 9 };
// insertObject(array, object);
// Example 1 : by splice() :
// function insertObject(arr, obj) {
//     const index = arr.length;
//     arr.splice(index, 0, obj)
//     console.log(arr);
// }
// const array = [1, 2, 3];
// const object = { a: 5, b: 9 };
// insertObject(array, object);
// Example 1 : by spread... operator :
// function insertObject(arr, obj) {
//     arr = [...arr, obj]
//     console.log(arr);
// }
// const array = [1, 2, 3];
// const object = { a: 5, b: 9 };
// insertObject(array, object);

// Q16. JavaScript Program to Check if An Object is An Array ?
// The Array.isArray() method returns true if an object is an array, otherwise returns false.
// Note: For an array, the typeof operator returns an object.
// function checkObject(arr) {
//     const result = Array.isArray(arr);
//     if (result) {
//         console.log(`[${arr}] is an Array`);
//     }
//     else {
//         console.log(`${arr} is Not an Array`);
//     }
// }
// const array = [1, 2, 3];
// checkObject(array);

// Q17. JavaScript Program to Empty an Array ?
// Example 1: Empty Array by Substituting New Array : 
// function emptyArr(arr) {
//     arr = [];
//     return arr;
// }
// const array = [1, 2, 3];
// console.log(array);
// const result = emptyArr(array);
// console.log(result);
// Example 2: Empty Array Using splice() : 
// function emptyArr(arr) {
//     arr.splice(0, arr.length);
//     return arr;
// }
// const array = [1, 2, 3];
// console.log(array);
// const result = emptyArr(array);
// console.log(result);
// Example 3: Empty Array by Setting Length 0 :
// function emptyArr(arr) {
//     arr.length = 0;
//     return arr;
// }
// const array = [1, 2, 3];
// console.log(array);
// const result = emptyArr(array);
// console.log(result);

// Q18. JavaScript Program to Add Element to Start of an Array ?
// Example 1: Add Element to Array Using unshift() : 
// function addStartElement(arr) {
//     arr.unshift(5);
//     console.log(arr);
// }
// const array = [1, 2, 3];
// const result = addStartElement(array);
// Example 2: Add Element to Array Using splice()
// function addStartElement(arr) {
//     arr.splice(0, 0, 5)
//     console.log(arr);
// }
// const array = [1, 2, 3];
// const result = addStartElement(array);
// Example 3: Add Element to Array Using Spread Operator :
// function addStartElement(arr) {
//     arr = [5, ...arr];
//     console.log(arr);
// }
// const array = [1, 2, 3];
// const result = addStartElement(array);
// Example 4: Add Element to Array Using concat() : 
// function addStartElement(arr) {
//     arr = [5].concat(arr);
//     console.log(arr);
// }
// const array = [1, 2, 3];
// const result = addStartElement(array);

// Q19. JavaScript Program to Remove Duplicates From Array ?
// Example 1: Using indexOf() and push() : 
// function getUnique(arr) {
//     let uniqueArr = [];
//     for (let i of arr) {
//         if (uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }
// const array = [1, 2, 1, 2, 3, 4, 3, 4];
// getUnique(array);

// Better Way :
// function mergeArray(array1, array2) {
//     const merge = array1.concat(array2);
//     let uniqueArr = [];
//     for (let i of merge) {
//         if (!uniqueArr.includes(i)) {
//             uniqueArr.push(i);
//         }
//     }
//     return uniqueArr;
// }
// const arr1 = [1, 2, 3, 4, 3];
// const arr2 = [3, 4, 5, 4];
// const result = mergeArray(arr1, arr2);
// console.log(result);

// Example 2: Using Set : A Set is a collection of unique values.
// function getUnique(arr) {
//     let uniqueArr = [...new Set(arr)];
//     console.log(uniqueArr);
// }
// const array = [1, 2, 1, 2, 3, 4, 3, 4];
// getUnique(array);

// Q20. JavaScript Program to Merge Two Arrays and Remove Duplicate Items ?
// Example 1: Using concat() and for Loop :
// function mergeUniqueArray(arr1, arr2) {
//     const mergeArray = arr1.concat(arr2);
//     const uniqueArray = [];
//     for (let i of mergeArray) {
//         if (uniqueArray.indexOf(i) === -1) {
//             uniqueArray.push(i);
//         }
//     }
//     console.log(uniqueArray);
// }
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5];
// mergeUniqueArray(array1, array2);
// Example 2: Using Spread Syntax and Set : 
// function mergeUniqueArray(arr1, arr2) {
//     const mergeArray = [...arr1, ...arr2]
//     const uniqueArray = [...new Set(mergeArray)];
//     console.log(uniqueArray);
// }
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5];
// mergeUniqueArray(array1, array2);

// Q21. JavaScript Program to Sort Array of Objects by Property Values ?
// Example 1: Sort Array by Property Name : 
// function compareNames(a, b) {
//     const name1 = a.name.toUpperCase();
//     const name2 = b.name.toUpperCase();
//     let comparision = 0;
//     if (name1 > name2) {
//         comparision = 1;
//     }
//     else if (name1 < name2) {
//         comparision = -1;
//     }
//     return comparision;
// }
// const student = [
//     { name: 'selena', age: 34 },
//     { name: 'justin', age: 18 },
//     { name: 'John', age: 25 }
// ];
// const result = student.sort(compareNames);
// console.log(result);
// // Example 2: Sort Array by Property Age :
// function compareNames(a, b) {
//     return a.age - b.age;
// }
// const student = [
//     { name: 'selena', age: 34 },
//     { name: 'justin', age: 18 },
//     { name: 'John', age: 25 }
// ];
// const result = student.sort(compareNames);
// console.log(result);
// Example 3: Sort Array by Name Length :
// function compareNames(a, b) {
//     return a.name.length - b.name.length;
// }
// const student = [
//     { name: 'selena gomez', age: 34 },
//     { name: 'justin bieber', age: 18 },
//     { name: 'John cena', age: 25 }
// ];
// const result = student.sort(compareNames);
// console.log(result);

// Q22. JavaScript Program to Create Two Dimensional Array ?
// function twoDimensionArray(a, b) {
//     let array = [];
//     for (let i = 0; i < a; i++) {
//         array[i] = [];
//     }
//     for (let i = 0; i < a; i++) {
//         for (let j = 0; j < b; j++) {
//             array[i][j] = j;
//         }
//     }
//     return array;
// }
// const noOfArray = 2;
// const noOfElement = 3;
// const result = twoDimensionArray(noOfArray, noOfElement);
// console.log(result);

// Q23. JavaScript Program to Extract Given Property Values from Objects as Array ?
// Example 1: Extract Value Using map() :
// function extractValue(array, prop) {
//     const extractedValue = array.map(item => item[prop]);
//     return extractedValue;
// }
// const objArray = [
//     { a: 5, b: 7, c: 9 },
//     { a: 15, b: 17, c: 19 },
//     { a: 35, b: 37, c: 39 }
// ];
// const result = extractValue(objArray, 'a');
// console.log(result);
// Example 2: Extract Value Using for Loop :
// function extractValue(array, prop) {
//     let extractedValue = [];
//     for (let i = 0; i < array.length; i++) {
//         extractedValue.push(array[i][prop]);
//     }
//     return extractedValue;
// }
// const objArray = [
//     { a: 5, b: 7, c: 9 },
//     { a: 15, b: 17, c: 19 },
//     { a: 35, b: 37, c: 39 }
// ];
// const result = extractValue(objArray, 'a');
// console.log(result);

// Q24. JavaScript Program to Compare Elements of Two Arrays ?
// Example 1 : Compare Arrays Using JSON.stringify() : 
// function compareArrays(arr1, arr2) {
//     const result = JSON.stringify(arr1) == JSON.stringify(arr2);
//     if (result) {
//         console.log('The Arrays have same elements.');
//     }
//     else {
//         console.log('The Arrays have different elements.');
//     }
// }
// const array1 = [1, 2, 3, 4];
// const array2 = [1, 2, 3, 4];
// compareArrays(array1, array2);
// Example 2: Compare Arrays using for Loop :
// This does not work if the array element contains objects. 
// function compareArrays(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return false;
//     }
//     else {
//         let result = false;
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] !== arr2[i]) {
//                 return false;
//             }
//             else {
//                 result = true
//             }
//         }
//         return result;
//     }
// }
// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];
// const result = compareArrays(array1, array2);
// if (result) {
//     console.log('The Arrays have same elements.');
// }
// else {
//     console.log('The Arrays have different elements.');
// }

// Q25. JavaScript Program to Get Random Item From an Array ?
// function getRandomItem(arr) {
//     const index = Math.floor(Math.random() * arr.length);
//     const item = arr[index];
//     return item;
// }
// const array = [1, 2, 3, 'Hello', 4, 5];
// const result = getRandomItem(array);
// console.log(result);

// Q26. JavaScript Program To Perform Intersection Between Two Arrays ?
// intersection contains the elements of array1 that are also in array2 :
// Example 1: Perform Intersection Using Set : 
// function performIntersection(arr1, arr2) {
//     let setA = new Set(arr1);
//     let setB = new Set(arr2);
//     let intersectionResult = [];
//     for (let i of setB) {
//         if (setA.has(i)) {
//             intersectionResult.push(i);
//         }
//     }
//     return intersectionResult;
// }
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6];
// const result = performIntersection(array1, array2);
// console.log(result);
// Example 2: Perform Intersection Using filter() Method : 
// 2nd way : const intersectionResult = arr1.filter(x => arr2.includes(x)) :
// function performIntersection(arr1, arr2) {
//     const intersectionResult = arr1.filter(x => arr2.indexOf(x) != -1);
//     return intersectionResult;
// }
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6];
// const result = performIntersection(array1, array2);
// console.log(result);

// Q27. JavaScript Program to Split Array into Smaller Chunks ?
// Example 1: Split Array Using slice() : 
// function splitIntoChunks(arr, chunk) {
//     for (let i = 0; i < arr.length; i += chunk) {
//         let tempArr;
//         tempArr = arr.slice(i, i + chunk);
//         console.log(tempArr);
//     }
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunks = 2;
// const result = splitIntoChunks(array, chunks);
// Example 2: Split Array Using splice() : 
// function splitIntoChunks(arr, chunk) {
//     while (arr.length > 0) {
//         let tempArr;
//         tempArr = arr.splice(0, chunk);
//         console.log(tempArr);
//     }
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunks = 2;
// const result = splitIntoChunks(array, chunks);

// Q28. JavaScript Program To Check If A Variable Is undefined or null ? 
// Example 1: Check undefined or null : 
// function checkVariable(variable) {
//     if (variable == null) {
//         console.log('Variable is null or undefined');
//     }
//     else {
//         console.log('Variable is neighter null nor undefined.');
//     }
// }
// let data;
// checkVariable(data);
// checkVariable(5);
// checkVariable('Apple');
// checkVariable(null);
// Example 2: using typeof : 
// We cannot use the typeof operator for null as it returns object.
// function checkVariable(variable) {
//     if (typeof variable === 'undefined' || variable === null) {
//         console.log('Variable is null or undefined');
//     }
//     else {
//         console.log('Variable is neighter null nor undefined.');
//     }
// }
// let data;
// checkVariable(data);
// checkVariable(5);
// checkVariable('Apple');
// checkVariable(null);

// Q29. JavaScript Program to Illustrate Different Set Operations ?
// Example 1: Set Union Operation : 
// The set union operation combines elements of both sets into one.
// The set does not contain duplicate values.
// function union(a, b) {
//     const unionset = new Set(a);
//     for (let i of b) {
//         unionset.add(i);
//     }
//     return unionset;
// }
// const setA = new Set(['Apple', 'Banana', 'Grapes']);
// const setB = new Set(['Orange', 'Banana', 'Mango']);
// const result = union(setA, setB);
// console.log(result);
// Example 2: Set Intersection Operation : 
// The set intersection operation represents elements that are present in both setA and setB.
// function intersection(a, b) {
//     let intersectionSet = new Set();
//     for (let i of b) {
//         if (a.has(i)) {
//             intersectionSet.add(i);
//         }
//     }
//     return intersectionSet;
// }
// const setA = new Set(['Apple', 'Banana', 'Grapes']);
// const setB = new Set(['Orange', 'Banana', 'Mango']);
// const result = intersection(setA, setB);
// console.log(result);
// Example 3: Set Difference Operation : 
// elements of set a that are not in set b : 
// function difference(a, b) {
//     let differenceSet = new Set(a);
//     for (let i of b) {
//         if (setA.has(i)) {
//             differenceSet.delete(i);
//         }
//     }
//     return differenceSet;
// }
// const setA = new Set(['Apple', 'Banana', 'Grapes']);
// const setB = new Set(['Orange', 'Banana', 'Mango']);
// const result = difference(setA, setB);
// console.log(result);
// Example 4: Set Subset Operation : 
// true if all elements of set b is in set a : 
// function subset(a, b) {
//     for (let i of b) {
//         if (!a.has(i)) {
//             return false;
//         }
//     }
//     return true;
// }
// const setA = new Set(['Apple', 'Banana', 'Grapes']);
// const setB = new Set(['Orange', 'Banana', 'Mango']);
// const setC = new Set(['Apple', 'Grapes']);
// const result1 = subset(setA, setB);
// const result2 = subset(setA, setC);
// console.log(result1);
// console.log(result2);


// Q. ** imp ** :
// Return all Pairs of given Array Elements whose addition = Target Sum.
// function pairSum(array, targetSum) {
//     let pair = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === targetSum) {
//                 pair.push([array[i], array[j]]);
//             }
//         }
//     }
//     return pair;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sum = 12;
// const result = pairSum(arr, sum);
// console.log(result);

// Q. ** imp ** :
// Convert Multidimensional Array in 1D Array, without flat method. :
// function flattenArray(array) {
//     let newArr = [];
//     for (let i of array) {
//         if (Array.isArray(i)) {
//             newArr = newArr.concat(flattenArray(i))
//         } else {
//             newArr.push(i);
//         }
//     }
//     return newArr;
// }
// const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// const arr2 = [1, 2, [3, 4], 5, [6, 7]];
// let result;

// // Without flat method :
// result = flattenArray(arr);
// console.log(result);

// result = flattenArray(arr2);
// console.log(result);

// // result = arr.flat(3);
// // console.log(result);


// ***  End ***


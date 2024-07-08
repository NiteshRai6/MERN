'use strict';
// 1. Array length :
// const array = [1, 2, 3, 4];
// const result1 = array.length;
// console.log(result1);
// array.length = 6;
// console.log(array);
// console.log(array.length);
// array.length = 2;
// console.log(array);
// console.log(array.length);

// 2. Array reverse() :
// const array = [1, 2, 3, 4];

// array.reverse();
// console.log(array);

// const reverseArray = [...array].reverse();
// console.log(array);
// console.log(reverseArray);

// 3. Array sort() :
// const array1 = [8, 10, 200, 54, 9, 66];
// array1.sort();
// console.log(array1);

// array1.sort(function (a, b) {
//     return a - b;
// })

// array1.sort((a, b) => {
//     return a - b;
// })

// array1.sort((a, b) => a - b);

// console.log(array1);

// const array2 = ['grapes', 'apple', 'Banana', 'Mango'];
// array2.sort();
// console.log(array2);

// array2.sort((a, b) => a.length - b.length);
// console.log(array2);

// array2.sort((a, b) => a.toLocaleLowerCase() < b.toLocaleLowerCase() ? -1 : 1);
// console.log(array2);

// 4. Array fill() :
// const array = [1, 2, 3, 4];
// console.log(array);
// array.fill('apple');
// console.log(array);
// array.fill(5, 1, 3);
// console.log(array);
// array.fill(10, -3, -5);
// console.log(array);
// array.fill('mango', -2);
// console.log(array);
// array.fill('aaa', -3, -1);
// console.log(array);

// 5. Array join() :
// const array = [1, 2, 3, 4];
// console.log(array);
// const result1 = array.join();
// console.log(result1);
// const resul2 = array.join('');
// console.log(resul2);
// const resul3 = array.join(' ');
// console.log(resul3);
// const resul4 = array.join(' | ');
// console.log(resul4);

// const array = [3, '.', 1, 4];
// const result = array.join('');
// console.log(result);

// const array = [32, 'apple', undefined];
// const result = array.join(' and ');
// console.log(result);

// 6. Array toString() :
// const array = ['apple', 1, 2, ['mango,8']];
// const result = array.toString();
// console.log(result);
// const array2 = [1, 2, 3, 'grapes'];
// const resul2 = array2.toString();
// console.log(resul2);

// 7. Array pop() : 
// const array = [1, 2, 3];
// const result = array.pop();
// console.log(result);
// console.log(array);

// const array = [1, 2, [10.20], ['apple', 76, 98]];
// const result = array.pop();
// console.log(result);
// console.log(array);

// 8. Array shift() :
// const array = [1, 2, 3];
// const result = array.shift();
// console.log(result);
// console.log(array);

// const array = [1, 2, [10.20], ['apple', 76, 98]];
// const result = array.shift();
// console.log(result);
// console.log(array);

// 9. Array push() :
// const array = [1, 2, 3];
// const result = array.push(4, 'React');
// console.log(result);
// console.log(array);

// const array = [1, 2, [10.20], ['apple', 76, 98]];
// const result = array.push('Java', [78, 90], { age: 26 });
// console.log(result);
// console.log(array);

// 10. Array unshift() :
// const array = [1, 2, 3];
// const result = array.unshift(4, 'React');
// console.log(result);
// console.log(array);

// const array = [1, 2, [10.20], ['apple', 76, 98]];
// const result = array.unshift('Java', [78, 90], { age: 26 });
// console.log(result);
// console.log(array);

// 11. Array concat() :
// const array1 = [1, 2, 3];
// const array2 = ['apple', 'mango'];
// const result1 = array1.concat('banana', 10, array1);
// console.log(result1);
// console.log(array1);

// const array1 = [1, 2, 3];
// const array2 = ['apple', 'mango', [100, 200], { a: 76 }];
// const result1 = array1.concat(array2);
// console.log(result1);
// console.log(array1);

// array2[0] = 11;
// console.log(result1);
// console.log(array2);

// array2[3].a = 18;
// array2[2].push('aaa');
// console.log(array2);
// console.log(result1);

// 12. Array splice() :
// const array = [1, 2, 3, 4];

// const result = array.splice();
// console.log(result);
// console.log(array);

// const result = array.splice(0);
// console.log(result);
// console.log(array);

// const result = array.splice(2);
// console.log(result);
// console.log(array);

// const result = array.splice(1, 2, 10, 'apple');
// console.log(result);
// console.log(array);

// const fruit = 'mango';
// const result = array.splice(1, 2, 10, 'apple', fruit, 100);
// console.log(result);
// console.log(array);

// const result = array.splice(1, 0, 10, 'apple');
// console.log(result);
// console.log(array);

// const result = array.splice(2, 1);
// console.log(result);
// console.log(array);

// const result = array.splice(-2, 1, 10, 'apple');
// console.log(result);
// console.log(array);

// const result = array.splice(1, -2, 10, 'apple');
// console.log(result);
// console.log(array);

// const result = array.splice(5, 2, 10, 'apple');
// console.log(result);
// console.log(array);

// const result = array.splice(-5, 2, 10, 'apple');
// console.log(result);
// console.log(array);

// const result = array.splice(-3, 2, 10, 'apple');
// console.log(result);
// console.log(array);

// 13. Array lastIndexOf() :
// const array = [1, 2, 3, 1];

// const result1 = array.lastIndexOf(1);
// console.log(result1);

// const result1 = array.lastIndexOf(1, 2);
// console.log(result1);

// const result1 = array.lastIndexOf(1, -2);
// console.log(result1);

// const result1 = array.lastIndexOf(1, 4);
// console.log(result1);

// 14. Array indexOf() :
// const array = [1, 2, 3, 1, 2];

// const result1 = array.indexOf(1);
// console.log(result1);

// const result1 = array.indexOf(2, 2);
// console.log(result1);

// const result1 = array.indexOf(1, -1);
// console.log(result1);

// const result1 = array.lastIndexOf(2, -1);
// console.log(result1);

// Finding All the Occurrences of an Element :
// function findAllIndex(array, element) {
//     let indices = [];
//     let currentIndex = array.indexOf(element);
//     while (currentIndex != -1) {
//         indices.push(currentIndex);
//         currentIndex = array.indexOf(element, currentIndex + 1)
//     }
//     return indices;
// }
// const arr = [1, 2, 2, 3, 4, 1, 2];
// const result = findAllIndex(arr, 2);
// console.log(result);

// Finding If Element exists else Adding the Element : 
// function chechOrAdd(array, element) {
//     if (array.indexOf(element) === -1) {
//         array.push(element);
//         console.log(`${element} not found! so updated the array.`);
//     }
//     else {
//         console.log(`${element} is already in the array.`);
//     }
//     return array;
// }
// const arr = [1, 2, 3];
// const result = chechOrAdd(arr, 18);
// console.log(result);

// 15.Array of() Method :
// const array = Array.of(1, 2, 'apple', 4);
// console.log(array);

// const array = Array(1, 2, 'apple', 4);
// console.log(array);

// const array = Array(3);
// console.log(array);

// const array = Array.of(3);
// console.log(array);

// 16. Array slice() :
// const array = [1, 'apple', 3, 'mango'];

// const result = array.slice();
// console.log(result);

// const result = array.slice(1, 3);
// console.log(result);

// const result = array.slice(-2, 3);
// console.log(result);

// const result = array.slice(-2, -1);
// console.log(result);

// const result = array.slice(2, array.length);
// console.log(result);

// const array = [1, 2, [10, 20], 3, { a: 100, b: 200 }];
// const result = array.slice();
// console.log(result);

// array[1] = 'apple';
// console.log(array);
// console.log(result);

// array[4] = 'apple';
// console.log(array);
// console.log(result);

// array[4].b = 'apple';
// console.log(array);
// console.log(result);

// 17. Array findIndex() :
// const array = [1, 27, 3, 4];
// const firstEvenIndex = array.findIndex(element => element % 2 === 0);
// console.log(firstEvenIndex);

// const team = [
//     { name: 'john', age: 16 },
//     { name: 'selena', age: 14 },
//     { name: 'taylor', age: 23 },
//     { name: 'swift', age: 34 },
// ];
// function isAdult(member) {
//     return member.age >= 18;
// }

// const firstAdultIndex = team.findIndex(isAdult);
// console.log(firstAdultIndex);

// const firstAdultIndex = team.findIndex(menubar => menubar.age >= 18);
// console.log(firstAdultIndex);

// 18. Array find() :
// const array = [1, 27, 3, 4];
// const firstEvenIndex = array.find(element => element % 2 === 0);
// console.log(firstEvenIndex);

// const team = [
//     { name: 'john', age: 16 },
//     { name: 'selena', age: 14 },
//     { name: 'taylor', age: 23 },
//     { name: 'swift', age: 34 },
// ];
// const firstAdultIndex = team.find(menubar => menubar.age >= 18);
// console.log(firstAdultIndex);

// 19. Array includes() :
// const array = [1, 2, 'Apple', 3, 4, 'Mango', 5];

// const result = array.includes(3);
// console.log(result);

// const result = array.includes(7);
// console.log(result);

// const result = array.includes('apple');
// console.log(result);

// const result = array.includes('Apple');
// console.log(result);

// 20. Array reduce() :
// const array = [1, 2, 3, 4];
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);

// const array = ['JavaScript ', 'React ', 'Node '];
// const result = array.reduce((accumulator, currentValue) =>
//     accumulator + currentValue);
// console.log(result);

// const expense = [11500, 8000, 7000, 500];
// const salary = 30000;
// const remain = expense.reduce((accumulator, currentValue) =>
//     accumulator - currentValue, salary
// );
// console.log(remain);

// Remove Duplicate Items from Array : 
// const array = [1, 2, 3, 1, 2, 4];
// const uniqueArr = array.reduce((accumulator, currentValue) => {
//     if (accumulator.indexOf(currentValue) === -1) {
//         accumulator.push(currentValue);
//     }
//     return accumulator;
// }, []);
// console.log(uniqueArr);

// Grouping Objects by a property :
// const people = [
//     { name: 'selena', age: 18 },
//     { name: 'john', age: 34 },
//     { name: 'charlie', age: 18 },
//     { name: 'carry', age: 65 },
//     { name: 'taylor', age: 18 },
// ];

// function groupBy(objectArray, property) {
//     return objectArray.reduce((accumulator, currentObject) => {
//         let key = currentObject[property];
//         if (!accumulator[key]) {
//             accumulator[key] = [];
//         }
//         accumulator[key].push(currentObject);
//         return accumulator;
//     }, {})
// }

// const groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople);


// 21. Array reduceRight() :
// const array = [1, 2, 3, 4];
// const sum = array.reduceRight((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);

// const array = ['JavaScript ', 'React ', 'Node '];
// const result = array.reduceRight((accumulator, currentValue) =>
//     accumulator + currentValue);
// console.log(result);

// const expense = [11500, 8000, 7000, 500];
// const salary = 30000;
// const remain = expense.reduceRight((accumulator, currentValue) =>
//     accumulator - currentValue, salary
// );
// console.log(remain);

// 22.Array isArray() :
// console.log(Array.isArray([]));
// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray('apple'));
// console.log(Array.isArray(new Array(3)));
// console.log(Array.isArray(null));
// console.log(Array.isArray({}));

// 23. Array filter() :
// const array = [1, 2, 3, 4, 5];
// const even = array.filter(num => num % 2 === 0);
// console.log(even);

// const price = [100, 200, null, 300, '4 thousands'];
// const filteredPrice = price.filter(item => item > 100 && !Number.isNaN(item));
// console.log(filteredPrice);

// const languages = ['React', 'Node', 'Next', 'Javascript', 'Rust'];

// function searchFor(arr, query) {
//     function condition(element) {
//         return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//     }
//     return arr.filter(condition);
// }

// const searchFor = (arr, query) => arr.filter(element =>
//     element.toLowerCase().indexOf(query.toLowerCase()) !== -1);

// const lang1 = searchFor(languages, 'r');
// console.log(lang1);

// const lang2 = searchFor(languages, 'ne');
// console.log(lang2);

// 24. Array map() :
// const array = [1, 2, 3, 4];
// const cube = array.map(item => item ** 3);
// console.log(cube);

// const employees = [
//     { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
//     { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//     { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
//     { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
// ];
// const data = employees.map(obj => {
//     let newObj = {};
//     newObj.name = obj.name;
//     newObj.netEarning = obj.salary + obj.bonus - obj.tax;
//     return newObj;
// });
// console.log(data);

// 25. Array forEach() :
// const array = [1, 2, 3, 4, 5];
// const result = array.forEach(item => {
//     console.log(item ** 2)
// });
// console.log(result);
// console.log(array);

// Using thisArg : 
// class Counter {
//     constructor() {
//         this.count = 0;
//         this.sum = 0;
//         this.product = 1;
//     }
// }

// Counter.prototype.execute = function (array) {
//     array.forEach(entry => {
//         ++this.count;
//         this.sum += entry;
//         this.product *= entry;
//     }, this);
// }

// const obj1 = new Counter();
// obj1.execute([1, 2, 3, 4]);
// console.log(` 
//     Count = ${obj1.count}, 
//     Sum = ${obj1.sum},
//     Product = ${obj1.product} 
//     `);

// const obj2 = new Counter();
// obj2.execute([10, , 5, 2]);
// console.log(` 
//     Count = ${obj2.count}, 
//     Sum = ${obj2.sum},
//     Product = ${obj2.product} 
//     `);

// 26. Array some() :
// const array = [2, 6, 9];
// const result = array.some(item => item % 2 === 1);
// console.log(result);

// 27. Array.every() : 
// const array = [2, 6, 9];
// const result = array.every(item => item % 2 === 1);
// console.log(result);

// 28. Array entries() :
// const array = ['a', 'e', 'i', 'o', 'u'];
// const iteretor = array.entries();
// console.log(iteretor);

// for (let entry of iteretor) {
//     console.log(entry);
// }

// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);

// 29. Array keys() :
// const array = ['a', 'e', 'i', 'o', 'u'];
// const iteretor = array.keys();
// console.log(iteretor);

// for (let entry of iteretor) {
//     console.log(entry);
// }

// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);

// 30. Array values() :
// const array = ['a', 'e', 'i', 'o', , 'u'];
// const iteretor = array.values();
// console.log(iteretor);

// for (let entry of iteretor) {
//     console.log(entry);
// }

// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);
// console.log(iteretor.next().value);

// 31. Array.from() :
// const array = Array.from('React');
// console.log(array);

// const set = new Set([1, 2, 3]);
// const array = Array.from(set);
// console.log(array);

// const set = new Set([1, 2, 3]);
// const array = Array.from(set, item => item ** 2);
// console.log(array);

// 32. Array constructor :
// const array = [1, 2, 3];
// const arrConstructor = array.constructor;
// console.log(arrConstructor);

// 33. Array copyWithin() : 
// arr.copyWithin(target, start, end);

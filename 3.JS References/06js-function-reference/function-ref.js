'use strict';

// 1. Function toString() : 
// function add(a, b) {
//     return a + b;
// }
// console.log(add);
// const funStr = add.toString();
// console.log(funStr);

// const data = () => console.log(5);
// console.log(data);
// const funStr2 = data.toString();
// console.log(funStr2);

// 2. Function.length :
// function func1(a, b) { };
// function func2() { };
// function func3(...args) { };
// function func4(a, b = 10, c) { };
// const arFun = (a, b) => a + b;
// console.log(func1.length);
// console.log(func2.length);
// console.log(func3.length);
// console.log(func4.length);
// console.log(arFun.length);

// function with array of arguments : can take any number of input.
// function test(...args) {
//     console.log(args);
//     let sum = 0;
//     for (let i of args) {
//         sum += i;
//     }
//     return sum;
// }
// const result = test(1, 2, 3, 4);
// console.log(result);

// 3. Function.name 
// function add() { };
// console.log(add.name);

// console.log((new Function).name);

// console.log(Function.name);

// console.log(Function().name);

// const data = (a, b) => a + b;
// console.log(data.name);

// function test() { };
// const result = test;
// console.log(result.name);

// 4. Function call() : 
// const person = {
//     name: 'John',
//     age: 25
// };
// function greet(city, hobby) {
//     console.log(`Name is ${this.name}, Age is ${this.age}, City is ${city} and Hobby is ${hobby}`);
// };
// greet.call(person, 'Delhi', 'Cricket');

// const Human = {
//     name: 'Selena',
//     info() {
//         return `Name is ${this.name}, Age is ${this.age}`
//     }
// }
// const student = {
//     name: 'John',
//     age: 16,
// }
// const result = Human.info.call(student);
// console.log(result);

// class Human {
//     constructor(name, city) {
//         this.name = name;
//         this.city = city;
//     }
// }

// function Human(name, city) {
//     this.name = name;
//     this.city = city;
// }

// function Boy(name, city, play) {
//     Human.call(this, name, city);
//     this.age = 14;
//     this.play = play;
// }

// function Adult(name, city) {
//     Human.call(this, name, city);
//     this.age = 18;
// }

// const boy1 = new Human("Tom", "New York");
// console.log(boy1.name, boy1.city, boy1.age);

// const boy1 = new Boy("Selena", "Mumbai");
// console.log(boy1.name, boy1.city, boy1.age,);

// const adult1 = new Adult("John", "Los Angeles");
// console.log(adult1.name, adult1.city, adult1.age,);

// class Human {
//     constructor(name, city) {
//         this.name = name;
//         this.city = city;
//     }
// }

// class Boy extends Human {
//     constructor(name, city) {
//         super(name, city);
//         this.age = 14;
//     }
// }

// class Adult extends Human {
//     constructor(name, city) {
//         super(name, city);
//         this.age = 18;
//     }
// }

// const human1 = new Human('John', 'New York');
// console.log(human1.name, human1.city, human1.age);

// const boy1 = new Boy('charlie', 'Delhi');
// console.log(boy1.name, boy1.city, boy1.age);

// const adult1 = new Adult('Selena', 'California');
// console.log(adult1.name, adult1.city, adult1.age);

// 5. Function apply() :
// const person = {
//     name: 'John',
//     age: 25
// };
// function greet(city, hobby) {
//     console.log(`Name is ${this.name}, Age is ${this.age}, City is ${city} and Hobby is ${hobby}`);
// };
// greet.apply(person, ['Delhi', 'Cricket']);

// const Human = {
//     name: 'Selena',
//     info() {
//         return `Name is ${this.name}, Age is ${this.age}`
//     }
// }
// const student = {
//     name: 'John',
//     age: 16,
// }
// const result = Human.info.apply(student);
// console.log(result);

// apply() to Append two Arrays : 
// const array1 = [1, 2, 3];
// const array2 = [4, 5];

// const result1 = array1.push(array2);
// console.log(result1);
// console.log(array1);

// array1.push.apply(array1, array2);
// console.log(array1);

// const num = [1, 5, 3, 8];
// const max = Math.max.apply(null, num);
// console.log(max);

// const max2 = Math.max(1, 5, 3, 8);
// console.log(max2);

// 6. Function bind() :
// const Human = {
//     name: 'Selena',
//     info(city) {
//         return `Name is ${this.name}, Age is ${this.age} and City is ${city}`
//     }
// }
// const student = {
//     name: 'John',
//     age: 16,
// }
// const result = Human.info.bind(student, 'Delhi');
// console.log(result());


// *** End *** 


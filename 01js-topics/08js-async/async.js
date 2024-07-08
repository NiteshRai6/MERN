'use strict';


// *** Asynchronous JavaScript ***


// 68.
// function info(name, age) {
//     console.log(`Name is ${name} and Age is ${age}`);
// }
// setTimeout(info, 2000, 'John', 26);

// const intervalId = setTimeout(() => {
//     for (let i = 0; i <= 5; i++) {
//         console.log(i);
//     }
// }, 1000);
// console.log(intervalId);

// 69.
// function test(name, callback) {
//     console.log(`${name} from Higher Order Function.`);
//     callback();
// }
// function callMe() {
//     console.log('This is from callback function');
// }
// test('Selena', callMe);
// console.log('test');

// 70.
// 1st way :
// const array = [1, 2, 3];
// const data = new Promise(function (resolve, reject) {
//     if (array.includes(2)) {
//         resolve('Promise resolved');
//     }
//     else {
//         reject('Promise Rejected.')
//     }
// });
// data.then(function sucessValue1(result) {
//     console.log(result);
// })
//     .then(function sucessValue2() {
//         console.log('You can call multiple functions this way');
//     })
//     .catch(function errorValue(result) {
//         console.log(result);
//     })
//     .finally(function final() {
//         console.log('Finally code executed on fullfilled or rejected both states.');
//     });

// 2nd way :
// const array = [1, 2, 3];
// const data = new Promise((resolve, reject) => {
//     if (array.includes(2)) {
//         resolve('Promise Resolved.')
//     } else {
//         reject('Promise Rejected.')
//     }
// })
//     .then(result => {
//         console.log(result);
//     })
//     .then(() => {
//         console.log('You can call multiple function this way.');
//     })
//     .catch(error => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('Finally code executed on fullfilled or rejected both states.');
//     })

// 71. 
// async function test() {
//     console.log('Asynchronous Function');
//     return 1;
// }
// const data = test();
// console.log(data);

// test().then(result => {
//     console.log(result);
// });

// 72.
// const array = [1, 2, 3];
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (array.includes(2)) {
//             resolve('Promise resolved.');
//         } else {
//             reject('Promise Rejected.')
//         }
//     }, 2000)
// })

// async function getData() {
//     try {
//         const data = await promise;
//         console.log(data);
//         console.log('JavaScript in try block.');
//     } catch (error) {
//         console.log(error);
//         console.log('JavaScript in catch block.');
//     }
// }
// getData();

// 73.
// const array = [1, 2, 3];
// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// const promise = new Promise((resolve, reject) => {
//     console.log(3);
//     if (array.includes(2)) {
//         resolve('Promise Resolved.');
//     } else {
//         reject('Promise Rejected.')
//     }
// })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// async function test() {
//     console.log(4);
// }
// test();

// 74. Time logged 5 times because the 5th execution completes its entire sequence of instructions, including logging the time, before the interval is actually cleared and stops future executions.
// let count = 0;
// const interval = setInterval(() => {
//     count += 1;
//     if (count === 5) {
//         clearInterval(interval);
//     }
//     const date = new Date();
//     const time = date.toLocaleTimeString();
//     console.log(time);
// }, 2000);


// *** End ***


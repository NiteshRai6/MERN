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
// test().then(result => {
//     console.log(result);
// });


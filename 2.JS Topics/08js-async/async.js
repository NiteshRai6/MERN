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

// 74. **imp**
// Time logged 5 times because the 5th execution completes its entire sequence of instructions, including logging the time, before the interval is actually cleared and stops future executions.
// let count = 0;
// const interval = setInterval(() => {
//     count++;
//     if (count === 5) {
//         clearInterval(interval);
//     }
//     const time = new Date().toLocaleTimeString();
//     console.log(time);
// }, 1000);

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         const time = new Date().toLocaleTimeString();
//         console.log(time);
//     }, i * 1000)
// }


// 75. AJAX : Asynchronous JavaScript and XML : 
// xhr.open() third default parameter will be : true, means Asynchronous.
// if it will be written false, then it works as synchronous.
// By Callback : 
// const URL = 'https://jsonplaceholder.typicode.com/posts';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', URL);
// xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     }
//     else {
//         console.log('Something went wrong');
//     }
// }
// xhr.onerror = () => {
//     console.log('Network Error');
// }
// xhr.send();

// By Promise : 
// const URL = 'https://jsonplaceholder.typicode.com/posts';
// function getData(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             }
//             else {
//                 reject(new Error('Something Went Wrong'));
//             }
//         }
//         xhr.onerror = () => {
//             reject(new Error('Something Went Wrong'));
//         }
//         xhr.send();
//     })
// }
// getData('GET', URL)
//     .then(res => {
//         const data = JSON.parse(res);
//         return data;
//     })
//     .then(data => {
//         const id = data[5]?.id;
//         return id;
//     })
//     .then(id => {
//         const newUrl = `${URL}/${id}ss`
//         return getData('GET', newUrl);
//     })
//     .then(newData => {
//         const singleData = JSON.parse(newData);
//         console.log(singleData);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// fetch() : Gives promise by default, resolve it by chaining (.then);
// The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
// const URL = 'https://jsonplaceholder.typicode.com/posts';
// function getData(url) {
//     fetch(url)
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             }
//             else {
//                 throw new Error('Something went wrong');
//             }
//         })
//         .then(data => {
//             console.log(data);
//         })
// }
// getData(URL);

// function postData() {
//     const URL = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(URL, {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Selena',
//             body: 'Actor',
//             userId: 2
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             }
//             else {
//                 throw new Error('Something went wrong.')
//             }
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error(error);
//         })
// }
// postData();

// async await :
// const URL = 'https://jsonplaceholder.typicode.com/posts';
// async function getData() {
//     const res = await fetch(URL);
//     const data = await res.json();
//     console.log(data);
// }
// getData();


// *** End ***


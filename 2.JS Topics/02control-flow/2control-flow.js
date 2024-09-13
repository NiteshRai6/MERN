'use strict';

// *** JavaScript Control Flow ***


// 20. 
// let age = 18;
// if (age >= 18) console.log('You can vote');
// else console.log('You can not vote');
// const result = (age >= 18) ? 'You can vote' : 'You can not vote.';
// console.log(result);

// 21. 
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(`i = ${i}, j = ${j} `);
//     }
// }
// let i = 0;
// for (; i < 3;) {
//     console.log(i);
//     i++
// }

// 22.
// let i = 5;
// while (i > 0) {
//     console.log(i);
//     i--
// }
// let j = 5;
// do {
//     console.log(j);
//     j--;
// } while (j > 0);

// 23.
// for (let i = 0; i <= 3; i++) {
//     for (let j = 0; j <= 3; j++) {
//         if (j == 2) {
//             break;
//         }
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }
// console.log('2nd Loop');
// outerLoop: for (let i = 0; i <= 3; i++) {
//     innerLoop: for (let j = 0; j <= 3; j++) {
//         if (j == 2) {
//             break outerLoop;
//         }
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }

// 24. 
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// console.log('While Loop');
// let num = 0;
// while (num <= 10) {
//     if (num % 2 === 0) {
//         ++num;
//         continue;
//     }
//     console.log(num);
//     ++num;
// }
// console.log('Continue in Nested Loops');
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j <= 3; j++) {
//         if (j == 2) {
//             continue;
//         }
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }
// console.log('2nd Loop');
// outerLoop: for (let i = 0; i < 2; i++) {
//     innerLoop: for (let j = 0; j <= 3; j++) {
//         if (j == 2) {
//             continue outerLoop;
//         }
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }

// 25.
// let trafficLight = 'yellow';
// let message = '';
// switch (trafficLight) {
//     case 'red':
//         message = 'Stop immediately.'
//         break;
//     case 'yellow':
//         message = 'Prewpare to stop.';
//         break;
//     case 'green':
//         message = 'Continue driving.'
//         break;
//     default:
//         message = 'Invalid traffic light color.'
// }
// console.log(message);


// *** End ***


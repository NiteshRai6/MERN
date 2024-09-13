'use strict';


// *** Exception and Modules ***


// 46.
// setTimeout(() => {
//     try {
//         let result = 5 / a;
//         console.log(result);
//     }
//     catch (error) {
//         console.log(error);
//     }
//     finally {
//         console.log('This block finished');
//     }
// },1000);

// function processInput(input) {
//     try {
//         if (input === '') {
//             throw new Error('Input can not be empty.')
//         }
//         let number = parseInt(input);
//         if (isNaN(number)) {
//             throw new Error('Input must be a number.')
//         }

//         let result = number ** 3;
//         console.log(result);
//     }
//     catch (error) {
//         console.log('Error : ', error?.message);
//     }
//     finally {
//         console.log('Cleaning up the resources');
//     }
// }
// processInput('');
// processInput('apple');
// processInput(5);
// processInput();


// *** End ***


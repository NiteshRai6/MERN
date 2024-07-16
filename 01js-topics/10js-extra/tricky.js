'use strict';

// 1.
// for (var i = 1; i <= 5; i++) {
//     console.log(i);
// }

// 2.
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// 3.
// for (const i = 1; i <= 5; i++) {
//     console.log(i);
// }
// TypeError: Assignment to constant variable.

// 4. 
// for (var i = 1; i <= 5; i++) { }
// console.log(i);

// 5.
// for (let i = 1; i <= 5; i++) { }
// console.log(i);

// 6.
// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)
// }

// Variable Scope :
// The variable i is declared with var, which means it has function scope. This means that there is only one i variable shared across all iterations of the loop.
// When setTimeout is called, it schedules the callback function to be executed after i seconds, but it doesn't execute it immediately. By the time the scheduled functions run, the loop has already completed, and the value of i will be 6.
// As a result, all setTimeout callbacks will log the same value of i, which is 6.

// Execution Flow :
// The for loop runs and completes quickly.During this process, it schedules five setTimeout callbacks, each with different delays(1 second, 2 seconds, 3 seconds, 4 seconds, and 5 seconds).
// After the loop finishes, the value of i is 6.
// The setTimeout callbacks execute after their respective delays, but they all log the value 6 because they all reference the same i variable, which has been incremented to 6 after the loop ends.

// How Closure apply here for var :
// The var keyword declares i with function scope, resulting in a single i variable that is shared across all iterations.
// Each setTimeout callback forms a closure that captures the same i variable.
// By the time the callbacks execute, the loop has completed, and the value of i is 6.

// 7.
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)
// }

// Variable Scope :
// The variable i is declared with let, which means it has block scope.This means that each iteration of the loop gets its own separate instance of i.
// When setTimeout is called, it captures the current value of i at that particular iteration and schedules the callback function to execute after the specified delay.

// Execution Flow :
// The for loop runs and completes quickly, scheduling five setTimeout callbacks, each with different delays(1 second, 2 seconds, 3 seconds, 4 seconds, and 5 seconds).
// Each setTimeout captures the value of i at the time it was scheduled.
// After the loop completes, the scheduled setTimeout callbacks start executing one by one after their respective delays.

// Lexical Scope :

// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

// Lexical scope means that the accessibility of variables is determined by their location within the source code(i.e., where they are written in the code).It is also known as static scope.
// Hierarchy: JavaScript code is structured in a nested hierarchy of scopes, where inner functions have access to variables of their outer(parent) functions.

// How Lexical Scope Works :
// Creation Phase: When the code is compiled, JavaScript engine sets up the scope chain.Each function creates a new scope for itself.
// Execution Phase: When the code runs, it follows the scope chain to resolve variable references.If it can't find a variable in the current scope, it looks up the chain to the outer scope, and so on, until it reaches the global scope.

// What is a Closure ?
//     A closure is a function that retains access to its lexical scope(the scope in which it was defined) even when the function is executed outside that scope.This means that an inner function has access to the variables of its outer function even after the outer function has finished executing.

// How Closures Apply Here for let :
// In each iteration of the loop:

// A new i is created because of let, and it is scoped to that particular iteration.
// The arrow function inside setTimeout forms a closure, capturing the current value of i.
// When the setTimeout function executes after the specified delay, it uses the captured value of i from the closure.

// 8.
// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }

// 9.
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }

// 10.
// function foo() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
//     console.log('foo');
// }
// foo();

// 11.
// function foo() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
//     console.log('foo');
// }
// foo();

// 12.
// for (var i = 1; i <= 5; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     })(i);
// }

// Note IIFE :
// IIFE(Immediately Invoked Function Expression) is a powerful pattern in JavaScript used to:
// Create new scope and avoid variable collisions.
// Encapsulate code and create private variables / functions.
// Immediately execute code to set up logic or initialize variables.

// How IIFE Works :
// The key idea behind an IIFE is that the function is executed immediately after it is defined.The parentheses() around the function definition turn it into a function expression, and the trailing parentheses() immediately invoke it.

// IFE:
// An IIFE creates a new scope for each iteration of the loop.
// The current value of i is passed to the IIFE, creating a new i scoped to the IIFE.

// Closure:
// The setTimeout function inside the IIFE forms a closure, capturing the i from the IIFE scope.
// Each closure now captures a separate i, preserving the value at the time setTimeout was called.

// 13.
// for (let i = 1; i <= 5; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     })(i);
// }

// 14. delete password property from person object by different way.
// const person = {
//     id: 1,
//     name: 'john',
//     password: 1234
// }
// delete person.password;
// console.log(person);
// delete person['password'];
// console.log(person);
// const { password, ...rest } = person;
// console.log(rest);


// 15. To find combinations in an array that sum up to a specific value  ?
// function findPairsWithSum(array, targetSum) {
//     const length = array.length;
//     let pairs = [];
//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (array[i] + array[j] === targetSum) {
//                 pairs.push([array[i], array[j]])
//             }
//         }
//     }
//     return pairs;
// }
// const inputArray = [0, 7, 11, 5, 6, 9, 12, 4, 1];
// const sum = 12;
// const result = findPairsWithSum(inputArray, sum);
// console.log(result);

// 16. Square the array elements, and print the sum of only even elements.
// const array = [1, 2, 3, 4, 5];
// const result = array
//     .map(item => item ** 2)
//     .filter(item => item % 2 === 0)
//     .reduce((acc, value) => acc + value, 0);
// console.log(result);



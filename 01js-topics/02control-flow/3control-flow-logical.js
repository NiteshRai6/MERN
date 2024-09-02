'use strict';

// Q1. JavaScript Program to Solve Quadratic Equation ?
// let root1, root2;
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// let discriminant = b * b - 4 * a * c;

// // condition for real and different roots
// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // condition for real and equal roots
// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // if roots are not real
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//     console.log(
//         `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//     );
// }
// toFixed(2) is also used to rounds up the decimal number to two decimal values.

// Q2. Javascript Program to Check if a number is Positive, Negative, or Zero ?
// Way 1 : By if-else :
// const number = parseInt(prompt('Enter a number ?'));
// if (number > 0) {
//     console.log(`Given number ${number} is positive`);
// }
// else if (number == 0) {
//     console.log(`Given number ${number} is zero`);
// }
// else if (number < 0) {
//     console.log(`Given number ${number} is negative`);
// }
// else {
//     console.log(`Please enter a valid number`);
// }
// Way 2 : By Nested if-else :
// const number = parseInt(prompt('Enter a number ?'));
// if (number >= 0) {
//     if (number == 0) {
//         console.log(`Given number ${number} is zero`);
//     } else {
//         console.log(`Given number ${number} is positive`);
//     }
// }
// else if (number < 0) {
//     console.log(`Given number ${number} is negative`);
// }
// else {
//     console.log(`Please enter a valid number`);
// }
// Way 3 : By Ternary Operator :
// const number = parseInt(prompt('Enter a number ?'));
// const result = number >= 0 ? 'positive' : 'negative';
// console.log(result);

// Q3. Javascript Program to Check if a Number is Odd or Even ?
// const number = parseInt(prompt('Enter a number ?'));
// if (number % 2 === 0) {
//     console.log(`Given number ${number} is Even`);
// }
// else if (number % 2 === 1) {
//     console.log(`Given number ${number} is Odd`);
// }
// else {
//     console.log(`Please enter a valid number`);
// }
// Way 2 : By Ternary Operator :
// const number = parseInt(prompt('Enter a number ?'));
// const result = number % 2 === 0 ? 'Even' : 'Odd';
// console.log(`Given number ${number} is ${result}`);

// Q4. JavaScript Program to Find the Largest Among Three Numbers ?
// Way 1 : By If-alse :
// const number1 = parseFloat(prompt('Enter the first number ?'));
// const number2 = parseFloat(prompt('Enter the second number ?'));
// const number3 = parseFloat(prompt('Enter the third number ?'));
// if (number1 >= number2 && number1 >= number3) {
//     console.log(`${number1} is Largest among these Three Numbers`);
// }
// else if (number2 >= number1 && number2 >= number3) {
//     console.log(`${number2} is Largest among these Three Numbers`);
// }
// else if (number3 >= number1 && number3 >= number2) {
//     console.log(`${number3} is Largest among these Three Numbers`);
// }
// else {
//     console.log(`Please enter a valid number`);
// }
// Way 2 :
// const number1 = parseFloat(prompt('Enter the first number ?'));
// const number2 = parseFloat(prompt('Enter the second number ?'));
// const number3 = parseFloat(prompt('Enter the third number ?'));
// const largest = Math.max(number1, number2, number3);
// console.log(`${largest} is Largest among these Three Numbers`);

// Q5. JavaScript Program to Check Prime Number ? **imp**
// const number = parseInt(prompt('Enter a positive number ?'));
// let isPrime = true;
// if (number == 1) {
//     console.log('1 is neighter prime nor composite number.');
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is a Prime number`);
//     }
//     else {
//         console.log(`${number} is not a Prime number`);
//     }
// }
// else {
//     console.log(`${number} is not a Prime number`);
// }
// Better Way :
// function checkPrime(num) {
//     if (num < 2 || !Number.isInteger(num))
//         return `only Positive Integers greater than 1 are allowed.`;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return `${num} is Not a Prime Number`;
//     }
//     return `${num} is a Prime Number`;
// }
// let result;
// result = checkPrime(-7);
// console.log(result);
// result = checkPrime(-7.6);
// console.log(result);
// result = checkPrime(7);
// console.log(result);
// result = checkPrime(1);
// console.log(result);
// result = checkPrime(12);
// console.log(result);
// result = checkPrime(23);
// console.log(result);

// Q6. JavaScript Program to Print All Prime Numbers in an Interval ? **
// const lowerNumber = parseInt(prompt('Enter a positive lower number ?'));
// const higherNumber = parseInt(prompt('Enter a positive higher number ?'));
// console.log(`All prime numbers between ${lowerNumber} and ${higherNumber} are :`);
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//         }
//     }
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

//  Better Way :
// function primeList(min, max) {
//     if (min > max || !Number.isInteger(min) || !Number.isInteger(max))
//         return 'Enter Valid Positive Integer Range.';
//     if (min < 2) min = 2;
//     let primes = [];
//     for (let i = min; i <= max; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             primes.push(i);
//         }
//     }
//     return primes;
// }
// const result = primeList(7, 30);
// console.log(result);

// Q7. JavaScript Program to Find the Factorial of a Number ?
// const number = parseInt(prompt('Enter a positive integer ?'));
// if (number < 0) {
//     console.log('Factorial is only for positive integer');
// }
// else if (number == 0) {
//     console.log('Factorial of 0 is 1');
// }
// else {
//     let fact = 1;
//     for (let i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`Factorial of ${number} is ${fact}`);
// }

// Better way :
// function factorial(num) {
//     if (num < 0 || !Number.isInteger(num))
//         return 'Factorial is only for Positive Integers';
//     if (num === 0) return 'Factorial of 0 = 1';
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return `Factorial of ${num} = ${fact}`;
// }
// let result;
// result = factorial(5);
// console.log(result);
// result = factorial(7.8);
// console.log(result);
// result = factorial(0);
// console.log(result);
// result = factorial(-9);
// console.log(result);

// Factorial by Recusrion :
// function factorial(num) {
//     if (num < 0 || !Number.isInteger(num)) return false;
//     if (num === 0) return 1;
//     return num * factorial(num - 1);
// }
// let result;
// result = factorial(5);
// console.log(result);
// result = factorial(7.8);
// console.log(result);
// result = factorial(0);
// console.log(result);
// result = factorial(-9);
// console.log(result);
// result = factorial('apple');
// console.log(result);

// Q8. JavaScript Program to Display the Multiplication Table ?
// const number = parseInt(prompt('Enter a positive integer ?'));
// const range = parseInt(prompt('Enter a positive integer ?'));
// for (let i = 1; i <= range; i++) {
//     const result = number * i;
//     console.log(`${number} * ${i} = ${result}`);
// }

// Q9. JavaScript Program to Print the Fibonacci Sequence ? **
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.
// Way 1 : Fibonacci Series Up to n Terms :
// const number = parseInt(prompt('Enter the number of terms ?'));
// let n1 = 0, n2 = 1, nextTerm;
// console.log('Fibonacci Series is :');
// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// Better way :
// function fibonacci(term) {
//     if (term < 1 || !Number.isInteger(term))
//         return 'Only Positive Integers are allowed.';
//     const data = [];
//     let n1 = 0, n2 = 1, nextTerm;
//     for (let i = 1; i <= term; i++) {
//         data.push(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
//     return data;
// }
// let result;
// result = fibonacci(10);
// console.log(result);
// result = fibonacci(-5);
// console.log(result);
// result = fibonacci(0);
// console.log(result);
// result = fibonacci(6.8);
// console.log(result);
// result = fibonacci(20);
// console.log(result);

// Way 2 : Fibonacci Sequence Up to a Certain Number :
// const number = parseInt(prompt('Enter a positive number ?'));
// let n1 = 0, n2 = 1, nextTerm;
// console.log(n1);
// console.log(n2);
// nextTerm = n1 + n2;
// while (nextTerm <= number) {
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }

// Better Way :
// function fibonacci(num) {
//     if (num < 1 || !Number.isInteger(num))
//         return 'only Positive Integers are allowed.'
//     const data = [];
//     let n1 = 0, n2 = 1, nextTerm;
//     while (n1 <= num) {
//         data.push(n1);
//         nextTerm = n1 + n2
//         n1 = n2;
//         n2 = nextTerm;
//     }
//     return data;
// }
// let result;
// result = fibonacci(10);
// console.log(result);
// result = fibonacci(-5);
// console.log(result);
// result = fibonacci(5.4);
// console.log(result);
// result = fibonacci(30);
// console.log(result);

// Q10. JavaScript Program to Check Armstrong Number ? **
// A positive integer is called an Armstrong number(of order n) if
// abcd... = an + bn + cn + dn + ...
// 153 = 1 * 1 * 1 + 5 * 5 * 5 + 3 * 3 * 3
// program to check an Armstrong number of n digits
// const number = prompt("Enter a positive integer");
// const numberOfDigits = number.length;
// let sum = 0;
// let temp = number;
// while (temp > 0) {
//     let remainder = temp % 10;
//     sum += remainder ** numberOfDigits;
//     temp = parseInt(temp / 10);
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// Better way :
// function armsStrong(num) {
//     if (num < 0 || !Number.isInteger(num))
//         return 'only Positive Integers are allowed.'
//     const digits = String(num).length;
//     let sum = 0;
//     let temp = num;
//     while (temp > 0) {
//         let remainder = temp % 10;
//         sum += remainder ** digits;
//         temp = parseInt(temp / 10);
//     }
//     if (num === sum) return `${num} is an ArmsStrong Number.`;
//     else return `${num} is Not a ArmsStrong Number.`;
// }
// let result;
// result = armsStrong(153);
// console.log(result);
// result = armsStrong(453);
// console.log(result);
// result = armsStrong(149);
// console.log(result);
// result = armsStrong(-153);
// console.log(result);
// result = armsStrong(370.76);
// console.log(result);

// Generate ArmsStrong Numbers :
// function isArmsStrong(num) {
//     if (num < 0 || !Number.isInteger(num))
//         return 'Only Positive Integers allowed.';
//     let sum = 0;
//     const digits = num.toString().split('');
//     for (let i of digits) {
//         sum += parseInt(Math.pow(i, digits.length));
//     }
//     return num === sum;
// }
// let result;
// result = isArmsStrong(153);
// console.log(result);
// result = isArmsStrong(453);
// console.log(result);
// result = isArmsStrong('apple');
// console.log(result);
// result = isArmsStrong(370);
// console.log(result);
// result = isArmsStrong(98.77);
// console.log(result);

// function generateArmsStrong(start, end) {
//     const data = [];
//     for (let i = start; i < end; i++) {
//         if (isArmsStrong(i)) data.push(i);
//     }
//     return data;
// }
// let result;
// result = generateArmsStrong(10, 10000);
// console.log(result);

// Q11. JavaScript Program to Make a Simple Calculator ?
//  Way 1 : Simple Calculator with if..else if...else :
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));
// let result;
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// console.log(`${number1} ${operator} ${number2} = ${result}`);
// Way 2 : Using Switch :
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// const number1 = parseFloat(prompt('Enter the First number'));
// const number2 = parseFloat(prompt('Enter the second number'));
// let result;
// switch (operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;
//     default:
//         console.log('Enter the valid operator and number.');
// }

// Q12. JavaScript Program to Find the Sum of Natural Number ? 
// Way 1 : By For Loop :
// const number = parseInt(prompt('Enter a positive Integer ?'));
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//     sum += i;
// }
// console.log(`Thes sum of ${number} is ${sum}`);
// Way 2 : By While Loop :
// const number = parseInt(prompt('Enter a positive Integer ?'));
// let sum = 0, i = 1;
// while (i <= number) {
//     sum += i;
//     i++
// }
// console.log(`Thes sum of ${number} is ${sum}`);
// Way 3 : By Math Formila :
// const number = parseInt(prompt('Enter a positive Integer ?'));
// let sum = number * (number + 1) / 2;
// console.log(`Thes sum of ${number} is ${sum}`);

// Q14. JavaScript Program to Check if the Numbers Have Same Last Digit ?
// const number1 = parseInt(prompt('Enter a first Integer ?'));
// const number2 = parseInt(prompt('Enter a second Integer ?'));
// const number3 = parseInt(prompt('Enter a third Integer ?'));
// const result1 = number1 % 10;
// const result2 = number2 % 10;
// const result3 = number3 % 10;
// if (result1 == result2 && result1 == result3) {
//     console.log('Numbers Have Same Last Digit');
// }
// else {
//     console.log('Numbers Does Have Same Last Digit');
// }

// Q15. JavaScript Program to Find HCF or GCD ?
// The Highest Common Factor(HCF) or Greatest Common Divisor(GCD) of two integers is the largest integer that can exactly divide both integers(without a remainder).
// For example, the HCF of 60 and 72 is 12.
// Way 1 : By For Loop :
// const number1 = parseInt(prompt('Enter a first positive Integer ?'));
// const number2 = parseInt(prompt('Enter a second positive Integer ?'));
// let hcf;
// for (let i = 1; i <= number1 && i <= number2; i++) {
//     if (number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//     }
// }
// console.log(`HCF Of ${number1} & ${number2} is ${hcf}`);
// Way 2 : by While Loop :
// let number1 = prompt('Enter a first positive integer: ');
// let number2 = prompt('Enter a second positive integer: ');
// while (number1 != number2) {
//     if (number1 > number2) {
//         number1 -= number2;
//     }
//     else {
//         number2 -= number1;
//     }
// }
// console.log(`HCF is ${number1}`);

// Better Way :
// function FindHcf(num1, num2) {
//     const min = num1 < num2 ? num1 : num2;
//     for (let i = min; i >= 1; i--) {
//         if (num1 % i === 0 & num2 % i === 0) return i;
//     }
// }
// let result;
// result = FindHcf(12, 30);
// console.log(result);

// Q16. JavaScript Program to Find LCM ?
// The Least Common Multiple(LCM) of two integers is the smallest positive integer that is perfectly divisible by both integers.
// For example, the LCM of 6 and 8 is 24.
// Way 1 :
// let number1 = prompt('Enter a first positive integer: ');
// let number2 = prompt('Enter a second positive integer: ');
// let max = (number1 > number2) ? number1 : number2;
// while (true) {
//     if (max % number1 == 0 && max % number2 == 0) {
//         console.log(`The LCM of ${number1} & ${number2} is = ${max}`);
//         break;
//     }
//     max++;
// }

// Better Way :
// function findLcm(num1, num2) {
//     const max = num1 > num2 ? num1 : num2;
//     for (let i = max; i <= (num1 * num2); i++) {
//         if (i % num1 === 0 && i % num2 === 0)
//             return i;
//     }
// }
// let result;
// result = findLcm(12, 30);
// console.log(result);

// Way 2 : LCM Calculation Using HCF : LCM = (number1 * number2) / hcf;
// const number1 = parseInt(prompt('Enter a first positive Integer ?'));
// const number2 = parseInt(prompt('Enter a second positive Integer ?'));
// let hcf;
// for (let i = 1; i <= number1 && i <= number2; i++) {
//     if (number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//     }
// }
// let lcm = (number1 * number2) / hcf;
// console.log(`LCM Of ${number1} & ${number2} is ${lcm}`);

// Q17. JavaScript Program to Find the Factors of a Number ?
// const number = parseInt(prompt('Enter a positive number ?'));
// console.log(`Factors of ${number} are : `);
// for (let i = 1; i <= number; i++) {
//     if (number % i == 0) {
//         console.log(i);
//     }
// }

// Q18.JavaScript Program to Display Fibonacci Sequence Using Recursion ?
// function fibonacci(num) {
//     if (num < 2) {
//         return num;
//     }
//     else {
//         return fibonacci(num - 1) + fibonacci(num - 2);
//     }
// }
// const nTerms = prompt('Enter the number of terms: ');
// if (nTerms <= 0) {
//     console.log('Enter a positive integer.');
// }
// else {
//     for (let i = 0; i < nTerms; i++) {
//         console.log(fibonacci(i));
//     }
// }

// Better Way :
// function fibonacci(term) {
//     if (term < 2) return term;
//     else return fibonacci(term - 1) + fibonacci(term - 2);
// }
// const nTerms = 10;
// for (let i = 0; i < nTerms; i++) {
//     console.log(fibonacci(i));
// }


// *** End *** 

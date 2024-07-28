'use strict';

// Q1.JavaScript Program to Check Whether a String is Palindrome or Not ? 
// A string is a palindrome if it is read the same from forward or backward.For example, dad reads the same either from forward or backward.So the word dad is a palindrome.Similarly, madam is also a palindrome.
// function checkPalindrome(string) {
//     let len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string1 = 'Apple';
// const string2 = 'madam';
// console.log(checkPalindrome(string1));
// console.log(checkPalindrome(string2));
// Example 2: Check Palindrome using built-in Functions :
// The split('') method converts the string into individual array characters.
// The reverse() method reverses the position in an array.
// The join('') method joins all the elements of an array into a string.
// The multiple lines of code can be reduced and written in one line:
// const reverseString = string.split('').reverse().join('');
// function checkPalindrome(string) {
//     const arrValues = string.split('');
//     const reverseArr = arrValues.reverse();
//     const reverseString = reverseArr.join('');
//     if (string == reverseString) {
//         return 'It is a palindrome.'
//     }
//     else {
//         return 'It is not a palindrome.'
//     }
// }
// const string1 = 'Apple';
// const string2 = 'madam';
// console.log(checkPalindrome(string1));
// console.log(checkPalindrome(string2));
// Shortcut Way :
// function checkPalindrome(string) {
//     const reverseString = string.split('').reverse().join('');
//     const result = string == reverseString ? 'It is a palindrome.'
//         : 'It is not a palindrome.';
//     return result;
// }
// const string1 = 'Apple';
// const string2 = 'madam';
// console.log(checkPalindrome(string1));
// console.log(checkPalindrome(string2));

// Q2. JavaScript Program to Sort Words in Alphabetical Order ?
// const string = 'React is the best language';
// const words = string.split(' ');
// words.sort();
// for (let element of words) {
//     console.log(element);
// }
// 2nd way :
// const string = 'React is the best language';
// const words = string.split(' ');
// const data = words.sort().join(' ');
// console.log(data);

// Q3. JavaScript Program to Replace Characters of a String ?
// Example: Replace First Occurrence of a Character in a String : 
// const string = 'john has pink car and pink house.';
// const newStr = string.replace('pink', 'blue');
// console.log(newStr);
// Example 2: Replace Character of a String Using RegEx : 
// regex: /g refers to global. It means that all the matching characters in the string are replaced. You could also use the regex to perform case-insensitive replacement using /gi, where i represents case-insensitive.
// const string = 'john has pink car and pink house.';
// const regex = /pink/g;
// const newString = string.replace(regex, 'blue');
// console.log(newString);

// Q4. JavaScript Program to Reverse a String ?
// Example 1: Reverse a String Using for Loop : 
// function reverseString(str) {
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// const string = 'apple';
// const result = reverseString(string);
// console.log(result);
// Example 2: Reverse a String Using built -in Methods : 
// function reverseString(str) {
//     let newStr = str.split('').reverse().join('');
//     return newStr;
// }
// const string = 'mango';
// const result = reverseString(string);
// console.log(result);

// Q5. JS Program to Check the Number of Occurrences of a Character in the String ?
// Example 1: Check Occurrence of a Character Using for Loop : 
// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == char) {
//             count += 1;
//         }
//     }
//     return count;
// }
// const string = 'apple';
// const result = countChar(string, 'p');
// console.log(result);
// Example 2: Check occurrence of a character using a Regex : 
// The match() method returns an array containing all the matches. 
// function countChar(str, char) {
//     const regex = new RegExp(char, 'g');
//     const count = str.match(regex).length;
//     return count;
// }
// const string = 'apple';
// const result = countChar(string, 'p');
// console.log(result);

// Q6. JavaScript Program to Convert the First Letter of a String into UpperCase ?
// Example 1: Convert First letter to UpperCase : 
// function capitalizeFirstLetter(str) {
//     const capital = str.charAt(0).toUpperCase() + str.slice(1);
//     return capital;
// }
// const string = 'mango';
// const result = capitalizeFirstLetter(string);
// console.log(result);
// Example 2: Convert First letter to UpperCase using Regex : 
// The regex pattern is /^./ matches the first character of a string.
// OR :  const capital = str.replace(str[0], str[0].toUpperCase());
// function capitalizeFirstLetter(str) {
//     const capital = str.replace(/^./, str[0].toUpperCase());
//     return capital;
// }
// const string = 'mango';
// const result = capitalizeFirstLetter(string);
// console.log(result);

// Q7.JavaScript Program to Count the Number of Vowels in a String ?
// Example 1: Count the Number of Vowels Using Regex : 
// pattern /[aeiou]/gi checks for all the vowels(case -insensitive) in a string.
// function countVowel(str) {
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
// }
// const string = 'JavaScript';
// const result = countVowel(string);
// console.log(result);
// Example 2: Count the Number of Vowels Using for Loop : 
// function countVowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }
//     return count;
// }
// const string = 'JavaScript';
// const result = countVowel(string);
// console.log(result);

// Q8. JavaScript Program to Check Whether a String Starts and Ends With Certain Characters ?
// program to check if a string starts with 'S' and ends with 'G' :
// The startsWith() method checks if the string starts with the particular string.
// The endsWith() method checks if the string ends with the particular string.
// function checkString(str) {
//     if (str.startsWith('S') && (str.endsWith('G'))) {
//         console.log('The String starts with S and ends with G');
//     }
//     else if (str.startsWith('S')) {
//         console.log('The String starts with S and does not ends with G');
//     }
//     else if (str.startsWith('G')) {
//         console.log('The String does not starts with S but ends with G');
//     }
//     else {
//         console.log('The String does not starts with S and does not ends with G');
//     }
// }
// const string = 'Sign';
// checkString(string);
// Example 2: Check The String Using Regex :
// The /^S/i pattern checks if the string starts with S or s.
// (RegEx) is used with the test() method to check if the string starts with S and ends with G.
// The /G$/i patterns checks if the string is G or g :
// function checkString(str) {
//     if (/^S/i.test(str) && /G$/i.test(str)) {
//         console.log('The String starts with S and ends with G');
//     }
//     else if (/^S/i.test(str)) {
//         console.log('The String starts with S and does not ends with G');
//     }
//     else if (/G$/i.test(str)) {
//         console.log('The String does not starts with S but ends with G');
//     }
//     else {
//         console.log('The String does not starts with S and does not ends with G');
//     }
// }
// const string = 'Sign';
// checkString(string);

// Q9. JavaScript Program to Replace All Occurrences of a String ?
// Example 1: Replace All Occurrence of String Using RegEx : 
// function replaceString(str) {
//     const regex = /red/g;
//     const newString = str.replace(regex, 'blue');
//     return newString;
// }
// const string = 'John has red car and red house.';
// const result = replaceString(string);
// console.log(result);
// Example 2: Replace All Occurrence of String Using built -in Method : 
// function replaceString(str) {
//     const newString = str.split('red').join('blue');
//     return newString;
// }
// const string = 'John has red car and red house.';
// const result = replaceString(string);
// console.log(result);

// Q10. JavaScript Program to Create Multiline Strings ?
// Example 1: Create Multiline Strings Using + & \n :
// const message = 'This is multiline strings\n' +
//     'in javascript\n' +
//     'have 3 new lines';
// console.log(message);
// Example 2: Create Multiline Strings Using \ & \n : 
// const message = 'This is multiline strings\n \
//     in javascript\n \
//     have 3 new lines';
// console.log(message);
// Example 3: Create Multiline Strings Using Template Literal :
// const message = `This is multiline strings 
// in javascript
// have 3 new lines`;
// console.log(message);

// Q11. JavaScript Program to Format Numbers as Currency Strings ?
// Example 1: Format Numbers as Currency String : 
// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });
// const result = formatter.format(2800);
// console.log(result);
// Example 2: Format Numbers as Currency String Using concatenation :
// toFixed(2) method is used to round up the number to two decimal values.
// const number = 67.98776;
// const result = '$' + number.toFixed(2);
// console.log(result);
// Example 3: Format Numbers as Currency String Using toLocaleString() : 
// const number = 87.6688;
// const result = number.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });
// console.log(result);
// Example 4: Format Numbers as Currency String Using RegEx : 
// const result = 1234.5678.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
// console.log('$ ' + result);

// Q12. JavaScript Program to Generate Random String ?
// Example 1: Generate Random Strings by for loop :
// function generateString(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charLength = characters.length;
//     let randomString = '';
//     for (let i = 0; i < length; i++) {
//         randomString += characters.charAt(Math.floor(Math.random() * charLength));
//     }
//     return randomString;
// }
// const result = generateString(8);
// console.log(result);
// Example 2: Generate Random Strings Using Built -in Methods : 
// const result = Math.random().toString(36).substring(2, 10);
// console.log(result);

// Q13. JavaScript Program to Check if a String Starts With Another String ?
// Example 1: Using startsWith() : 
// function chechString(str, test) {
//     if (str.startsWith(test)) {
//         console.log(`${str} starts with ${test}.`);
//     }
//     else {
//         console.log(`${str} does not starts with ${test}.`);
//     }
// }
// chechString('React', 'Re');
// Example 2: Using lastIndexOf() : 
// The lastIndexOf() method returns the index of the searched string(here searching from the first index).
// function chechString(str, test) {
//     if (str.lastIndexOf(test, 0) === 0) {
//         console.log(`${str} starts with ${test}.`);
//     }
//     else {
//         console.log(`${str} does not starts with ${test}.`);
//     }
// }
// chechString('React', 'Re');
// Example 3: Using RegEx : 
// function chechString(str, pat) {
//     const result = pat.test(str);
//     if (result) {
//         console.log(`${str} starts with given pattern`);
//     }
//     else {
//         console.log(`${str} does not starts with given pattern.`);
//     }
// }
// const pattern = /^Re/;
// chechString('React', pattern);

// Q14. JavaScript Program to Trim a String ?
// Example 1: Trim a String : 
// The trim() method removes white space from both sides of the string. : 
// function trimString(str) {
//     const result = str.trim();
//     console.log(result);
// }
// trimString('  apple  ');
// Example 2: Trim a String Using RegEx : 
// function trimString(x) {
//     let trimValue = x.replace(/^\s+|\s+$/g, '');
//     return trimValue;
// }
// const result = trimString('    Hello world    ');
// console.log(result);

// Q15. JavaScript Program to Check Whether a String Contains a Substring ?
// Example 1: Check String with includes() : 
// function checkString(str, test) {
//     if (str.includes(test)) {
//         console.log(`${str} contains ${test}.`);
//     }
//     else {
//         console.log(`${str} does not contains ${test}.`);
//     }
// }
// const string = 'apple';
// const check = 'l';
// checkString(string, check);
// Example 2: Check String with indexOf() : 
// function checkString(str, test) {
//     if (str.indexOf(test) !== -1) {
//         console.log(`${str} contains ${test}.`);
//     }
//     else {
//         console.log(`${str} does not contains ${test}.`);
//     }
// }
// const string = 'apple';
// const check = 'l';
// checkString(string, check);

// Q16. JavaScript Program to Compare Two Strings ? 
// Example 1: Using toUpperCase() : 
// function checkStrings(str1, str2) {
//     const result = (str1.toUpperCase() === str2.toUpperCase());
//     if (result) {
//         console.log('The strings are similar.');
//     }
//     else {
//         console.log('The strings are not similar.');
//     }
// }
// const str1 = 'apple';
// const str2 = 'Apple';
// checkStrings(str1, str2);
// Example 2: Using localeCompare() : 
// The localeCompare() method compares two strings in the current locale.
// The localeCompare() method returns sort order - 1, 1, or 0(for before, after, or equal).
// Here, { sensitivity: 'base' } treats A and a as the same.
// function checkStrings(str1, str2) {
//     const result = str1.localeCompare(str2, undefined, { sensitivity: 'base' });
//     console.log(result);
//     if (result == 0) {
//         console.log('The strings are similar.');
//     }
//     else {
//         console.log('The strings are not similar.');
//     }
// }
// const string1 = 'apple';
// const strring2 = 'Apple';
// checkStrings(string1, strring2);

// Q17. JavaScript Program to Encode a String to Base64 ?
// Base64 is a group of binary - to - text encoding schemes that represent binary data in an ASCII string format by translating it into a radix - 64 representation.
// It is commonly used to encode data that needs to be stored or transmitted in a way that cannot be directly represented as text.
// the btoa() method is used to convert the string to Base64.
// The atob() method is used to convert the Base64 to a string.
// const str = 'React';
// const result1 = btoa(str);
// console.log(result1);
// const result2 = atob(result1);
// console.log(result2);

// Q18.JavaScript Program to Replace All Line Breaks with <br> ?
// const string = `React
// Node
// JavaScript`;
// const result = string.split('\n').join('<br />');
// console.log(result);

// split() :
// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.
// If(" ") is used as separator, the string is split between words.
// join() :
// The join() take all the items in an array and turn them into a single string. 
// The join() method does not change the original array.
// Any separator can be specified.The default is comma(,).

// Q18. JavaScript Program to Get File Extension ?
// Example 1: Using split() and pop() : 
// function getFileExtension(fileName) {
//     const extension = fileName.split('.').pop();
//     console.log(extension);
// }
// const file = 'index.js';
// getFileExtension(file);
// Example 2: Using substring() and lastIndexOf() :
// function getFileExtension(fileName) {
//     const extension = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
//     console.log(extension);
// }
// const file = 'index.js';
// getFileExtension(file);

//Q19. JavaScript Program to Generate a Range of Numbers and Characters ?  **
// generators provide a new way to work with functions and iterators.
// Using a generator,
// you can stop the execution of a function from anywhere inside the function
// and continue executing code from a halted position.
// The iterate generator function is used to iterate through lower and upper bounds.
// The spread syntax ... is then used to include all the elements returned by the iterate function.
// The charCodeAt() method takes in an index value and returns an integer representing its UTF - 16(16 - bit Unicode Transformation Format) code.
// The map() method iterates through all the array elements.
// The fromCharCode() method converts Unicode values into characters.
// Solution :
// function* iterate(a, b) {
//     for (let i = a; i <= b; i++) {
//         yield i;
//     }
// }
// function range(a, b) {
//     if (typeof a && typeof b === 'string') {
//         let data = [...iterate(a.charCodeAt(), b.charCodeAt())]
//             .map(n => String.fromCharCode(n));
//         return data;
//     }
//     else {
//         let data = [...iterate(a, b)];
//         return data;
//     }
// }

// let result;
// result = range('c', 'f');
// console.log(result);

// result = range(34, 43);
// console.log(result);

// Q20. JavaScript Program to Remove All Whitespaces From a Text ?
// Example 1: Using split() and join() :
// const string = '     Hello World';
// const result = string.split(' ').join('');
// console.log(result);
// Example 2: Using Regular Expression : 
// /\s/g checks for whitespace in the string. : 
// const string = '     Hello World';
// const result = string.replace(/\s/g, '');
// console.log(result);



//  *** End ***


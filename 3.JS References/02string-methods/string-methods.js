'use strict';

// 1. String length :
// let result;
// const str = 'React';
// result = str.length;
// console.log(result);

// TypeError: Cannot assign to read only property 'length' of string.
// str.length = 3;
// console.log(str);

// 2.String replace() :
// let result; 

// const str1 = 'mango';
// result = str1.replace('o', 'os');
// console.log(result);

// const str2 = 'JavaScript is the best, must read JavaScript';

// result = str2.replace('JavaScript', 'React');
// console.log(result);

// Replace all occurrences using regex :
// const pattern = /JavaScript/g;
// result = str2.replace(pattern, 'React');
// console.log(result);

// case -insensitive replacement :
// const str3 = 'Java java Java';

// result = str3.replace(/java/i, 'React');
// console.log(result);

// result = str3.replace(/java/gi, 'React');
// console.log(result);

// Passing Function as a Replacement :
// regex to match a digit : /\d/;
// const text = 'Random Digit : 5';
// const pattern = /\d/;
// function random() {
//     return Math.floor(Math.random() * 10);
// }
// result = text.replace(pattern, random);
// console.log(result);

// 3. String indexOf() :
// let result;

// const str = 'react';
// result = str.indexOf('a');
// console.log(result);

// const str2 = 'Java React JavaScript';
// result = str2.indexOf('a');
// console.log(result);

// const str2 = '';
// result = str2.indexOf('a', 3);
// console.log(result);

// const str3 = 'React';
// result = str3.indexOf('', 3);
// console.log(result);

// const str4 = 'React is fun, start using React';
// result = str4.indexOf('ct', 6);
// console.log(result);

// const str5 = 'React';
// result = str5.indexOf('', 6);
// console.log(result);
// result = str5[4];
// console.log(result);
// result = str5[5];
// console.log(result);

//  Finding All the Occurrences of an Element : *imp*
// function findAllIndex(string, value) {
//     let indices = [];
//     let currentIndex = string.indexOf(value);
//     while (currentIndex !== -1) {
//         indices.push(currentIndex);
//         currentIndex = string.indexOf(value, currentIndex + value.length);
//     }
//     return indices;
// }
// const str = 'React is the famous library';
// const val = 'a';
// const result = findAllIndex(str, val);
// console.log(result);

// 4. String lastIndexOf() :
// let result;
// const str = 'Programming';
// result = str.indexOf('g');
// console.log(result);
// result = str.lastIndexOf('g');
// console.log(result);

// 5. String startsWith() :
// let result;
// const str = 'React is the fastest, React is the best';
// result = str.startsWith('is');
// console.log(result);
// result = str.startsWith('is', 6);
// console.log(result);

// 6. String endsWith() :
// let result;
// const str = 'React is the fastest, React is the best';
// result = str.endsWith('is');
// console.log(result);
// result = str.endsWith('best');
// console.log(result);
// result = str.endsWith('the', 12);
// console.log(result);
// console.log(str[11]);

// 7. String toUpperCase() :
// const str = 'react';
// const result = str.toUpperCase();
// console.log(result);
// console.log(str);

// **imp**
// function firstUpperCaseLetter(string) {
//     const newStr = string[0].toUpperCase() + string.slice(1);
//     return newStr;
// }
// const str = 'javaScript';
// const result = firstUpperCaseLetter(str);
// console.log(result);

// 8. String toLowerCase() :
// const str = 'Apple';
// const result = str.toLocaleLowerCase();
// console.log(result);

// 9. String includes() :
// let result;

// const str1 = 'React';
// result = str1.includes('c');
// console.log(result);

// const str2 = 'React Node Java';
// result = str2.includes('Node');
// console.log(result);

// const str3 = 'React Node Java';
// result = str3.includes(' React');
// console.log(result);

// 10. String repeat() :
// let result;
// const str1 = 'React';
// result = str1.repeat(3);
// console.log(result);

// const str2 = 'React Node ';
// result = str2.repeat(4);
// console.log(result);

// 11. String charAt() :
// let result;
// const str = 'React';

// result = str.charAt();
// console.log(result);
// result = str.charAt(3);
// console.log(result);
// result = str.charAt(3.2);
// console.log(result);
// result = str.charAt(3.8);
// console.log(result);
// result = str.charAt(6);
// console.log(result);

// 12. String charCodeAt() :
// let result;
// const str = 'Javascript React Python';

// result = str.charCodeAt(1);
// console.log(result);
// result = str.charCodeAt(11);
// console.log(result);
// result = str.charCodeAt(50);
// console.log(result);
// result = str.charCodeAt();
// console.log(result);

// 13. fromCharCode() :
// let result;

// result = String.fromCharCode();
// console.log(result);

// result = String.fromCharCode(65);
// console.log(result);

// result = String.fromCharCode(97);
// console.log(result);

// result = String.fromCharCode(65535);
// console.log(result);

// result = String.fromCharCode(65536);
// console.log(result);

// result = String.fromCharCode(97, 98, 99, 65, 66, 67);
// console.log(result);

// result = String.fromCharCode(19764);
// console.log(result);

// 14.String codePointAt()
// let result;
// const str = 'Javascript React Python';

// result = str.codePointAt(1);
// console.log(result);
// result = str.codePointAt(11);
// console.log(result);
// result = str.codePointAt(50);
// console.log(result);
// result = str.codePointAt();
// console.log(result);

// 15. String fromCodePoint() :
// let result;

// result = String.fromCodePoint();
// console.log(result);

// result = String.fromCodePoint(65);
// console.log(result);

// result = String.fromCodePoint(97);
// console.log(result);

// result = String.fromCodePoint(65535);
// console.log(result);

// result = String.fromCodePoint(65536);
// console.log(result);

// result = String.fromCodePoint(97, 98, 99, 65, 66, 67);
// console.log(result);

// result = String.fromCodePoint(19764);
// console.log(result);

// result = String.fromCodePoint(75000);
// console.log(result);

// 16. String substring() :
// let result;
// const str = 'React is the best';

// result = str.substring(6, 8);
// console.log(result);

// result = str.substring();
// console.log(result);

// result = str.substring(3, 11);
// console.log(result);

// Replacing a substring within a string :
// function replaceString(oldChars, newChars, string) {
//     for (let i = 0; i < string.length; ++i) {
//         if (string.substring(i, i + oldChars.length) == oldChars) {
//             string = string.substring(0, i) + newChars +
//                 string.substring(i + oldChars.length, string.length);
//         }
//     }
//     return string;
// }
// const str = 'React is the best, must read ReactJs fisrtly';
// const newStr = replaceString('ReactJs', 'NextJs', str);
// console.log(newStr);

// 17. String padStart() :
// let result;
// const str = 'React';

// result = str.padStart(8, '$');
// console.log(result);

// result = str.padStart(11, '$');
// console.log(result);

// result = str.padStart(6, '# ');
// console.log(result);

// result = str.padStart(7, '# ');
// console.log(result);

// result = str.padStart(12, 'NextJs ');
// console.log(result);

// 18. String padEnd() :
// let result;
// const str = 'React';

// result = str.padEnd(8, '$');
// console.log(result);

// result = str.padEnd(11, '$');
// console.log(result);

// result = str.padEnd(6, ' #');
// console.log(result);

// result = str.padEnd(7, ' #');
// console.log(result);

// result = str.padEnd(12, ' NextJs');
// console.log(result);

// 19. String match() :
// let result;
// const str = 'React is the best, must reads React. Go through react';

// const pattern = /React/;
// result = str.match(pattern);
// console.log(result);

// result = str.match('React');
// console.log(result);

// const pattern = /React/g;
// result = str.match(pattern);
// console.log(result);

// const pattern = /React/gi;
// result = str.match(pattern);
// console.log(result);

//  20. String matchAll() :
// let result;
// const str = 'React is the best, must reads React. Go through react';

// const pattern = /React/gi;

// result = str.matchAll(pattern);
// console.log(result);

// const array = Array.from(result);
// console.log(array);

// for (let data of result) {
//     console.log(data);
// }

// 21. String localeCompare() :
// let result;

// result = 'a'.localeCompare('d');
// console.log(result);

// result = 'e'.localeCompare('e');
// console.log(result);

// result = 'e'.localeCompare('c');
// console.log(result);

// result = '5'.localeCompare('16');
// console.log(result);

// result = 'a'.localeCompare('d', 'in');
// console.log(result);

// 22. String search() :
// /[A-Z]/ : pattern that searches the first occurence of an uppercase character.
// /(React)\d/ : pattern having 'React' followed by a digit.
// let result;
// const str = 'react Java node React6';

// result = str.search('no');
// console.log(result);

// result = str.search(/[A-Z]/);
// console.log(result);

// result = str.search(/(React)\d/);
// console.log(result);

// 23. String replaceAll() :
// let result;
// const str = 'React is the best, Must read React.';

// result = str.replaceAll('React', "NextJs");
// console.log(result);

// result = str.replaceAll(/React/g, "NextJs");
// console.log(result);

// 24. String concat() :
// let result;

// result = ''.concat({});
// console.log(result);

// result = ''.concat({ a: 5 });
// console.log(result);

// result = ''.concat(true);
// console.log(result);

// result = ''.concat(null);
// console.log(result);

// result = ''.concat(undefined);
// console.log(result);

// result = ''.concat(5, 6);
// console.log(result);

// result = ''.concat('Java ', 'React ');
// console.log(result);

// result = 'Programing '.concat('Java ', 'React ');
// console.log(result);

// result = 'Programing ' + 'Java ' + 'React ';
// console.log(result);

// 25. String split() :
// let result;

// const str = 'react';
// result = str.split();
// console.log(result);
// result = str.split('')
// console.log(result);

// const str2 = 'React Java Node Next';
// result = str2.split();
// console.log(result);
// result = str2.split('');
// console.log(result);
// result = str2.split(' ');
// console.log(result);

// const str3 = 'React : 56, Node: 65';
// result = str3.split(':');
// console.log(result);
// result = str3.split(',');
// console.log(result);

// 26. String trim() :
// let result;

// const str = '   React  ';
// result = str.trim();
// console.log(str);
// console.log(result);

// const str2 = '  A B C       ';
// result = str2.trim();
// console.log(str2);
// console.log(result);

// 27. String slice() :
// let result;
// const str = 'React is the best frontend library';

// result = str.slice();
// console.log(result);

// result = str.slice(0);
// console.log(result);

// result = str.slice(9);
// console.log(result);

// result = str.slice(9, 17);
// console.log(result);

// result = str.slice(30, 40);
// console.log(result);

// result = str.slice(35, 40);
// console.log(result);

// result = str.slice(-7);
// console.log(result);

// result = str.slice(-7, -4);
// console.log(result);

// result = str.slice(-4, -7);
// console.log(result);


// *** End ***


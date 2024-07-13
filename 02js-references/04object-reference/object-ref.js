// 1. Object.toLocaleString() : 
// const num = 364659.86;
// let result;

// result = num.toLocaleString();
// console.log(result);

// result = num.toLocaleString('en-IN');
// console.log(result);

// result = num.toLocaleString('en-US');
// console.log(result);

// result = num.toLocaleString('fr');
// console.log(result);

// result = num.toLocaleString('de');
// console.log(result);

// 2. Object.keys() :
// let result;

// const obj = { a: 1, b: 2, c: 3 };
// result = Object.keys(obj);
// console.log(result);

// const obj2 = { 87: 'X', 23: 'Y', 54: 'Z' };
// result = Object.keys(obj2);
// console.log(result);

// const array = [34, 98, 76];
// result = Object.keys(array);
// console.log(result);

// const string = 'react';
// result = Object.keys(string);
// console.log(result);

// 3. Object.values() :
// let result;

// const obj = { a: 1, b: 2, c: 3 };
// result = Object.values(obj);
// console.log(result);

// const obj2 = { 87: 'X', 23: 'Y', 54: 'Z' };
// result = Object.values(obj2);
// console.log(result);

// const array = [34, 98, 76];
// result = Object.values(array);
// console.log(result);

// const string = 'react';
// result = Object.values(string);
// console.log(result);

// 4. Object.entries() :
// let result;

// const obj = { a: 1, b: 2, c: 3 };
// result = Object.entries(obj);
// console.log(result);

// const obj2 = { 87: 'X', 23: 'Y', 54: 'Z' };
// result = Object.entries(obj2);
// console.log(result);

// const array = [34, 98, 76];
// result = Object.entries(array);
// console.log(result);

// const string = 'react';
// result = Object.entries(string);
// console.log(result);

// const obj3 = { a: 1, b: 2, c: 3, d: 4 };
// for (let [key, value] of Object.entries(obj3)) {
//     console.log(key, value);
// }

// 5. toString() :
// let result;

// const a = 5;
// result = a.toString();
// console.log(result, typeof result);

// const b = { a: 1, b: 2 };
// result = b.toString();
// console.log(result, typeof result);

// const c = [1, 2, 3];
// result = c.toString();
// console.log(result, typeof result);

// const d = 20;
// result = d.toString(2);
// console.log(result, typeof result);

// const e = true;
// result = e.toString();
// console.log(result, typeof result);

// const f = new Date();
// result = f.toString();
// console.log(result, typeof result);

// 6. valueOf() :
// const num = new Number(5);
// console.log(num, typeof num);
// const value = num.valueOf();
// console.log(value, typeof value);

// const obj = { a: 1, b: 2 };
// const result = obj.valueOf();
// console.log(result);

// const array = [1, 2, 3];
// const result2 = array.valueOf();
// console.log(result2);

// const bool = true;
// const result3 = bool.valueOf();
// console.log(result3);

// const string = 'apple';
// const result4 = string.valueOf();
// console.log(result4);

// const num2 = new Number(10);
// const result5 = num2 + 5;
// console.log(result5);
// const result6 = num2.valueOf() + 5;
// console.log(result6);

// valueOf() Method With Unary + Operator :
// const num = 10;
// console.log('5' + num);
// console.log(+'5' + num);
// console.log(+5 + num);
// console.log(true + num);
// console.log(+true + num);
// console.log(false + num);
// console.log(+false + num);
// console.log(false);
// console.log(+false);
// console.log(null);
// console.log(+null);
// console.log(undefined);
// console.log(+undefined);

// 7. Object.seal() :
// const obj = { a: 1, b: 2 };
// obj.c = 3;
// console.log(obj);
// Object.seal(obj);
// obj.d = 4;
// console.log(obj);
// obj.c = 56;
// console.log(obj);
// delete obj.b;
// console.log(obj);

// 8. Object.isSealed() :
// let result;

// const obj1 = {};
// result = Object.isSealed(obj1);
// console.log(result);
// Object.preventExtensions(obj1);
// result = Object.isSealed(obj1);
// console.log(result);

// const obj2 = { a: 1, b: 2 };

// result = Object.isSealed(obj2);
// console.log(result);
// Object.preventExtensions(obj2);
// result = Object.isSealed(obj2);
// console.log(result);

// Object.defineProperties(obj2, {
//     a: {
//         configurable: false
//     },
//     b: {
//         configurable: false
//     }
// });
// result = Object.isSealed(obj2);
// console.log(result);

// const obj3 = {};
// Object.seal(obj3);
// result = Object.isSealed(obj3);
// console.log(result);

// const obj4 = { x: 5, y: 9 };
// Object.seal(obj4);
// result = Object.isSealed(obj4);
// console.log(result);

// 9. Object.setPrototypeOf() :
// const obj = {};
// const parent = { foo: 'bar' };
// Object.setPrototypeOf(obj, parent);
// console.log(obj.foo);

// const Person = {
//     info() {
//         console.log(`Name is ${this.name} and age is ${this.age}`);
//     }
// }
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// Object.setPrototypeOf(Student.prototype, Person);
// const s1 = new Student('John', 25);
// console.log(s1);
// s1.info();
// const result = Person.isPrototypeOf(s1);
// console.log(result);

// 10. Object.isPrototypeOf() :
// let result;
// const obj = new Object();

// result = Object.prototype.isPrototypeOf(obj);
// console.log(result);

// result = Function.prototype.isPrototypeOf(obj);
// console.log(result);

// result = Function.prototype.isPrototypeOf(obj.toString);
// console.log(result);

// result = Array.prototype.isPrototypeOf([2, 4]);
// console.log(result);

// 11. propertyIsEnumerable() :
// let result;

// const array = [14, 28, 58];
// result = array.propertyIsEnumerable(0);
// console.log(result);
// result = array.propertyIsEnumerable(array.length);
// console.log(result);

// const obj = { age: 25 };
// result = obj.propertyIsEnumerable('age');
// console.log(result);
// result = obj.propertyIsEnumerable('city');
// console.log(result);

// result = Math.propertyIsEnumerable('max');
// console.log(result);

// 12.  Object.getPrototypeOf() :
// let result;
// const obj = { age: 34 };
// result = Object.getPrototypeOf(obj);
// console.log(result);

// const obj = {};
// const parent = {
//     name: 'John',
//     age: 25
// };
// Object.setPrototypeOf(obj, parent);
// let result;
// result = Object.getPrototypeOf(obj);
// console.log(result);
// result = Object.getPrototypeOf(obj) === parent;
// console.log(result);

//in browser : prototype of str is the String constructor function.
// const str = 'react';
// const result = Object.getPrototypeOf(str);
// console.log(result);

// in browser : prototype of test() is the[Function] constructor function.
// function test() {
//     console.log('Hi');
// }
// const result = Object.getPrototypeOf(test);
// console.log(result);

// 13.  Object.create() :
// const Person = {
//     name: 'John',
//     age: 24,
//     info() {
//         console.log(`Name is ${this.name} and Age is ${this.age}`);
//     }
// };
// const obj = Object.create(Person);
// console.log(obj);
// console.log(obj.name);
// let result;
// result = Object.getPrototypeOf(obj);
// console.log(result);
// obj.name = 'Selena';
// obj.age = 18;
// result = obj.info();

// 14. Object.assign() :
// const obj1 = { a: 5, b: 6 };
// const obj2 = { b: 10 };
// const obj3 = { c: 15 };

// const merge = Object.assign(obj1, obj2, obj3);
// console.log(merge);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// const merge2 = Object.assign({}, obj1, obj2, obj3);
// console.log(merge2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// 15. Object.defineProperties() :
// By default -> writable : false, configurable: false, enumerable : false
const obj = {};
Object.defineProperties(obj, {
    name: {
        value: 'Selena',
        writable: true,
        configurable: true,
        enumerable: true,
    },
    age: {
        value: 25,
        writable: false,
        configurable: true,
        enumerable: true,
    },
    city: {
        value: 'Delhi',
        writable: true,
        configurable: false,
        enumerable: true,
    },
    course: {
        value: 'React',
        writable: true,
        configurable: true,
        enumerable: false,
    },
    country: {
        configurable: true,
        enumerable: true,
        get: function () { return this._country },
        set: function (val) { this._country = val }
    },
    gender: {
        value: 'Male'
    }
});

console.log(obj);
let result;

// obj.country = 'US';
// result = obj.country;
// console.log(result);

// Checking Enumerable :
// result = Object.keys(obj);
// console.log(result);

// for (let key in obj) {
//     console.log(key);
// }

// Checking Writable :
// obj.age = 18;
// console.log(obj.age);

// Checking Configurable :
// obj.city = 'New York';
// console.log(obj.city);
// delete obj.city;
// console.log(obj.city);

//  By default -> writable : false, configurable: false, enumerable : false
// console.log(obj.gender);
// obj.gender = 'Female';
// console.log(obj.gender);
// delete obj.gender;
// console.log(obj.gender);

// 16. Object.defineProperty() :
// const obj = { name: 'John', age: 26 };
// Object.defineProperty(obj, 'city', {
//     value: 'Delhi'
// });
// console.log(obj);
// let result;

// by default : enumerable : false
// result = Object.keys(obj);
// console.log(result);

// for (let key in obj) {
//     console.log(key);
// }

// By default : writable : false
// result = obj.city;
// console.log(result);
// obj.city = 'Bangalore';
// result = obj.city;
// console.log(result);

// by default : configuirable : false
// delete obj.city;
// result = obj.city;
// console.log(result);

// By making enumerable, writable, configuirable : true :
// const obj = { name: 'John', age: 26 };
// Object.defineProperty(obj, 'city', {
//     value: 'Delhi',
//     writable: true,
//     enumerable: true,
//     configurable: true
// });
// console.log(obj);
// let result;

// result = Object.keys(obj);
// console.log(result);

// for (let key in obj) {
//     console.log(key);
// }

// result = obj.city;
// console.log(result);
// obj.city = 'Bangalore';
// result = obj.city;
// console.log(result);

// by default : configuirable : false
// delete obj.city;
// result = obj.city;
// console.log(result);

// 17. Object.is() :

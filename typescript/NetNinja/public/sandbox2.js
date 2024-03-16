"use strict";
let greet; // Note the use of Function
// greet can be a function and no else
greet = () => 'hello, amigo!';
console.log(greet());
// we can specify optional parameters i.e c
// the default value can be: c: number|string = 10
// NB: We do not need te question mark if we have an optional parameters
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(56, 7, "50");
// if we assign a variable t te return value f a function
// typescript can infer te type from te return type
// we can explicity state te return type although its not necessary
// functions that do not return anything, its a void, much like C
const minus = (a, b) => {
    return a + b;
};
let result = minus(6, 9);
console.log(typeof (result));

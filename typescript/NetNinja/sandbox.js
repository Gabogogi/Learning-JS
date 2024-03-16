var character = 'luigi';
var age = 30;
// we can use Python style declarations fr
// args passe to a function
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ(7));
// ARRAYS
var names = ['Luigi', 'Mario', 'Yoshi'];
names.push('Toad');
var numbers = [1, 4];
// if we wish to have an array with mixed types, we should declare at the beginning
var mixedTypes = [1, 'two', 3];
mixedTypes.push(56, 'Ian');
console.log(mixedTypes);
var ninja = {
    name: 'Messi',
    belt: 'black',
    age: 56,
    club: 'AL Nasse' // This gives an error since it wasnt in the original object
};
// wrong
// ninja.age = 'Hei';
// also, we can't add new properties to the field
// ninja.skills = ['football', 'goat'];
// if we declare  new object, it has to have the same
// structure of the initial object
ninja = {
    name: 'cr7',
    belt: 'blue',
    age: 67
};
console.log(ninja);

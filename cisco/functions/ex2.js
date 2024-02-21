/* three functions with the names add, sub, and mult, which will take two numerical arguments. The functions are to check if the given arguments are integers (use Number.isInteger). If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. The functions are to be declared using a function statement. */

function add (a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    } else{
        return a + b;
    }
}
console.log(add("g",76));
// using an arrow functions

let addArrow = (a, b) => {
    return (!Number.isInteger(a) || !Number.isInteger(b)) ? Nan: a + b;
}
let addArrow2 = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? Nan: a + b;

console.log(addArrow2(7,8));
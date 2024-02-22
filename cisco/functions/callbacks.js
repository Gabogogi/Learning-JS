// callbacks when a function is passed as an argument and gets called
let inner = function(){
    console.log('Inner 1');
}
let outer = function(callback){
    console.log('outer 1');
    // callback;
    // setTimeout(callback, 1000) /*ms: used when you want to cause a delayed action */;
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
    setTimeout(function(){
        clearInterval(timerId);
   }, 5500);
}
/* console.log('test 1')
outer(inner)
console.log('test 2') */

// Example of callback function
let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? Nan: a + b;

function action (callback, a, b){
    return callback(a, b);
}

console.log(action(add, 6,7));

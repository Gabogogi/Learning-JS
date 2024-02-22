/* Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout */

let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);

// Fibonacci series
let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1){
            retVal = 1;
            } else {
                retVal = fibbRec(n -1) + fibbRec(n -2);
            }
    }
    return retVal;
}

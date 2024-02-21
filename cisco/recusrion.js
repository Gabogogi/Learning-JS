// A demonstration of recursion
//Uses javascript for Web
function recursion (n){
    let result = 1;
    while (n > 1){
        result *= n;
        n--;
    }
    return result;
}
console.log(recursion(6)); // 720

// we can also use a ternary operator
function ternaryRecursion(n){
    return n > 1 ? n * ternaryRecursion(n -1): 1;
}
console.log(ternaryRecursion(6)); // 720

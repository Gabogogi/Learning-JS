// Before arrow functions
hello =  function (){
    return "hello World"
}

helloNew = () => {
    return "Hellow World!"
}

// a step further

helloNew2 = () => "Hello World!" // only works if function has only one statement

console.log(helloNew())
console.log(helloNew2())

// with parameters
helloThere = (myName) => `My name is ${myName}`

console.log(helloThere('John Doe'))

// if there is one parameter, you can skip the parantheses
helloNoPara = nombre => `Mi nombre es ${nombre}`
console.log(helloNoPara('John Doe'))
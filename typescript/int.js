// we can define an interface
// we can use the interafce above to define objects
var person = {
    firstName: 'Lionel',
    lastName: 'Messi',
    age: 36,
    greet: function () { return "Hello, this is ".concat(this.firstName, " "); }
};
console.log(person.greet());

// we can define an interface

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): void;
}

// we can use the interafce above to define objects

const person: Person = {
  firstName: 'Lionel',
  lastName: 'Messi',
  age: 36,
  greet() {return `Hello, this is ${this.firstName} `}
}

console.log(person.greet())
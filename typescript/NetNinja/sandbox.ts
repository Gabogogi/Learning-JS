// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// we can assign later
// arrays
let ninjas: string[]; // allowed -> we should specify what type


// union types
// to declare mixed types, we can use union types
let mixed: (string|number)[] = [];
mixed.push('hello');
mixed.push(56);
// Invalid: mixed.push(false);

// We can also use union on non-array variables
// suppose we have uid that can ether be a no or string
let uid: string|number; // we don't have to use paranthesis

uid = '13';
uid = 45;

// objects
let player: object;

player = { name: 'messi', club: 'Miami' };

let playerTwo: {
  name: string,
  club: string,
  age: number,
  isMessi: boolean
}; // we can use this format for future playerTwo objects
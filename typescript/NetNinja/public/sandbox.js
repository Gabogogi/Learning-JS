"use strict";
// explicit types
let character;
let age;
let isLoggedIn;
// we can assign later
// arrays
let ninjas; // allowed -> we should specify what type
// union types
// to declare mixed types, we can use union types
let mixed = [];
mixed.push('hello');
mixed.push(56);
// Invalid: mixed.push(false);
// We can also use union on non-array variables
// suppose we have uid that can ether be a no or string
let uid; // we don't have to use paranthesis
uid = '13';
uid = 45;
// objects
let player;
player = { name: 'messi', club: 'Miami' };
let playerTwo; // we can use this format for future playerTwo objects
// ---------------ANY----------------------------
// reverse JS. All these statemnets are avalid
let room = 25;
room = true;
room = 'Seven';
console.log('test');

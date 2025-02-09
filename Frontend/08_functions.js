// Functions allows js to wrote reusable, modular code
// In general you should only attempt to call ur function after declaring, but it works somehow if not
// Hoisting
// Order of arguments does matter
// we can store values when we call a func that returns something
// no code after return is executed, it stops execution of the function
// function's length is number of parameters in arguments array
// console.dir(somefunc) -> arguments array and length prop can be seen
// somefun.length -> number of parameters in the function

// <------------------- Scope ------------------->

// where a variable is declared dictates where we can access it
// Function Scope --> vars defined inside a func will only be available inside the func
// Block Scope --> vars defined inside a block will only be available inside the block
// Lexical Scope --> (comes into picture when nested functions are there)
//  function outer() {       
//     let name = "Ayush";
//     function inner() {     ------> Here inner function will have access to its parent function vars --> Lexical Scoping
//         console.log(name)
//     }
//     inner();
// }

// <------------------ this keyword for functions -------------------->

// The value of this in JavaScript depends on how a function is called, not where it is defined.

// Global Context or Default Binding:
    // In non-strict mode, this refers to the global object (window in browsers, global in Node.js) if the function is called standalone.
    // In strict mode, this will be undefined.
    // function test() {
    //     console.log(this); // In non-strict: global object, In strict: undefined
    // }

// Object Context:
// When a function is called as a method of an object, this refers to that object.
// const obj = {
//     name: "Ayush",
//     greet() {
//         console.log(this.name); // "Ayush"
//     }
// };
// obj.greet();

// Arrow Functions:
// Arrow functions do not have their own this. Instead, they inherit this from the enclosing (lexical) scope where they are defined.

// const obj = {
//     name: "Ayush",
//     greet: () => {
//         console.log(this.name); // `this` is from outer scope (likely global or undefined)
//     }
// };
// obj.greet(); // undefined

// Explicit Binding:
// You can explicitly set the value of this using .call(), .apply(), or .bind().
// function test() {
//     console.log(this.name);
// }
// const obj = { name: "Ayush" };
// test.call(obj); // "Ayush"

// Constructor Function or Class:

// In a constructor function or a class, this refers to the newly created instance.
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(this.name);
//     }
// }
// const ayush = new Person("Ayush");
// ayush.greet(); // "Ayush"

// <----------------- Function Expression ------------------>

// storing a function in a variable
// const add = function(x,y) {return x+y;}

// Function are just any other values in js, we can pass them , store them or return them

// <----------------- Higher Order Functions ---------------->

// Functions that work with other functions

// accept a function as an argument
// or return a function

// function func1(function(){}) {
//     // ITS TAKING A FUNC AS AN ARGUMENT
// }

// func1(func2) ✅    func1(func2()) ❌ --> this will immediately execute func2 and maybe its returning something other than a func that will give an error

// if a function is returned from another function --> it should be stored in a value and then execute

// Factory Function -> that makes a function or returns a function

// Usecase of Factory functions -->

// function makeBetweenFunc(min,max){
//     return function(num){
//         return num >= min && num <= max
//     }
// }

// const isChild = makeBetweenFunc(0,18)
// const isAdult = makeBetweenFunc(19,64)    // pretty useful
// const isSenior = makeBetweenFunc(65,120)

// <---------------------------------- Methods -------------------------------------->

// functions added as a property in an object are called methods
// const obj = {
        // square: function(x) {return x * x}
    // }
// strings , arrays are objects in js --> wrapped in an object
// lets say we have a square method in our obj ------> obj.square() and obj["square"]()  <---- both ways can be used

// <---- Shorthand ---->

// const obj = {
//     name : "Ayush",
//     square(x) {return x*x},       <------------ not even function keyword is needed, we can directly define method without any key for it ----------->
// }


// <------------------------ "THIS" keyword in Methods ------------------------>

// use "this" to access other properties within the same object

// The value of "this" keyword depends on the invocation context of the function it is used in

// const cat = {
//     name : "Kitty",
//     color: "ginger",
//     meow(){
//         console.log(`${this.name} says meowwwww`)            --> here invocation context is inside obj, "this" refers to cat object <---
//     }
// }
// const meow2 = cat.meow
// meow2() ---> it says "empty" says meowwwww      ---> (Window --> top level object, everything lives inside it) this outside is the invocation context <----
// this meow2 goes to window--> window.meow2 -- returns meow2 func
// window.alert("hi")  -----. alert("Hi")
// bascally cat.meow() --> left part is the "this" and window.meow2() --> left part is the "this"

// <------------------------- try/catch ----------------------------->

// preventing crashes due to a single error on entire code
// error normally when vars are not defined --> "Uncaught reference"
// using "try" we try to perform something and if that goes wrong "catch" is used to catch the errors

// try {
    // <if something goes wrong here>
// }catch(e) {

// }

 
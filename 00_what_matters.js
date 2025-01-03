// word - which has no meaning in js
// keyword - has a specific meaning in code

// variables(can be changed whatever times we need) and constants (can't be changed once assigned)

// var let const 
// Hoisting - being able to access of a var or func before declaring it coz vars and funcs are hoisted on the top of code

// var a = 12; ==> js breaks down it like this
// var a; (declaration) //  and this is hoisted on the top of code so log code below will give undefined
// a = 12; (initialisation)
// console.log(a) // not considering lines  9 - 11
// var a = 12;

// Undefined and Not Defined are not same
// -----variable declared but not initialised is undefined
// -----variable which is not even declared , has no existence in code is Not Defined 

// Data Types in JS
// ---- Primitive type -->  aisi koi bhi value jisse copy krne pr only value copy hoti h reference
//                          pass nhi hota var ka
// ---- Reference type [], {}, () includes brackets  -->  in this agr hum a = [1,2,34,5] then b = a krenge then b pe a ka reference 
// bhi pass hojayega so any changes made in b will also reflect in a coz b is
// pointing to same refrence as a 

// We shouldn't use loops for like 2 or 3 ops coz using console.log() 3 times is far easier , we shouldn't complicate things unnecessarily

// DRY - Don't repeat yourself

// Functions - block of code to reuse
// --> for future use
// --> for reusing code
// --> to reuse code with different data


// <-------------- Functions --------------->
// function add (param1, param2){ these defined variables in function statement are parameters
    // console.log(param1 + param2);
// }

// add(arg1, arg2);  --> Values passed on to the function call are called arguments

// <-------------- Arrays ------------------->
// Arrays are collection of more than one data , the data type in js need not be the same

// Some common methods ->
//      push() -> to add at the last
//      pop()  -> to remove from the last
//      shift()  -> to remove element from start
//      unshift() -> to add element at start
//      spilce(index from where to start removing elements , count of how many to remove)  -> to 
//             remove an index from the middle

// <-------------- Objects -------------------->
// var obj = {} --> empty object
// arrays store a number of fields , objects store details about individual field

// var user = { 
    // name: "ayush"
    // address: "gkp"
    // sayHello: function() {
        // console.log("hello ayush");
    // }
// }     

// these individual details are called properties of an object 
// if the value of property is a function , then it's called a method

// <-------------------------- Advanced Topics ------------------------------>

// <------- var vs let / const --------->

// ES5 used var and ES6 introduced let and const
// Browsers come with built in HTML, CSS, and JS no external installation is needed
// we use ES5 + ES6 , updates in browsers updates properties of html, css and js

// var is function scoped (can be accessed anywhere inside its parent function)

// function random() {
//     for (var i = 0 ; i < 3 ; i++){
//         console.log(i)
//     }
//     console.log(i) // here i = 3
// }

// var adds itself to window object
// but this is not good since data can be exposed since window can be accessed from the browser and it
// adds itself to it
// Output -> 0 , 1 , 2 , 3(for outer log)

// there are some features which are not in js language itself but they are provided by the browser which we can use in our code, all those features we can find inside window object, its not part of js
// alert, prompt, setTimeout, setInterval etc. are provied by window object which is provided by the browser to js to use 

// let/const are block scoped - so they will give not defined if accessed outside block where it was defined
// don't add themselves to window object

// Browser provides sort of three things --> 
// window object, stack(callstack) and heap memory (collectively all three --> Browser context API)
// all the variables, data and intermediate data is stored in Heap Memory
// Intermediate data --> 1+2+3+4+5+6 = 3 + (3 + 4 + 5 + 6)  // computer also doesnt calculate it in one go so intermediate 3 will be stored in heap and further will proceed

// <-------- Execution Context -------->
// whenever a function is executed it creates a sort of imaginary container where function's code is executed, it includes three 
// things:
// ---> variables
// ---> all the funcs inside that parent function
// ---> lexical environment of this function -> it tells about what can be accessed from the E.C
// ---> Lexical env is sort of a chart where its mentioned which variables can be accessed by parent 
//      func and which vars it cant access, it consists scope and scope chain
//  child functions can access parent function variables

// Parent func will have access to all vars inside its body and functions defined but the vars inside 
// the child function's variables cant't be accessed since var is function scoped so they remain only 
// inside that function

// // This imaginary container is called Execution Context

// <----------------- Spread Operator --------------->
// <---- Copying Reference Types ---->
// use spread operator
// var a = [1,2,3,4,5]
// var b = [...a] // 3 dots and var which is to be copied // copies the data not passes the reference
// var b = a // it passes the reference of a so changes in b will change a also

// same for objs : 
// var a = {name: "Ayush"}
// var b = {...a} // copies the data

// <------------------ Truthy and Falsy Values -------------->
// Every kind of value in JS is either truthy or falsy
// Falsy Values --> 0 -0 0n(BigInt zero) false undefined null document.All ""/''/``(empty string)

// Avoid using document.All -----> use document.getElementById etc modern syntax
// In JavaScript, document.all is a special object that represents all elements in a document. While it's considered "truthy" in most contexts, it behaves like a falsy value when used in specific Boolean contexts.


// <------------------- forEach / for in / for of / do while --------------->

// forEach ----> 

// Its an array specific func , used when we want to perform a certain operation on each element of
// the array
// It should be noted that it doesnt change the original array, it perform all ops in a copy of the 
// original array
// var a = [1,2,3,4]
//      a.forEach(function(val){ // this func defines what opn is to be performed on each of the
//                                  element
//          val += 2
        // console.log(val)  
//      })
// so a will remain same since every op will be on its copy

// for in ---->

// Its used for looping over objects
// var user = {Name:"Ayush"}
// for (var key in user) {
        // console.log(key, user[key])  // prints Name Ayush
    // } 

// do-while ---->

// to do something until some condn holds
// var val = 1
// do {
    // console.log("HI"); // prints HI until val < 4
    // val++;
    // }while(val < 4)

// do-while loop executes at least once // since condition is checked after executing code inside "do"

// <---------------- Callback Functions --------------->

// jb bhi koi esa code jo baad me chlta h , kyuki wo baad me chlta h, js ko ye pata nhi hota ki wo
// complete hua h ya nhi, ese code ke completion pr js ko btaya jata h ki wo complete ho gya h aur 
// aap use chla skte ho, ye btane ka kaam callback ka h
// after completion -- a function is executed -- that func is called a callback func in js


// <-------------- First Class Functions --------------->

// functions when treated as values are first class functions
// var a = function(){}; // a function can be stored
// function(a){
        // a(); // if a is func we can execute it
// }

// a(function(){console.log("Hello")}) 

// <-------------- Array Behind the Scenes -------------->

// Array bts in js are nothing but objects
// if we say typeof [] // gives --> 'object'
// [1,2,3,4,5] -- > {0:1,1:2,2:3,3:4,4:5}  // its basically converted to an object with this kind of 
// structure and arr[-1] = 8 then it will not give error since its an object and stores at -1 key the
// value 8

// How to then differentiate between Array and Object ?
// ----> use Array.isArray([]) --> true
// ----> Array.isArray({}) ---> false

// <--------------- Deleting properties from an object ------------->

// use delete keyword ---> delete a.age; ---> a is an object with a prop age --> it will be deleted

// <------------------ Higher Order Functions ----------------->
// -----> HOFs are the functions which accept a function as a parameter or return a function or both
// Ex - forEach() uses a function as a param

// <------------------ Constructor Function --------------->

// this ---> points to window inside a function
// function user (age) {
    // this.name = "Ayush"
    // this.address = "gkp"
    // this.occupation = "Fullstack Developer"
    // this.age = age
    // }
// okay so if we want to create multiple instances of same kind of data (at least for now) we can use 
// constructor functions
// we can also pass a parameter and later take its value 
// we can create new instances by using "new" keyword, using new keyword on this returns an object
// var ayush = new user(21)
// -- it will have all and age will be set to 21

// <------------------- First class Functions ------------------>

// a language is said to have first class functions when the functions in that language can be treated
//  as values/variables, they can also be passed as arguments

// <------------------- new keyword ----------------->

// whenever its used by a constructor func, a blank object is created and has all the properties which was inside the function like
// function user (age) {
    // this.name = "Ayush"
    // this.address = "gkp"
    // this.occupation = "Fullstack Developer"
    // this.age = age
    // } 
// here, if we use ayush = new user(21), new will create a blank object and all the props of the constructor func -> name, address, occupation age will be added to that object
// {
//     name:"Ayush",
//     address:"gkp",
//     occupation: "Fullstack Developer",  // this is the object which will be created
//     age: 129,

// }

// <------------------- IIFE ---------------->

// Immediately Invoked Function Expression
// as name suggests , these functions are immediately invoked
// but they are invoked immediately in such a way to create a private variable
// (function(){})() --> wrap the func expression around () and also execute them using parentheses ()

// var ans = (function(){
//      var privateVal = 67 ---> THIS IS THE PRIVATE VARIABLE WHICH WE DONT WANT USER TO ACCESS
// 
//      return {                        ---> RETURNING AN OBJECT FROM THE IIFE AND STORING IT IN A VAR
//          getter: function(){
//              console.log(privateVal)  ---> GETTER METHOD IS USED TO ACCESS THE DATA
//          }
//          setter: function(val){
//              privateVal = val;          ---> SETTER TO MODIFY DATA
//          } 
//      }
// })()

// THERE CAN BE NO DIRECT CHANGES MADE IN PRIVATE VARIABLES


// <---------------- PROTOTYPE ----------------->

// Whenever we create an object it automatically has a property called prototype
// we see that as [[Prototype]] : Object 
// this prototype object contains many helper functions and properties which we can use for different
// purposes, an array when created already has the length property built-in we didnt create it , ity was already the part of "Prototype" object of that Array

// <---------------- PROTOTYPAL INHERITANCE -------------->

// Its just inheriatnce provided by the prototype object , every children will inherit the properties 
// of the parent as well as will have some of its own properties
// This line does the magicm: <---------- child.___proto___ = parent ------------->

// var Human = {
        // canFly : false,
        // canTalk : true,
        // isMammal : true
    // }
// Now , var Man : {
            // name: "Ayush",
            // age: 21,
//      }
    // 
// Now if i do ,                    <--- Man.__proto__ = Human --->

// by using this Man will have access to all props of Human object as well as all of its own properties

// <--------------------- this , call , apply , bind ---------------->

// <-------- "this" keyword -------->

// it is a special keyword in js which changes its value in different contexts

// <-- global scope -->

// in global scope it represents the "Window" object
// whenever something isn't inside any of {} , its in the global scope, is its inside {}these its said
// to be in local scope

// <-- function scope -->

// inside functions also, it represents "Window" object
// a function defined inside an object is called a "method" in js
// and value of this keyword inside a method gives object in which the method was defined
// inside any method "this" always refers to parent object

// <---- Event Listeners ---->
// element.addEventListener("click", function(){
//         console.log(this); // ---> gives element on which listener was called
// }
// inside event listeners, this always refers to "element" to which listener was called
// we can use it like tp change props ex-> this.style.background-color = "blue" --> it will set that 
// elements bg as blue

// <------- call ------->

// if we have a function and an object , as we know this value for a function is "Window" object
// but if we want to point this "this" value to the given object, we use .call() on the function
// so .call() ultimately calls a function and we can set "this" value by passing object to it
// func.call(obj) --> now the "this" value for function will be the object "obj"

// function abcd(val1, val2, val3){
//      console.log(this,val1,val2,val3);       op : obj 1 2 3
// }

// abcd.call(obj,1,2,3) // this is how we do with apply , if no arguments --> abcd.call(obj)
// same thing can be done with :

// <------- apply ------>
// abcd.apply(obj,[1,2,3]) ---> the parameters are passed in an array

// <------- bind -------->  // when later use is required
// it binds the object and the function but it doesnt execute the finction like call and apply
// var binded = abcd.bind(obj) // basically to make "this" value of func to point to object obj

// so basically these all : call, apply, bind can be used to change where the "this" keyword of a
// function is pointing to 


// <------------------- Pure and Impure Functions ------------------->

// <---------- Pure Functions ---------->

// funcs which always give the same output for a particular input
// it should never change the value of a global variable

// <---------- Impure Functions --------->
// which are not pure :)
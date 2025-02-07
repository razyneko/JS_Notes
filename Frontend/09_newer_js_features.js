// <------------------ Default Params ------------------>

// Initially slt,
// function multiply(a,b){
//     b = type of b !== 'undefined' ? b : 1;
//     return a * b
// }
// when params are given a default value, so if not given explicitly, this value will be set to parameter
// order of params matter
// its nice to put default ones at last after params which are not default


// <----------------- Spread --------------------------->

// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or
// elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to 
// the object being created.
// nums = [1,2,3,4,5]
// Math.max(nums) --> NaN
// Math.max(...nums) --> 5 --> spreads the data into elements
// console.log(..."hello")   <==>   console.log('h','e','l','l','o')  -> h e l l o

// We can copy an array using spread operator
// arr = [...nums, ...nums]  --> a copy of nums will be created (two or more arrays can be used to create an other array using spread)
// [..."hello"] ---> ["h", "e", "l", "l", "o"]

// Spread with Objects

// to copy properties of some object
// {...obj1, ...obj2} --> copies properties of obj1 and obj2 if there's a conflict in props, the last one is gonna overwrite
// {...[1,2,3,4]} ---> keys - index , value - elems


// <------------------------- Rest ------------------------>

// <---- Arguments Object ---->

// available inside every function
// array-like object
// has a length property
// doesn't have array methods like push/pop
// contains all the args passed to function
// not available inside arrow function

// but since array methods cant be used, Rest Operator is used
// it takes all args and put them into an array
// function print(...nums){
//     console.log(nums) ---->  print([3,4,5]) --> [3,4,5]
// }

// function(gold,silver,...everyoneElse)


// <--------------------------- Destructuring ------------------------->
// a shorter and cleaner syntax to unpack :
// values from array
// properties from object
// into distinct variables

// <--------- Arrays ----------->

// const arr = ["Ichigo","Kurosaki", "Bleach", "Rukia", "Kuchiki"]
// const[fname,lname,anime,...second] = arr ---> fname = "Ichigo", lname = "Kurosaki", anime = "Bleach" --> second = ["Rukia","Kuchiki"]
// since 3 vars were there --> first three are stored in those corresponding 3 vars
// we can also use "Rest" operator to get an array of all remaining to be stored in some var
// these all are copies and no change in original array

// <--------- Objects ---------->

// more practically used
// const obj = {
//     name: "Ayush",
//     age: 21,
//     email: "bruce@wayne.com" 
// }

// const {name, age, email} = obj -----> name = "Ayush", age = 21, email = "bruce@wayne.com"
// noramlly we have to use same var names as existing properties in obj
// but if we want to change the var name , we could do this
// const {name: FirstName} = obj ---> FirstName = "Ayush"
// similarly we can give a default value to a var if the corresponding prop is not in the object
// const {birthYear} = obj          ----> birthYear = undefined
// const {birthYear = "N/A"} = obj  ----> birthYear = "N/A"


// <----------- Params ---------->

// to destructure an object as params
// function nameAge({name,age}) {
//     console.log(name, age)   ---> this function accepts an object as input
// }
// we need parentheses to destructure the object into vars

// type of [] ---> "object"

// it can data of any type

//  arr = [null, undefined, "ayush", 98, {}]

// length property to get size of array
// arr.length = 6

// here, arr[5] --> undefined (no error)   // the key was not found

// const arr = [] and let arr = []   --> difference?

//  we can do directly --> arr[10] ="hi"
// it will just contain empty elements in between

// <----------------------------------------- Array Methods ------------------------------------------>

// arr = ["js", "ruby", "rust", "go", "python"]

// <------- Array.push() ------>

// it adds an element to last of the array
// it returns new length of the array after adding to last
// we can also push more than one at a time .push("scala","lua")
// arr.push("java")  --> it returns 6
// arr = ["js", "ruby", "rust", "go", "python", "java"]

// <------- Array.pop() ------>

// it removes the last element from the array
// it returns the removed element
// it doesn't need any argument
// arr.pop() ---> "java"
// arr = ["js", "ruby", "rust", "go", "python"]

// <------- Array.shift() ------->

// it removes the element from the start
// it returns the element removed from the start
// arr.shift() --> "js"
// arr = ["ruby", "rust", "go", "python"]


// if we do all this in an empty array -- we get undefined --- arrays are objects

// <------ Array.unshift() -------->

// it adds one or more element
// it return new length of array
// arr.unshift("js", "fortran")   --> returns 6
// arr = ["js", "fortran", "ruby", "rust", "go", "python"]


// <------ Array.concat(another_array) --------->

// let dogs = ["rusty", "wyatt"]
// it concatenates one array with other, the order is arr1 then arr2 
// arr.concat(dogs) ---> ["ruby", "rust", "go", "python", "rusty", "wyatt"]
// dogs.concat(arr) ---> ["rusty", "wyatt", "ruby", "rust", "go", "python"]
// it doenst modify the original array

// <------ Array.includes() ------>

// returns true or false depending upon if it includes the given data or not
// arr.includes("C++") ----> false
// arr.includes("js")  ----> true

// <------ indexOf() --------->
 
// it returns the index of first occurence of the element provided in the array
// if its not present -- gives -1
// can be used on a string also

// <----- Array.reverse() --------->

// it reverse the orginal array
// its a destructive method, it does change the original array
// arr.reverse() -------> now arr = ["python, "go", "rust", "ruby", "fortran", "js"]


// <--------- Array.slice(start?,end?) --------->

// to slice a portion of an array
// both the args are not compulsory -> if passed without args -- returns a copy of orginal array
// if start is provided -- it slices the array from start index until end of array
// if start and end both are provided, it slices the array from start index to index before the end (not including end)
// arr.slice(2,5) ---> returns ["rust", "ruby", "fortran"]
// arr.slice(-2) ---> returns  ["fortran", "js"] --> last two elements
// Negative indices are interpreted as offsets from the end of the array. 
// arr.slice(-2,-4) ---> returns [] --->    // If start is greater than or equal to end, the result is an empty array
                                            // because no valid range is covered.
// arr.slice(-4,-2) ---> returns ["rust", "ruby"]   

// <-------- Array.splice(start, deleteCount, ... items) ------------------>

// changes the content of an array by removing or replacing exisiting existing elements and/or adding new elements in-place
// it's destructive to original array
// arr.splice(3,1,"swift")  --> at the index 3 , remove one element and add "swift" at that index
// arr -> ["python, "go", "rust", "swift", "fortran", "js"]
// arr.splice(1,0,"ts") --> at index 1 , dont delete anything just add "ts" at that index
// arr = ["ts", "python, "go", "rust", "swift", "fortran", "js"]
// arr.splice(5,1) ---> it will just delete "fortran" from arr and returns an array of deleted ones ---> ["fortran"]
// if arr.splice("sjkfsb", 1) ---> it defaults to 0 so first elem will be deleted

// <-------- Array.sort() ---------------->

// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now
// sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences
// of UTF-16 code unit values.
// if its called without a comparator elems are converted to strings and are sorted according to the UTF-16 unicode code points
// (a,b) => a - b          /
// temp = [1,2,3,4,5]
// temp.sort(compareFn)   // we have to pass a comparator
// func compareFn(a,b) {
        // return a - b
    // }
// sort considers  if a-b > 0 --> a > b  // if a-b < 0 ---> a < b    // if a-b = 0 ---> a = b
// its an in-place method
// use .toSorted() to get copy sorted version of this but not in place

// <-------------- Reference Types and Equality Testing ------------->

// [1,2,3] === [1,2,3] --> false
// [1,2,3] == [1,2,3] --> false (both stored at different memory locations)
// js doesnt compare the contents in above two, it compares if they are pointing to same reference in memory
// let dummy = arr (they both will point to same memory location)
// so dummy === arr --> true

// <---- Why "const" keyword is used with arrays ? --->

// when we const with an array , it doesn't mean that the elemenst can't be changed but the memory refernece is being kept same
// arr-variable point to a certain specific memory reference
// if we set the arr to an entirely new reference, then we will get an error 
// arr = ["SDE", "SWE"] // gives an error
// content can be changed on the same memory reference , container remains the same
// arr = 1 , const will prevent this kind of action too



// <----------------------------------- Array Callback Methods ------------------------------------->

// <------------ ForEach ------------->

// accepts a callback function, calls the function "for each" element in the array
// writing the anonynous function expression is commonly used
// arr.ForEach(function(el) {console.log(el)}) , we could also pass a named function
// Nowadays, ( for of ) is used instead

// <------------ Map ---------------->

// creates a new array with the results of calling a callback on every element in the array
// we return the change we want , the function performs some operation on element and return 
// like if we want to make all elements twice --- return num * 2
// it will create an array with all twice now , when we need specific details from lets say an array of objects

// <----------- Filter -------------->

// creates a new array that passes some test by the callback function
// callback returns a boolean, if true the elem is added to new array
// parent array remains same
// if i want like >8.5 imdb rating movies in my movies array of objects

// We can chain filter and map together, there will be usecases
// movies
    // .filter(() => {})
    // .map(() => {})

// <----------- Every ------------->

// array.every(() => {})
// tests whether all elems of an array pass a test by the callback function
// returns false even if one elem fails the test, otherwise true

// <----------- Some -------------->

// arr.some(() => {})
// opposite to every
// return true if atleast one passes the test by callback function

// <-------------- Reduce -------------------->

// executes a reducer function on each element of an array, resulting in a single value
// simple usecase --> summing an array
// [1,2,3,4,5].reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
// }, 100) --> 100 will be treated as initial value
// in each step accumulator is set "accumulator + currentVlaue"
// it accepts an optional argument to set Initial value to start with

// <---------------------------------------- "this" keyword inside Arrow Functions ------------------------------------>

// Inside an arrow function, "this" refers to "window" object 
// refers to scope it was created in 
// "this" has nothing to do with the scope inside a regular function expresson, it has to do how its executed
// the value of this in an arrow function is same as the scope of function containing arrow function

// const person ={
    // name: "Ayush",
    // printName: () => {
        // console.log(`${this.name}`)             -----> prints undefined -> why ? ---> because "this" for this arrow func will be the "this" 
        //                                             of the scope it was defined in which is "person" , for person(window.person) the "this value is "window", 
        //                                             so for this arrow func's "this" is "window" and "window" has no "name" variable, so undefined
    // },
//     shoutName: function(){
//         setTimeout(() => {
//             console.log(`${this.name}`)            ------> its gonna print "Ayush" , "this" for arrow func is "this" of the scope it was defined 
//                                                            which is outer function whose
//                                                            "this" is person object
//         })
//     }

// }

// <-------------------------------------------------------------------------------------------------------------------->



// <---------------------------------------- Arrow Functions ----------------------------------------->

// syntactically a compact alternative to a regular function expression, without writing function keyword
// const func = (params) => {
//     return (anything)
// }
// used to create function expressions
// for a single argument(only this case)
// const func = x => {
//     return (bfdkf)
// }

// <---- Implicit Returns -----> (only for arrow functions)

// we can skip the return keyword
// const square = num => (
//     num * num    // for kind of longer returns
// )

// const square = num => num * num  // for shorter ones
// only works if there is only one expression inside function body to be returned(without return keyword)

// using map, ForEach with arrow function 

// arr.map((elem) => {
    
// })

// arr.map(elem => elem * 2)  // one liner implicit return



// <--------------------------------------------- setTimeout and setInterval --------------------------------------------->

// <----------- setTimeout ------------>

// delaying or postponing execution of program
// console.log("before")
// setTimeout(() => {
//     console.log("Hi")   --> print Hi after 3 seconds(3000 ms)
// },3000)
// console.log("after")

// Output -> before --> after --> (after 3 secs) "Hi"

// <----------- setInterval ----------->

// keeps repeating stuff every x ms
// const inter = setInterval(() => {
//     console.log("hi")
// },1000)
// repeatedly calls the callback
// to end it --> clearInterval(inter) --> it stops the setInterval  --> to stop we need to have it stored in a var(it gives id of that particular setInterval)

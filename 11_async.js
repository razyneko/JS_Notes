// <------------------ Call Stack --------------------->

// The mechanism JS interpreter uses to keep track of its place in a script that calls multiple functions
// How JS knows which function is currently being run and what functions are called from within that function
// Follows LIFO (last in first out) order

// when a script calls a function, the interpreter adds it to the call stack and then starts executing that function
// any functions that are called by the currently executing function will be added to call stack further up and run when their calls are reached
// when the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing


// There is a call stack visualiser in Chrome , we can use debugger there.


// <---------------------------------- WebAPIs and Single Threaded --------------------------------->

// Javascript is Single Threaded
// ---> at any given point of time, single JS Thread is running at most one line of code (1 task at a time)
// since it performs at most one task at a time, if an api call is made does it wait ?????
// this is not good to wait for some task and all tasks are pending in between
// one way to fix that would be using setTimeout()

// <------- On Browser --------->
// console.log('sending a request ...')
// setTimeout(() => {
    // console.log("data recieved")         --> sending a req --> eof ----> 3 sec later ---> data recieved
// },3000)
// console.log('eof')

// we just said JS is single threaded it should have waited for setTimeout() 
// the gist is .... its not JS --> its the browser 
// Browsers are typically written in C++, and have features JS dont

// to visualize --> "latentflip.com/loupe"
// setTimeout() is also provided by the browser
// Browsers come with WebAPIs that are able to handle certain tasks in the background(like making reqs or setTimeout())
// The JS call stack recognizes those WebAPI functions and passes them off to the browser to take care of
// Once the browser finishes those tasks they return and are pushed onto the stack as a callback

// <----------------------------------- Callback Hell --------------------------------->

// setTimeout(() => {
    
// }, 1000)
                           // one way would be this if we want an order
// setTimeout(() => {
    
// }, 2000)
// setTimeout(() => {
    
// }, 3000)

// another way .. would be nesting setTimeouts so that innner i executed and then only the outer one
// when one thing should happen only after some other thing is finished

// <------- commonly used pattern -------->

// two callbacks are passed one for success and other for failure
// searchMovies('batman' , () => {
//     saveToDatabase(movies, () => {
//         // if everything went well, run this
//     }, () => {
//         // if it failed, run this
//     })
// }, () => {
    //  if api is down
// })
// callabcks are used when we have to lets say call 3 api endpoints one after another
// Callback hell can make the code messy and less understandable ... Enter Promises


// <------------------------------- Promises ----------------------------->

// A Promise is an object representing the eventual completion or failure of an aysnchronous operation.

// using new keyword, we can create a promise
// Promise --> PromiseStatus and PromiseValue
// A promise is a returned object to which we attach callbacks, instead of passing callback into a function
// on basis of resolve or reject

// const newPromise = new Promise()
// newPromise
// .then(() => {
//     console.log("success");
        // runs when promise is resolved
// })

// .catch(() => {
//     console.log('failure')
        // runs when promise is rejected
// })

// we can significantly reduce this mess using promises

// <--- Magic of Promises --->

// fakeRequestPromises('dummyurl.com')
// .then(() => {
    //     console.log("1")
    //     return fakeRequestPromises('dummyurl.com/1')
    // })
// .then(() => {
         // console.log("1")
         //return fakeRequestPromises('dummyurl.com/1')
    // .catch(() => {
//       console.log('Oh no .. Error')
    // })
// we can chain .then() like this

// and the coolest part is that we can use only a single catch statement to catch error at any part
    // })
// this order is followed while the execution
// a promise is usually resolved with some data passed
// This is called Promise Chaining

// <------------- Creating Promises ------------->

// function random() {
    // return new Promise((resolve,reject) => somefunction())
//  }

// random()
// .then(() => random())
// .then(() => random())
// we can chain them up like that
// and a single .catch can be used to handle any reject

// <---------------- Async / Await ------------------>

// a newer and cleaner syntax for working with async code
// Syntax "makeup" for promises (built upon promises)

// <---- Async ---->

// async functions always return a promise automatically (no explicit need to return new Promise)
// if the function returns a value, the promise will be resolved with that value
// if the function throws an exception/error, the promise will be rejected
// we can throw errors in js --> throw new Error('this is an error')
// we can also throw "error" (string)

// <---- Await ---->

// we mostly use await inside functions declared with async keyword or simply async functions
// to wait for an async function to return
// await will pause the execution of the function, waiting for a promise to be resolved
// async function() {
    // let data = await aPromiseReturningFunction() // waits for this promise to be resolved
// console.log(data)
// }

// <----------- Handling Rejections ------->

// using try catch ---> we can make sure if its rejected ... our code doesn't break

// when we use try and catch --> catch(e) --> the (e) will contain the value with which promise was rejected



// <---------------- Synchronous JS ----------------->

// one task finishes then only second starts
// if a sync program requires waiting for a response from a remote server or an API, the program will actually be stuck
// waiting for the response , wont be able to do anything until response is returned ... sometimes knowns as block-in
// to avoid that ... Async Programming comes into picture


// <----------------- Async Programming ---------------->

// It is a process that allows an application to run a second set of instructions while focusing on its primary or basic process
// Async Programming has several benefits including improved application performance, wide application to different coding langauges, and better user experience
// A few use cases of async programming inlcude reduced inefficiencies from an app and efficient data collection

// Function passed as an argument to another function is callback

// basically one way to achieve async code would be using nested callaback... but the downside is callback hell 

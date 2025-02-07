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



// <------------------- Making Requests --------------------->

// <-------- AJAX -------->

// (Asynchronous JavaScript and XML)
// Definition: Technique to update parts of a web page without reloading, using asynchronous HTTP requests.
// Key Features:
// Uses XMLHttpRequest or Fetch API.
// Can send/receive data in formats like JSON, XML, or plain text.
// Improves user experience with dynamic content loading.
// Example Use Case: Fetching live data like weather or chat messages without refreshing the page.
// making request on the page while its already loaded or after it is loaded
// we get data from the server in JSON ... not html css js --> its renedered locally by our browser

// <-------- APIs ------------>

// Application Programming Interface
// computing interface which defines interaction between multiple software
// WebAPIs are simply called APIs in web dev industry

// <---------- WebAPIs ---------->

// Definition: Web APIs are interfaces provided by the browser to interact with underlying functionality, such as manipulating the DOM, fetching data, or interacting with hardware.
// Examples:
// DOM API: For accessing and modifying HTML elements.
// Fetch API: For making HTTP requests.
// Geolocation API: For getting user's location.
// Web Storage API: For localStorage and sessionStorage.
// API for either a web server or a web browser  ... work on HTTP
// they expose some endpoints .. they respond with information for the code to consume
// kind of a portal to a database to fetch information 
// theres a lot that we can do other than fetching data .. ex Twitter API, Facebook API
// check out TwilioAPI ... its cool

// <----------- JSON ----------->

// Javascript Object Notation
// format to send data
// keys should be in double quotes .. not even single quotes
// undefined cant be use 
// we get a string of data from the API not the json itself
// JSON.parse() : json => js object
// JSON.stringify() : js object => json
// by default all instances of undefined are replaces with null and all unsupported native data types are censored
// its basically AJAJ 
// XML isnt used nowadays .. it consisted of HTML like structure with custom tags


// <------------- HTTP Verbs ---------------->

// GET, POST, PUT, PATCH, DELETE etc

// <------------------ HTTP Status Codes ----------------->

// code that comes back in a http response
// starting with 2 -> succesful requests
// starting with 3 -> redirection messages
// starting with 4 -> Client error responses .. smth gone wrong in the client side
// starting with -> server side errors 
// typing google.co --> redirects to google.com  --> 301 (redirection)

// <----------------- Query String -------------->

// if a query isnt matched or is wrong .. it doesnt give an error we just get teh data from the endpoint

// <--------------- HTTP Headers ---------------->

// HTTP headers are key-value pairs sent between the client and server to provide metadata about the request or response.
// Types:
// Request Headers: Sent by the client to the server (e.g., User-Agent, Authorization).
// Response Headers: Sent by the server to the client (e.g., Content-Type, Cache-Control).
// General Headers: Used in both requests and responses but don’t relate to the content itself (e.g., Date, Connection).
// Common Headers:
// Content-Type: Describes the data format (e.g., application/json).
// Authorization: Contains credentials for authenticating the user.
// Accept: Specifies the media types that are acceptable in the response.
// User-Agent: Identifies the client software.
// Cache-Control: Controls caching behavior.
// we set content-type : application/json


// <---------------- XMLHttpRequest --------------->

// the orignal way of sending rquests via js
// doesnt support promises .. so tons of callbacks will be there
// Syntax:

// creating an new XHR object
// const req = new XMLHttpRequest();
// req.onload = () => {
//     console.log("ur content")
//     console.log(this)  // this returns the XHR object which contains response and responseText
//  console.log(JSON.parse(this.responseText)) // converts to js object
// }
// req.onerror = () => {
//     console.log('Error');
//     console.log(this)
// }
// req.open('GET', 'some api end point'); // swapi - star wars api
// req.send();

// for many request we need to nest the requests


// <---------------------- Fetch API ------------------------->

// newer than XHR and supports promises
// fetch function returns a promise
// other than url we can pass an object with url with headers and stuff
// response object body is not already parsed ... its a readable stream
// promise is resolved as soon as requets get any header .. but to read the body .. promise is resolved as soon as it can
// we have to read and parse the readable stream
// in fetch api the "res"(fetch resonse object) has a built in method called json() to read the body and parse the json.. its not the same as JSON.parse
// but the thing to note is that res.json() also returns a promise
// so we could do .then on the same line but as we saw that promise chaining makes code cleaner .. so we return res.json() and chain a .then after the current .then
// for making another request we can use fetch again and return that and again chain .then
// instead of nesting chaining is preferred but that also makes it serialized .. meaning first one should always be resolved for the second one to be made

// fetch("someurl.com/id")
// .then((res) = > { return res.json() })
// .then((res) => {return res.json() })
// .then((data) => {console.log(data); return fetch('some other url.com/api/name') })
// .then((res) => { return res.json() }
// .then((data) => {console.log(data)})
// .catch((e) => {console.log('error)})

// <---------- cleaner way --------->

// use async / await
// const request = async () => {
    // try{
        //     const res = await fetch('apiendpoint');
//     const data = await res.json();
//     console.log(data)
// <------ one more request ------>
    // const res2 = await fetch('someotherendpoint');
    // const data2 = await res2.json();
    // console.log(data2)
    // }
    // catch(e) {
    //     console.log(e)
    // }
// }

// request();

// when using async functions .. by default error is not handled
// so we should always wrap the content with try / catch

// the only not so good thing about fetch was sperate promise for json parsing or seperate json parsing
// comes into picture "Axios"


// <----------------------- Axios -------------------------->

// include the cdn or do npm i axios
// a library for making http requests
// we dont have to parse json using res.json()
// we just call axios.get('url)
// .then((res) => console.log(res))
// axios parses the res and fill in the res.json() to "data" field
// axios.get('url')
// .then(() => )
// .catch(() =>)
// we could do the same thing inside an async func
// const request = async () => {
//     const res = await axios.get('url');
//     const data = res.data;
// }
// again whenever using async functions it should be wrapped with try catch to handle errors

// <-------- Setting headers with Axios ----->

// we can pass an object as a second parameter (config object) in axios.get alongside url .. this object can contain various objs like
//  header object .. in which we can specify headers

// async() => {
//     const config = {
//         headers: {
//             Accept : 'application/json'
//         }
//     }
//     const req = axios.get('url', config)
// }

// whenever some lines of code performs an individual task -- we should make a function for it
// this makes our code modular
// if any request is made directly or indirectly inside the fucntion we should make it async and use await for responses
// async function returns a promise
// inside the form object we have elements inside which we have access to name attribute we provided to input
// we can use form.elements.nameValue.value to get the value typed in the input
// we can use template literals for query if there is only one query .. but if we have to add more than one its kinf of janky
// as we did with headers ... queries go into params obejct
// we can create a config object and inside it we can add a params object containing all the queries
// config is not strictly named

// <---------------------------- Why u need to be a good problem solver ? ------------------------------->

// while solving problems we always think if the array comes out to be empty we have to make a check for that
// similarly if im calling to an endpoint and i want to get 10 results ..... we should think in the way 
// what if if it doesnt have 10 results
// if we want to get image of every lets say show froma  tv show api ... we have to make a check if the image is not present for that particular show

// <---------------- Synchronous Programming ----------------->

// one task finishes then only second starts
// if a sync program requires waiting for a response from a remote server or an API, the program will actually be stuck
// waiting for the response , wont be able to do anything until response is returned ... sometimes knowns as block-in
// to avoid that ... Async Programming comes into picture


// <----------------- Async Programming ---------------->

// It is a process that allows an application to run a second set of instructions while focusing on its primary or basic process
// Async Programming has several benefits including improved application performance, wide application to different coding langauges, and better user experience
// A few use cases of async programming inlcude reduced inefficiencies from an app and efficient data collection

// Function passed as an argument to another function is callback

// basically one way to achieve async code would be using nested callabacks... but the downside is callback hell ... Enters into picture -- "Promise"

// <----------- Promises --------------->

// A Promise has 3 possible states:

// (1) Pending
// (2) fulfilled -> a value is returned
// (3) Rejected -> an error has occured

// const promise = new Promise((resolve, reject) => {
//     const isOkay = false;

//     isOkay ? resolve('Everything is okay!') : reject("OOPS! something's wrong")
// })

// const promise =  new Promise((res,rej) => {
//         const isOkay = true;
//         setTimeout(() => {
//             isOkay ? res('Okay okay') : rej('oops')
//         },4000)
// })

// the value that is passed to then or catch is the resolve or reject value

// <------------ Promise.all() ------------>

// to consume several promises at the same time and in a specific order
// Promise.all([promiseOne, promiseTwo ...])

// .then((data) => console.log(data[0], data[1]))   ---> data (resolved values are also stored in an array)
// .catch(err) => console.log(err) --> a single catch can be used
// if any one of them is rejected ... we get the error

// async/await are just syntactical sugar built on top of promises, easier to read
// in a regular function async is not valid
// use try catch so that due to one error , entire app doesnt break



// <--------------------- Fetch API -------------------->

// <----------------- What is Node ? ---------------->

// until recently, we could only run js code inside the browser
// node is a js runtime that executes js code outside the browser
// same js syntax can be used then to write server side code

// <---------------- What is Node used for ? ---------->

// Web Servers
// CLI tools
// Native Apps ( VS code is a Node app)
// Video Games
// Drone Software

// <------------- Node REPL ------------>

// read evaluate print loop
// browser console is a REPL

// <---------- Node.js vs Client side JS ----------->

// window, document, DOM apis ( browser specific stuff) not present in node
// node comes with built in modules that dont exist in the browser
// these modules help to interact with os and files/folders
// global object here is "global" (consists setTimeout, setInterval etc)
// node index.js (in the terminal) executes index.js

// <----------- Process and argv ------------------>

// The process object provides information about, and control over, the current Node.js process.
// The process object is an instance of EventEmitter.
// it has bunch of functions .. process.version , process.release, process.cwd() (prints current working directory)
// process.argv -> array fo strings
// The process.argv property returns an array containing the command-line arguments passed when the Node.js process was
// launched. The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is
// needed.
// The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional
// command-line arguments.

// <-------------- File System Module ------------>

// we have to do require('module_name') for using modules in node
// all methods have async and sync versions
// sync ones block the entire code halting all connections
// fs.mkdir() -> async 
// fs.mkdirSync() -> sync

// const random = process.argv[2] || "Project" --> we can use this way if no arg is passed
// fs.writeFileSync() to write in a file ..  creates if it doesnt exist / overwrite if present
// these are created from where the script is ran

// <------------------ module.exports ------------------>

// to require a file that is not a module/package from npm but a seperate file on the computer
// we use const file = require('./math') -> if math.js is on same directory as the file we are requiring it from 
// if we havent used module.exports from math we will get an empty object if we console.log(math) from our file
// if we have two scripts in the same html all thier stuff is loaded and either of them can acces data from either
// now but if we require from math but math doesnt export anything we will not be able to use any data of the math file
// whatever we pass in the module.exports can be accessed by other files requiring it, by default its an object
// module.exports is returned on requiring and we can also use object drestructuring 
// const { PI, add } = require('./math') // just an example
// it is the data that is being exported
// exports variable is a varible that is available within a module's file level scope and is assigned the value of module.exports, before the module is evaluated
// exports is a shortcut to module.exports -> module.exports.f = exports.f
// so basically exports = module.exports initially and since reference is passed so changes in exports will be reflected on module.exports too
// -> but if exports is reassigned .. it no longer is associated with modue.exports

// <--------------------- requiring directories -------------->

// when we require an entire directory node will look for the index.js file, whatever that fil exports is the data that the dir exports
// packages we use has this kind of structure

// <-------------- npm ------------------->

// node package manager
// a library of thousands of packages / cli tool to install and manage those packages
// when we install a package node modules folder is created and package-lock.json(record of content of node modules directory)  it is all the code that is required by that package
// when we do npm i package we install it locally on that specific directory
// to intsall globally npm i -g cowsay
// installs at highest level of the pc
// if installed globally -> we can access in a repo with npm link package_name
// most of the time we will use local installation
// to install a specific version npm i something@4.0.8
// npm start npm test --> we dont use run for it why ? we use it for npm run dev
// these are added to path 
// package.json -> metadata and info about the project - dependencies, dev dependencies etc
// creation utility for package.json (template) -> npm init
// kind of a record for the project
// it helps in keeping track of the dependencies and helpful for sharing the project and installing same project on a different machine
// when we use npm install -> it installs all dependencies listed on the package.

// <--------- Express ---------------->

// it is a npm package and a framework that manages everything from recieving requests to sending response, connecting to databases etc
// "/" is the root route --> facebook.com <==> facebook.com/
// requestHandler is also a middleware
// stuff that can be used or done before route handling by server can be called as middleware
// comes in between acceptance of request by server and route handling by server
// app.use(function(req, res, next) {
    //do some stuff
//     next(); -> it sends the request to routes now
// })
// there is an order
// error handler ?

// when we log in server gives us kind of a token that is stored at server and client both and any time next you interact server knows who uare using this cookie
//  cookies are data that is stored in the client(browser)
// by using this cookie we can interact with the server, server knows this cookie and 
// this whole conenction with that cookie is a session
// process of login to logout  -> session
// next time login --> new session is created
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// 
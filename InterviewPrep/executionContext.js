// JavaScript is a single-threaded interpreted language. Every browser has its own JavaScript engine. Google Chrome has the
// V8 engine, Mozilla Firefox has SpiderMonkey, and so on. They all are used for the same goal, because the browsers cannot
// directly understand JavaScript code.

// <---------------- What is the Execution Context ? --------------------->

// When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

// During the context runtime, the parser parses the source code and allocates memory for the variables and functions. The source code is generated and gets executed.

// There are two types of execution contexts: global and function. The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.

// <------------------ Phases of the JavaScript Execution Context ------------>

// There are two phases of JavaScript execution context:

// Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.
// Execution phase: In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.
// Everything in JS happens inside this execution context. It is divided into two components. One is memory and the other is code. It is important to remember that these phases and components are applicable to both global and functional execution contexts.


// <------ Creation Phase --->
// --> Memory 
//     -- variable: undefined
//     -- Function: {...}
// --> Code
//     -- Each line of source code is executed line by line from top to bottom
// 

// 
// <------ Execution Context --->
// At the very beginning, the JavaScript engine executes the entire source code, creates a global execution context, and then
// does the following things:
// Creates a global object that is window in the browser and global in NodeJs.
// Sets up a memory for storing variables and functions.
// Stores the variables with values as undefined and function references.
// This is called the creation phase. 
// Creation Phase in Execution Context

// After this creation phase, the execution context will move to the code execution phase.

// <---------------- Execution Phase ------------------->

// Now, in this phase, it starts going through the entire code line by line from top to bottom. As soon as it encounters any variables it assigns them the value from the code in memory. Until now, the value of variables was undefined by default.

// Then we get to the functions. As functions has already been allocated in memory, JS engine directly jumps into the line where function is being called and then that function will be invoked and JavaScript once again will create a new function execution context.

// Code Execution Phase

// Once the calculation is done, it assigns the value returned by function in the variable that was undefined before and the function execution context will be destroyed.

// The returned value from a functiobn will be assigned on the variable that was storing the function returned value. This happens for all variables. Once the entire code execution is done completely, the global context will look like this and it will be destroyed also.
// example
// --> Memory
//     -- n = 5
//     -- square : Function{...}
    // -- sqaure1 = 4


// <-------------- What is the Call Stack? ------------->
// To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack. A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

// It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

// When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.

// The call stack has its own fixed size depending on the system or browser. If the number of contexts exceeds the limit, then a stack overflow error will occur. This happens with a recursive function that has no base condition.

// <---------------- Conclusion -------------->
// In conclusion, JavaScript execution context is a crucial part of understanding how JavaScript works behind the scenes. It determines the environment in which code is executed and what variables and functions are available to use.

// The creation phase includes creating the global and function execution contexts, creating the scope chain, and allocating memories for the variables and functions. During the execution phase, the JavaScript engine executes the code line by line. This includes evaluating and executing statements.
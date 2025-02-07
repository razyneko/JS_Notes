
// varibales with var/let/const all are hoisted but in different ways
// variables(can be changed whatever times we need) and constants (can't be changed once assigned)
// var x = 5; (declaration + initialisation => definition)
// var let const 
// Hoisting - being able to access of a "var" or "func" before declaring it coz vars and funcs are hoisted on the top of code
// Definition:
// Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope (global or function)
// during the compilation phase before the code is executed.

// Example 1 (Function Hoisting):
// greet(); // Output: Hello
// function greet() {
//     console.log("Hello");
//   }
// Explanation: The entire function greet() is hoisted, so it can be called before its definition.

// Example 2 (Variable Hoisting with var):
// console.log(x); // Output: undefined
// var x = 5;
// Explanation: The declaration var x; is hoisted, but x = 5; stays in place. Therefore, x is undefined when accessed before assignment.

// ES6 Variables (let and const):
// console.log(y); // ReferenceError
// let y = 10;
// Explanation: Unlike var, let and const declarations are hoisted but remain in the Temporal Dead Zone (TDZ) until initialization.

// Why It Happens:

// Hoisting allows functions and variables to be referenced before they are physically declared, enabling better flexibility in coding.

// Important Notes:

// Function declarations are fully hoisted.
// Function expressions and arrow functions are not hoisted.
// let and const variables avoid unexpected behavior by enforcing block scoping and TDZ.
// Variables declared with let and const are hoisted to the top of their block scope, not the global or function scope like var. However, they remain uninitialized in the Temporal Dead Zone (TDZ) until their declaration is encountered.
// if they are hoisted too why it doesnt give undefined ?

// Good observation, but here's why it doesn't give undefined:
// In JavaScript, let and const are hoisted but remain in an uninitialized state during the TDZ. Unlike var, which is initialized with undefined during hoisting, let and const are marked as uninitialized placeholders.
// When you try to access them before their declaration, the JavaScript engine throws a ReferenceError instead of returning undefined.
// Why?
// Design Decision: This behavior ensures that variables declared with let and const must be explicitly initialized before use, avoiding common mistakes associated with var.
// console.log(a); // ReferenceError
// let a = 10;
// If a had been initialized to undefined, it would behave like var, defeating the purpose of stricter scoping rules.

// Best Practices:

// Always declare variables at the top of their scope to avoid confusion.
// Use let and const instead of var to prevent hoisting-related issues.

// How it Works:

// Declarations: Variable and function declarations are moved to the top of their scope.
// Initializations: Only the declarations are hoisted, while initializations remain in place.

// Temporal Dead Zone (TDZ) in JavaScript
// Definition:
// The Temporal Dead Zone (TDZ) refers to the period between the start of a scope (block) and the point where a let or const variable is declared and initialized. During this period, accessing the variable will throw a ReferenceError.

// Why Does TDZ Exist?

// Prevents access to variables before declaration.
// Ensures safer and predictable behavior compared to var.
// Encourages better coding practices by requiring variables to be explicitly initialized.

// Example
// {
//   console.log(a); // ReferenceError: Cannot access 'a' before initialization
//   let a = 5;
// }

// Key Characteristics:

// TDZ applies to let and const but not var.
// Functions declared with function are not affected by TDZ, but function expressions using let or const are.
// Variables in TDZ are hoisted but uninitialized, hence inaccessible.

// Practical Example:

// function checkTDZ() {
//   console.log(x); // ReferenceError
//   let x = "Hello";
// }
// checkTDZ();

// Why this error?

// JavaScript knows x exists due to hoisting, but since it is in the TDZ, accessing it before its initialization triggers an error.
// Avoiding TDZ Issues:

// Declare variables at the top of their block.
// Initialize variables immediately where possible.

// var a = 12; ==> js breaks down it like this
// var a; (declaration) //  and this is hoisted on the top of code so log below will give undefined
// a = 12; (initialisation)
// console.log(a) // not considering lines 
// var a = 12;

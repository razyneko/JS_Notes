// The placement of the <script> tag in an HTML document depends on the desired behavior of the JavaScript. Here are the common scenarios:

// <-------------------- At the End of the <body> (Recommended for Most Cases) ---------------------->

// Place the <script> tag just before the closing </body> tag.
// This ensures the HTML content loads completely before the script runs, preventing delays in rendering.

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Script Placement Example</title>
// </head>
// <body>
//     <h1>Hello, World!</h1>
//     <script src="script.js"></script>
// </body>
// </html>

// <--------- Why? ----------->
//  The browser will parse and render the HTML first, avoiding delays caused by loading or executing JavaScript.


//<----------------------- Inside the <head> Tag ---------------------->

// Used if the script is essential for setting up the page (e.g., analytics, configuration scripts).
// Add the defer or async attribute to prevent blocking the rendering process.

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Script Placement Example</title>
//     <script src="script.js" defer></script>
// </head>
// <body>
//     <h1>Hello, World!</h1>
// </body>
// </html>

// defer: Executes the script after the HTML is fully parsed.
// async: Executes the script as soon as it's downloaded, without waiting for HTML parsing to finish.


// <----------------------------- Inline Scripts ---------------------->
// You can also write inline JavaScript directly inside a <script> tag in the HTML.

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Inline Script Example</title>
//     <script>
//         console.log("Inline JavaScript executed!");
//     </script>
// </head>
// <body>
//     <h1>Hello, World!</h1>
// </body>
// </html>

// Note: Inline scripts should be avoided for security reasons (e.g., susceptibility to cross-site scripting).
// Avoid inline scripts to reduce the risk of Cross-Site Scripting (XSS), as they can be easily exploited if an attacker injects malicious JavaScript. Instead, use external scripts or event listeners in separate files to enhance security.
// How to Prevent XSS
// Avoid inline scripts (<script>alert(1)</script> inside HTML).
// Use Content Security Policy (CSP) (script-src 'self' to block inline scripts).
// Sanitize and validate user input before displaying it.
// Use textContent instead of innerHTML in JavaScript.
// Escape output when inserting user input into HTML.

// Sanitization in XSS prevention means cleaning user input to remove or neutralize harmful code before processing or displaying it. This prevents malicious scripts from executing.
// document.body.innerHTML = "<h1>" + userInput + "</h1>"; // Risky if userInput contains <script> tags
// document.body.textContent = userInput; // Renders as plain text, not HTML  

// <-------------------- Best Practices ------------------->
// Use defer for external scripts in the <head> to ensure the script doesn’t block rendering.
// Place non-critical scripts at the end of the <body> for better performance.
// Avoid using async for scripts that depend on each other (it can lead to execution order issues)

// <-------------------- Number.isNaN() ------------------->
// Number.isNaN(num) to check if numebr is NaN
// disabled property of an element object takes boolean values 
// 'true' --> truthy but 'false' --> truthy as its a non empty string


//<------------------ Optional chaining (?.) ------------------->

// The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
// it allows you to safely access deeply nested object properties without manually checking if each level exists if a property is null or undefined, it stops and returns undefined instead of throwing an error

// <----- Why to use ? ---->

// avoids runtime errors when accessing  nested properties
// simplifies code by removing manual checks

// const adventurer = {
//     name: 'Alice',
//     cat: {
//       name: 'Dinah',
//     },
//   };
  
//   const dogName = adventurer.dog?.name;
//   console.log(dogName);
//   // Expected output: undefined
  
//   console.log(adventurer.someNonExistentMethod?.());
//   // Expected output: undefined
  
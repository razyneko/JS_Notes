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
// You can also write inline JavaScript directly inside a <script> tag in the document.

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


// <-------------------- Best Practices ------------------->
// Use defer for external scripts in the <head> to ensure the script doesn’t block rendering.
// Place non-critical scripts at the end of the <body> for better performance.
// Avoid using async for scripts that depend on each other (it can lead to execution order issues)

// Number.isNaN(num) to check if numebr is NaN

// <--------------------------- DOM ------------------------------>

// DOM is a JS representation of a webpage
// it JS's window into the contents of a webpage
// its a bunch of objects that you can interact via JS
// a h1 in html --> we will have a js object modelling that h1, we can manipulate it using JS

// HTML/CSS goes in JS objects come out , topmost(root) is document object it forms a tree with first child as Body
// when we type "document" in the console, it shows all the HTML that is inside the webpage
// when we use console.dir(document) --> it shows actual document object with so many properties
// Document object is our entry point into DOM, it contains the representation of all the content on a page
// ans so many useful methods and properties

// document.all gives --> HTMLAllCollection



// <------------------ Selecting Elements ----------------------->

// document.getElementById('id')
// doing const smth = document.getElementById()  --> returns the DOM object modelling that element

// <------------- HTML Collections ---------------->
// not exactly an array, dont have methods like map, filter etc
// do have length property and we can acces element by [] syntax
// for of loop can also be used, since its an iterable
// we can use then to manipulate each elem of the HTML collection
// these two when used give HTML collections
// if a non existing className were given or tagname--> it gives empty HTML collection not null
// document.getElementsByTagName('tagName')  
// document.getElementsByClassNamw('className') 


// <----------------------- querySelector ------------------------>

// but it gives only the first occurence
// to select any type
// name of element , .class_name, #id
// we can also use selectors like ('img:nth-of-type(1)')
// for attributes ('a[href ="smth"]')

// <---------------------- querySelectorAll ---------------------->

// it returns NodeList of all matching elements


// <------------------------- Important ones to lookout for --------------------------->

// classList, getAttribute(), setAttribute(), appendChild(), append(), prepend(), removeChild(), remove(), createElement
// innerText, textContent, innerHTML, value, parentElement, children, nextSibling, previousSibling, style

// <-------------- innerText ------------>
// innerText gives the text inside the element not including the ones whose display is set to none or hidden

// <-------------- textContent ------------>
// textContent gives out the text as we write in the code editor and also gives everything even if its display is set to none or hidden
// but written in code

// <-------------- innerHTML -------------->

// if we want to write HTML inside the selected element, use innerHTML
// this cant be done using above two
// but if there is no HTML inside it too returns the text inside
// we can see all the underlying HTML inside an element
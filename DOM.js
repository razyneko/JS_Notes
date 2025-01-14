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


// <---------------- Attributes -------------->

// if img ta with id and src
// document.querySelector('img').id / document.querySelector('img').src --> this value comes from js
// we can access value of attributes like that
// another method -> elem.getAttribute('href') --> it gives actual text inside href of the html element
// in most cases they are gonna be the same, but in case of href for a tag, it can be different

// we can also set attributes using elem.setAttribute('href', 'www.google.com')
// we can directly set attributes by '.' syntax or we can use setAttribute()


// <------------------ Manipulating Styles ---------------->

// style object only contains the details of styles that were set inline, not from a seperate stylesheet
// if we have an h1 with color red, when we do h1.style.color -> it gives empty string
// the dom object for style --> CSSStyleDeclaration and has all CSS props in camelCase
// and when we do add styles using elem.style.color = 'red', it is set as an inline style,
// its not preferred generally, but it does work, thats where classList comes into picture
// even if we want to get the data from the stylesheet
// after everything is loaded we can use window.getComputedStyle(elem).color -> gives css text   ( CSSStyleDeclaration) --> gives object of 
// all css data with values in strings

// <------------------ classList --------------------------->

// one way to add a class is to use setAttribute('class', 'red-class')
// but the problem with it is that it overwrites what was initially inside the class attribute
// the fix is elem.classList.add('certain-class'), it doesnt overwrites as the name suggests
// elem.classList returns a DOMTokenList
// adding classes to elements, we can write those classes in css file and just add the class to desired element to make changes in it.
// we can remove using elem.classList.remove
// to check if it has a certain class --> elem.classList.contains('class-name') returns boolean
// the more commonly used is "toggle", adding or removing , if its prsesent remove it, if its not add it
// elem.classList.toggle('certain-class')


// <------------------ parentElement, children, child, nextSibling/previousSibling and nextElementSibling/previousElementSibling ------------>

// elem.parentElement --> gives the direct parent of elem
// elem.children --> HTMLCollection of all the children, elem.childrenCount -> gives total number of children
// elem.nextSibling/ elem.previousSibling --> gives DOM nodes (generally text nodes(newlines))
// elem.nextElementSibling -> actually give u the result u want


// <------------------ document.createElement(), append(), appendChild(), prepend(), remove() -------------------->

// document.body.appendChild() --> appends the elem as a child in body
// append() --> newer --> by using this, we can append more than 1 elems at once
// p.append("i have been appended to p", "Also this can be appended") --> this text will be added to p
// but p.appendChild("some text")      ❌ 
// prepend() --> add at the start
// targetElement.insertAdjacentElement(position, element)  --> 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
// elem.after() and elem.before()
// append() and prepend() can take directly some text inside them too
// const ctr = document.querySelector('#container');
//  const btn = document.createElement('button');
//  btn.innerText = 'Hey!'
// for (let i = 0; i < 100; i++){

//  ctr.append(btn) 
// }

// why this only adds one button

// <----- Fix----->
// This happens because you are appending the same button (btn) to the container 100 times. In the DOM, a single element can only
// exist in one place at a time. When you append btn repeatedly, it gets removed from its previous position and added again at
// the end, leaving only one instance in the container.

// removeChild() --> Older --> select parent and then remove the child
// h1.parentElement.removeChild(h1) // in one go
// li.remove() --> just removes the li



// <--------------------------------------- EVENTS ----------------------------------------->

// responding to user inputs or actions

// <-------------- Inline Events ---------------->
// <----------- first way ------------->
// <button onclick="alert('Hi'); alert('hi again')">Click me</button>
// btw there is also a ondblclick event

// <-------------- External Script -------------->
// <----------- second way ------------->
// in ext script, we can do btn.onClick = function() {}
// set the event property to a function that will run when the event is triggered

// <----------- third way -------------->

// <----- addEventListener() ------>
// button.addEventListener('click', function () {
    // accepts event and a callback function that will run when event is triggered
// })  
// when we are setting button.onClick --> we can set it to only one value as its a property
// but using addEventListener()
// button.addEventListener('click', func1(){})  --> this executes first
// button.addEventListener('click', func2(){})  --> this executes second
// with eventListeners we can pass the optional "options" object
// it has many properties like capture, once , passive
// of we set once : true --> event is handled one time only 
// after that event listener is removed entirely

// there is also a removeEventListener()

// try to make ur code as modular as u can, see if u can make seprate functions for certain tasks
// a functionality that is standalone

// <------------------------------- "this" keyword in Events --------------------------->

// Inside an event handler callback, "this" keyword refers to the Node on which event was called
// button.addEventListener('click', function() {
    // this.style.backgroundColor = "blue"
    // here this --> button on which the event was called
// })

// <----------------------- event Object and Keyboard Events -------------->

// its passed in the callback each time an event was triggered
// keydown -> pressing the key , and keyup --> releasing the key
// In a Keyboard event, the key : "q" --> refers to key which was pressed and can be different for different language keyboards, but the code : KeyQ --> this is gonna be same always, used in games and stuff


// <---------------------- Form Events and e.preventDefault() -------------->

// Default behaviour of form is that it submits the form and redirect to a url whatever action attribute was
// set to
// to prevent this default behaviour, we use e.preventDefault()
// we may sometimes need to work on the data provided inside the form
// not specific to forms but mostly
// input.value --> data inside form input
// stop the default behaviour --> get the data inputted ---> perform some logic ----> update the page
// if action is set to "" or no action at all --> form just submits to same page, the page refreshes

// inside the form DOM object we get access to "elements" property that contains all the elems inside the form as a HTMLCollection
// rather than indexing the collection to get particular form input value, if the inputs are interchanged it will mess it up
// thats why we set "name" attribute, it is set as a property inside elements(inside form DOM object)
// giving a name attribute is always a good idea
// bascially it can reference a particular input 
























// <----------------------------- Event Bubbling / Event Propogation -------------------------->

// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an
// event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor
// elements in the DOM tree until it gets to the root element.

// This is the default behavior of events on elements unless you stop the propagation 

// When elements receive events, such events propagate to their parents and ancestors upward in the DOM tree.
// This is the concept of Event Bubbling, and it allows parent elements to handle events that occur on their
// children's elements.

// Event objects also have the stopPropagation method which you can use to stop the bubbling of an event. This
// is useful in cases where you want an element to receive a click event only when it is clicked and not when
// any of its children elements are clicked.

// stopPropagation and preventDefault are methods of the event object for stopping default behaviors. 

// <----------------------- event.preventDefault() ----------------------->

// This method prevents default actions that browsers make when an event is triggered.

// <---------- How to override default form submission --------->

// When a user submits a form (the submit button clicked), the default action of the form is to submit the
// form's data to a URL that processes the data.

// Form elements have the action and method attributes which specify the URL to submit the form to and the type
// of request (get, post, and so on), respectively.

// If these attributes are not provided, the default URL is the current URL the form was submitted on, and the
// method is get.

// This action is how browsers handle forms by default.

// But you may want to do more things to the data before sending a request. This is especially common in
//  today's approach to handling forms.

// You may want to do some data validation, data checks, processing, configuring headers, and so on before
//  sending the request to a URL.

// const form = document.getElementById('form')

// form.addEventListener('submit', (event) => {
//   event.preventDefault()

//   // process data and submit a request manually
// })

// <-------------------------- Difference ----------------------->

// The difference between event.preventDefault() and event.stopPropagation() is that the former prevents
// default actions made by the browser, while the latter prevents the default behaviors of events –propagating
// up the tree.
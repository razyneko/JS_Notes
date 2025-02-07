// <---------------------- Prototypes ------------------------>

// Prototypes are the mechanism by which javascript objects inherit features from one another
// objects can have a prototype which acts as a template object (that contains methods and props) it inherits methods and properties from 
// we can have multiple objects that share the same prototype
// intermediate object wrappers --> String, Number etc they have the prototype

// String.prototype.somefunction = () => console.log(this)
// for these methods this refers to the string on which method was called
// its not recommended to add methods like this
// we can also override built in functions

// prototype is the actual object the new objects inherit from and 
// __proto__ is a reference to prototype object
// objtype.__proto__ gives the prototype object


// <---------------------- Object Oriented Programming ----------------------->

// it all has to do with one central idea .. organizing our code, designing and structuring our apps by breaking things into
// distinct patterns of objects

// rgb(23,45,123)
//  #EFC768
// rgba(34,43,32, 0.5)
// hsl(180,50%,50%)
// if i want to find oppsoite color then just add 180 to hue in hsl format
// all heading elements have same same prototype which is HTMLHeadingElement

// <--------------- Factory Functions ------------------>

// a function that creates objects with properties and methods and return them
// const { a, b , c} = this; destructuring values from this
// to avoid passing args each time we can take help of objects and defining methods in them
// this is not the ideal way to create objects, is not commonly used.. comes into picture "constructor funcs"
// the drawback is that the objects created with these functions have unique copy of methods
// everytime an object is created .. these methods are recreated
// firstObj.method === secObj.method ---> gives false coz they are not the same
// but if i do "h1".slice === "hello".slice ---> it gives true becsuse slice is same which is defined in the prototype "String" 
// we dont have an easy way to do so using factory funcs ...comes into picture "constructor funcs"

// <----------------- Constructor Functions -------------->

// convention to start with capital letter
// function random(r,g,b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// now if we do random() ---> it will give undefined
// but we wanted an object with r,g,b as inbuilt props
// comes into picture ... "new"
// when the new keyword wasn used this referred to window

// <--------- new Keyword ------->

// Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
// links (sets the constructor of) this obj to another obj (in the __proto__)
// passes the newly created object in Step 1 as the this context
// returns this if function doesnt return its own object
// Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
// Note: Properties/objects added to the constructor function's prototype property are therefore accessible to all instances created from the constructor function.
// Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).
// If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)
// Classes can only be instantiated with the new operator — attempting to call a class without new will throw a TypeError.

// using this we can add methods to prototype rather than individual objects/instances
// but if we just add this.func --> it will still be not added to prototype
// we basically have to define the function outside the constructor and add to its prototype
// Color.prototype.rgb = () {some function} this way adds methods diirectly to prototype
// this all was done so that methods are not recreated everytime .. rather than taking copy ofthe same by adding it to protype of constructor function
// which is on the left side of . is the value of this
// constructor defines kind of a recipe
// now ColorOne.method === ColorTwo.method ---> gives true ... since it is inside the proto
// you dont want to use arrow functions when dealing with constructors and stuff coz this behaves differently for arrow functions
// but now since we have to define methods seperately .... so we have prettier way to do the same stuff ...laoding "Classes"


// <--------------------- Classes -------------------------->

// we dont have to add methods to prototype manually
// class Color {
    // the name us usually started with capital letter
// }
// we can define a constructor() for a class which will create us an object or instance of that class, it takes args that will be the part of the class
// to instantiate a new object of a class we use new keyword
// we can define some inherent props in the constructor so that every instance will have those variables in the object
// class Color {
//     constructor(r,g,b) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//     }
// }

// the object that it creates has its constructor set to class Color itself
// adding methods to the class doesnt add to the instance rather the proto itself.. so every instance has access to that same method
// to call a method inside other method ... just use plain old this.method()
// the data defined inside the constructor will be specific to any created instance
// methods are added to prototype automatically
// if insid ea method we use this.var1 = var1 etc it will just be added to the same instance only


// <---------------------- extends and super (inheritance) ----------------------->

// sharing functionality between classes
// it has to do with subclassing

// <------- extends -------->
// to inherit from a class

// class Pet {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating.`
//     }
// }

// class Dog extends Pet {
//     bark() {
//         return 'WOOF!'
//     }
// }

// class Cat extends Pet{
//     meow() {
//         return 'MEOW!'
//     }
// }
//
// if we call a method from a dog obejct its looks for the method in the object first then the class that its inherting from 
// so if both have eat() method the one that is defined inside the Dog Class will be executed

// <------ super -------->

// super is a refernece to super class(the one with which sub classes inherit from ) .. reference of the class we are extending from
// of dog need the vars from the Pet constructor but also has its own vars
// then we can do smth like this
// class Dog extends Pet {
//     constructor(name, age, someOtherThing){
//         super(name, age) // it calls the constructor of Pet
//         this.someOtherThing = someOtherThing;
//     }
//      bark() {
    //         return 'WOOF!'
    //     }
// }

// <---------------------- Prototypes ------------------------>

// Prototypes are the mechanism by which javascript objects inherit features from one another
// objects can have a prototype which acts as a template object that contains methods and props it inherits methods and properties from 
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

// 
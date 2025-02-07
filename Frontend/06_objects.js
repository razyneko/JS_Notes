// Objects are collection of properties
// Properties are key-value pair
// collection of different pieces of information
// Object Literal --> {}
// we use const with objects to point to a fixed memory reference
// All keys are converted to strings except Symbols
// obj.prop (using this obj looks for property of same name) / obj["prop"]
// but obj[prop] --> will give undefined / it expects variable prop if the variable has a value which matches any of the key then no error
// use this for dynamic inputting values through vars
// but obj[1999] --> will automatically convert the number to string  so no undefined it can also be obj["1999"]
// we can change values by both
// Combination of Arrays and Objects is far more powerful than individual array or object

// object literals are not iterable
// use for in to access keys
//  OR
// Object.keys(obj_name) --> gives array of keys of obj_name 
// Object.values(obj_name) ---> gives array of values of obj_name
// Object.entries(obj_name) ---> gives nested array of keys and values
// now since they give array we can use for of
let arr = [1,2,3,4,5];
console.log(arr[8])
// it returns undefined since arrays are technically objects in JS with numeric keys, so if a key isn't present it just return undefined

// String Methods 
// methods can be chained together
toLowerCase(), toUpperCase(), trim()
// some methods can take an argument that modifies its behaviour , its an input basically
indexOf() 
// gives index of first occurence of arg
slice(arg1, optional_arg2) 
// -> to cut a portion of string 
// negative arg if given , it is evaluated as (length of string + neg arg)

replace(what_to_replace, with_what) 
// -> replaces first match .. use replaceAll() for replacing every match

repeat(count) 
// to repeat string count times

// methods to inject variable value dynamically with strings
// 1 -> " " + var_name + " "
// 2 -> Template Literals 
// Tls allow embedded expressions which are converted into string afterwards
// using bacticks with ${var_name(also can be an expression)}
// `I have ${num_cups} cups.`

// Strings are immutable

// parseInt("hello") ---> NaN
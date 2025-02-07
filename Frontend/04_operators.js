// Equality operators

// Double equals (==)

//  checks for equality of value but not equality of type
// it coerces both values to the same type and then compares them
// this can lead to some unexpected results

// examples:
// 0 == ''  (empty string) -> true
// 0 == false -> true
// null == undefined -> true
// !Data Types
// Number
let num1 = 10
console.log(typeof num1) // Displays data type of variable

// String
let firstMessage = "Welcome to JavaScript"
let secondMessage = 'Welcome to JavaScript'
let thirdMessage = `Welcome to JavaScript` // Modern way

let firstName = "Anton"
console.log(typeof firstName)
console.log(`Hello ${firstName}. How are you?`)

// Boolean - a variable which is defined as true or false
let education = true
console.log(typeof education)
let a = 10
console.log(a == 10)

// Null - a variable which is defined as empty or unknown
let c = null
console.log(typeof c)

// Undefined - a variable which is not defined
let b
console.log(typeof b)

// Bigint - stores a big number
let bigInt = 9819835428457828489n
console.log(typeof bigInt)

console.clear()

// !Type Conversion
// String
// Syntax = String(ValueToConvert)
let f = 3
console.log(typeof String(f))

let g = String(100)
console.log(typeof g)

let h = String(true)
console.log(typeof h)
console.log(h)

// Number
// Syntax = Number(ValueToConvert)
let i = "20"
console.log(Number(i))

let myName = "Anton Agejev"
console.log(Number(myName)) // NaN

console.log(Number(true)) // 1
console.log(Number(false)) // 0

console.clear()

// Boolean
// Syntax = Boolean(ValueToConvert)
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean("JavaScript"))
console.log(Boolean(""))
console.log(Boolean(" "))

console.clear()

// Coercion
// Automatic conversion
console.log('12' / 2);
console.log(2 * '2');
console.log('10' / 2);
console.log('10' % 2);
console.log(true * 7);

console.clear()

// Concatenation
// Joins the strings with each other but ONLY after the first string
console.log('1' + 2)
console.log('1' + 2 + true)
console.log('12' + undefined)
console.log('12' + null)
console.log(2 + '1')
console.log(2 + true) // Will not join as there is no string
console.log(3 + 4 + true + '2' + 10 + true + 11 + '2' + 1) // 8210true1121 because '2' is the first string
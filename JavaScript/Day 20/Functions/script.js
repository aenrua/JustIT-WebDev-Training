// Declaring a function
function greeting() {
    console.log("Hello world!")
}

// Call or invoke the function
greeting()

// User Log In/Log Out
let userOnline = true
function userStatus() {
    if (userOnline == true) {
        console.log("User is logged in")
        console.log(userOnline)
    }
    else {
        console.log("User is logged out")
        console.log(userOnline)
    }
}
userStatus()

// Functions can be hoisted - called before they are declared

// !Function with parameters/argument
// Parameters are defined when a function is declared (data that is being passed)
function atm(accountNumber, amount) {
    console.log(`Account Number: ${accountNumber}. Amount: ${amount}`)
}

// Arguments is data that is passed to the function when it is called
atm(343847345, 300)
atm(1234567, 500)

function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(20, 10))
console.log(sum(50, 50))

function hello(personName) {
    console.log(`Hello ${personName}, how are you?`)
}
hello("Anton")

// !Functions that call another function
function double(num1) {
    return num1 * 2 // Doubles the number
}

function quadruple(num2) {
    return double(num2) * 2 // Doubles the number and then multiplies it by 2
}
console.log(quadruple(20))

// !Arrow functions
/*
    - Can omit the return statement (has explicit return)
    - Can omit the function keyword
    - When there is only 1 parameter, brackets are optional
*/
let add2 = num => num * 2
console.log(add2(10))

let multiply = (x, y) => x * y
console.log(multiply(5, 7))

// !Scope in JavaScript
// Global scope
// If you declare a variable outside a function, it has a global scope

// Local scope - var, let, const
function scope() {
    var firstName = "Anton"
    console.log(firstName)
}
scope()

// Block scope - let, const
let subject = "Matt"
{
    let subject = "John"
}
console.log(`Hello ${subject}`)
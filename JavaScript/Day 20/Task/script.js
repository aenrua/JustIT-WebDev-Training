/* 1: Write a function that takes in a first name and a surname as arguments and returns a message greeting them. */
greeting = (firstName, lastName) =>
    console.log(`Hello ${firstName} ${lastName}, how are you?`)
greeting("Anton", "Agejev")

/* 2: Write a function that takes in a string as an argument and sorts the string into alphabetical order and returns the result. */
let letters = "GFEDCBA"
order = letters =>
    `${letters}`
        .split("")
        .sort()
        .join("")
console.log(order(letters))

// let letters = "GFEDCBA"
// function order(letters) {
//     return letters
//         .split("")
//         .sort()
//         .join("")
// }
// console.log(order(letters))

/* 3: Write a cash machine / atm function that takes in a withdrawal amount and a pin number as an argument and compares the pin and withdrawal amount against a stored pin and account balance. If the pin matches and the balance is sufficient approve the transaction, if not decline the transaction. */
let accountBalance = 500
let correctPin = 1234
atm = (pin, amount) => {
    if (pin === correctPin && amount <= accountBalance) {
        console.log("Transaction approved")
    }
    else if (pin === correctPin && amount >= accountBalance) {
        console.log("Transaction declined. Insufficient funds")
    }
    else {
        console.log("Transaction declined. Incorrect pin")
    }
}
atm(1234, 200)
atm(1234, 750)
atm(4321, 200)
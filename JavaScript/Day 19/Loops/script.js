// Perform a repeated task based on a condition

// !For loops
// Used when the number of iterations is certain
for (let i = 0; i < 6; i++) { // Initilisation; condition; finalExpression
    console.log("Welcome to JavaScript")
}

let colours = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Black",
    "Purple",
    "Pink",
    "Brown"
]

// Stop at an index
for (let i = 0; i < colours.length; i++) {
    if (colours[i] == "Pink") {
        break
    }
    else {
        console.log(colours[i]) // [i] means display the indices
    }
}

// Skip an index
for (let i = 0; i < colours.length; i++) {
    if (i == 5) {
        continue
    }
    else {
        console.log(colours[i])
    }
}

// Display numbers from 0 to 20
for (let i = 0; i <= 20; i++) {
    console.log(i)
}

// !While loops
// Used when the number of iterations is uncertain
let number = 0
while (number < 20) {
    console.log(number)
    number++ // Stops from executing the code continuously
}

// !Do While loop
// Will execute the loop once even if the condition is false (will check the condition after)
let num = 1
do {
    console.log(num)
    num++
}
while (num < 5)
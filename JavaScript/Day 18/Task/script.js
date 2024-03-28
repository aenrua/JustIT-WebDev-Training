/* 1:  Write a conditional statement to check a customer’s age at a bar. If the customer is under 18 log a message advising they are too young, otherwise ask what they would like to drink. */
let customerAge = 18
if (customerAge < 18) {
    console.log("We cannot serve you as you are too young")
}
else {
    console.log("What would you like to drink?")
}

/* 2: Declare a variable called "Password". Write an if statement that checks how many characters are in the password, if the password has more than 8 characters log the password to the console, if the password has less than 8 characters log to the console that the password is too short. */
let password = "Password"
if (password.length >= 8) {
    console.log(password)
}
else {
    console.log("Your password is too short")
}

/* 3: Create a variable that stores a number. Check whether the number is divisible by 3 or 5, if so log "This number is divisible by 3 or 5" to the console. Otherwise log an alternate message to the console. */
let numberOne = 8
if (numberOne % 3 == 0 || numberOne % 5 == 0) {
    console.log("This number is divisible by 3 or 5")
}
else {
    console.log("This number is not divisible by 3 or 5")
}

/* 4: Create a variable that stores a number. If the number is divisible by 3, log "fizz" to the console. If the number is divisible by 5 log "buzz" to the console. If the number is divisible by both 3 and 5, log "fizz buzz" to the console. Otherwise log the number to the console. */
let numberTwo = 15
if (numberTwo % 3 == 0 && numberTwo % 5 == 0) {
    console.log("fizz buzz")
}
else if (numberTwo % 3 == 0) {
    console.log("fizz")
}
else if (numberTwo % 5 == 0) {
    console.log("buzz")
}
else {
    console.log(numberTwo)
}
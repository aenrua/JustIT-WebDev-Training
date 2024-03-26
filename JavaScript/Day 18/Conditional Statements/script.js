// !If and else statements
// Syntax:
/*
    if(condition){task to do}
    else if(condition){task to do}
    else if(condition){task to do}
    else{task to do}
*/
let weather = "Raining"
if (weather == "Raining") {
    console.log("Take umbrella, it's raining!")
}
else if (weather == "Sunny") {
    console.log("Take your sunglasses, it's sunny!")
}
else {
    console.log("Wear a jacket, the weather is foggy or cloudy")
}

// !Operators
/*
    +       addition
    -       subtraction
    /       division
    *       multiplication
    %       modular
    ++      increment
    --      decrement
    =       assignment
    ==      equal to value
    ===     equal to value and data type
    >       greater than
    <       less than
    >=      greater than or equal to
    <=      less than or equal to

    !Logical operators
    &&      and
    ||      or
*/
let trafficLight = "Red"
if (trafficLight == "Red") {
    console.log("Stop behind the line")
}
else if (trafficLight == "Amber") {
    console.log("Get ready to stop")
}
else {
    console.log("You are free to go")
}

let age = 18
if (age >= 18) {
    console.log("You are eligible to vote")
}
else {
    console.log("You are not eligible to vote")
}

// !Switch statement
// Useful when you have one condition being checked against multiple cases
let day = "Monday"
switch (day) {
    case "Monday":
        console.log("Happy Monday!")
        break
    case "Tuesday":
        console.log("Second day of the week")
        break
    case "Wednesday":
        console.log("Midway through the week")
        break
    case "Thursday":
        console.log("It's almost Friday")
        break
    case "Friday":
        console.log("Happy Friday!")
        break
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!")
        break
    default:
        console.log("Day not recognised. Try again")
}

let testScore = 75
switch (true) {
    case testScore >= 75:
        console.log("Distinction")
        break
    case testScore >= 60:
        console.log("Merit")
        break
    case testScore >= 50:
        console.log("Pass")
        break
    default:
        console.log("Fail")
}
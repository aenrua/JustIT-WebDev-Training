// !setTimeout
// Allows us to run a function once after an interval of time
// Syntax = setTimeout(function, milliseconds) - 1000 milliseconds is 1 second
function hello() {
    console.log("Hello world!")
    // Every time function is called, the above will appear in the console
}
hello()
setTimeout(hello, 10000) // Run the function hello after 10 seconds have elapsed

function greet(name, byeText) {
    console.log("Good Morning", name, byeText)
}
greet("Anton", "See ya") // Adding the name and byeText values

let timeoutID = setTimeout(greet, 5000, "Rob", "Goodbye") // (function, time, parameter 1, parameter 2)
console.log(timeoutID)
clearTimeout(timeoutID) // Collects the ID produced by setTimeout and stops it running

// !setInterval
// Allows us to run the function repeatedly after an interval of time
// Syntax = setInterval(function, milliseconds)
function talk(name, byeText) {
    console.log("Good Morning", name, byeText)
}

let intervalID = setInterval(talk, 5000, "Anton", "Goodbye")
clearInterval(intervalID)

// SCENARIO - you have a website where there are some articles/posts.
// You want to ask the user to SIGN-UP after 20 seconds.
// However, if the user has already clicked on the
// subscribe button WITHIN 20 seconds,
// then there is NO point in running the logic (asking them to subscribe).

// TASK - BUILD THE FOLLOWING INSIDE A FUNCTION:
// if (time>=20 seconds) and the user has subscribed (boolean) && (&& = and operator)
// clearTimeOut
// else the user has NOT subscribed
// setTimeOut (20000) //20 seconds

let sub = document.getElementById("sub")
let sign = document.getElementById("sub")
let wait = false

function subscribe() {
    sign.style.display = "block"
    console.log("Subscribe Function")
}

var subscribe1 = setTimeout(subscribe, 5000)

sub.addEventListener("mouseover", function run() {
    wait = true
    console.log("Event Listener Working")
    if (wait == true) {
        clearTimeout(subscribe1)
        console.log("Timeout Cleared")
    }
})
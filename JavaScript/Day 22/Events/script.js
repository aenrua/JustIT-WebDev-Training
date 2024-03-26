// Gathering the paragraphs
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")
let p3Btn = document.getElementById("p3Btn")

// Creating the Event and Event Listener
// Syntax: (event type, function)
p1.addEventListener("mouseover", function run() {
    p1.style.backgroundColor = "orange"
})

p1.addEventListener("mouseleave", function run() {
    p1.style.backgroundColor = ""
})

p2.addEventListener("click", function run() {
    if (p2.style.backgroundColor == "") {
        p2.style.backgroundColor = "yellow"
    }
    else {
        p2.style.backgroundColor = ""
    }
})

p3.addEventListener("mouseover", function run() {
    p3.style.fontSize = "2rem"
})

p3.addEventListener("mouseleave", function run() {
    p3.style.fontSize = ""
})

p3Btn.addEventListener("click", function run() {
    if (p3.style.display != "block") {
        p3.style.display = "block"
        console.log("p3 showing")
        p4.style.display = "none"
    }
    else {
        p3.style.display = "none"
        console.log("p3 hidden")
        p4.style.display = "block"
    }
})

p4.style.color = "crimson"

// Linking to event that's already defines in HTML
function changeOrange() {
    if (p5.style.color != "orange") {
        p5.style.color = "orange"
    }
    else {
        p5.style.color = "green"
    }
}
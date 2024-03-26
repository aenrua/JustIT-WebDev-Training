// DOM = whatever you have written in the <body> element can be accessed using JavaScript in a TREE structure
console.log("Document Object Model")

// !Element(s) Selectors - Used for HTML elements
// Select an element by its HTML ID
let header = document.getElementById("header") // Defines the variable and links it to the ID in the HTML
console.log(header)

let test = document.getElementById('test');
console.log(test.value) // Displays the value of the ID

// Select an element by its Class
let allContainers = document.getElementsByClassName("container") // Defines the variable as allContainers and links it to the class in the HTML
console.log(allContainers)
console.log(typeof allContainers) // Displays the data type of the variable

// Select an element by its HTML Tag
let paragraphs = document.getElementsByTagName("p")[2].textContent // Defines the variable as paragraphs, links it to the tag in the HTML, and displays the third index of that tag which has the class textContent
console.log(paragraphs)

// !Query Selectors - Used for CSS elements
// Syntax = document.querySelector("target")
let listItem = document.querySelector("#main>ul li") // Defines the variable as listItem, links it to the HTML and displays only the first element
console.log(listItem)

let listAll = document.querySelectorAll("#main>ul li") // Defines the variable as listAll, links it to the HTML and displays all the elements
console.log(listAll)

// NOTE: When displaying a variable that has more than one element, the object will always be an array
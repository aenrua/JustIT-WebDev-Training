// !Display the current date and local time
const timeNow = new Date()
console.log(timeNow)

// !Display the date based on the milliseconds since 1 January 1970
const timeMil = new Date(1000000000000)
console.log(timeMil)

// !Display the date from a date string
/* ISO */
const dateISO = new Date("2024-01-07")
console.log(dateISO)

// Only year and month
const dateISO2 = new Date("2023-12")
console.log(dateISO2)

// Only year
const dateISO3 = new Date("2023")
console.log(dateISO3)

// Specific time
const timeISO = new Date("2023-01-07T14:30:00Z") // T separates date and time, Z defines UTC time
console.log(timeISO)

/* Short format */
const dateShort = new Date("05/10/1995") // MM/DD/YYYY
console.log(dateShort)

const dateShort2 = new Date("Sep 15 1992") // MMM DD YYY
console.log(dateShort2)

const dateShort3 = new Date("05 May 1995") // Month and day can be in any order
console.log(dateShort3)

const dateShort4 = new Date("Sept 16 1972") // Month can be full or abbreviated
console.log(dateShort4)

/* Long format */
// Syntax = new Date(year, month, day, hours, minutes, seconds, milliseconds)
const dateLong = new Date(1969, 6, 31, 12, 30, 45) // The month is an array
console.log(dateLong)

// !Add a date to the HTML
let divDate = document.getElementById("divDate")
// Get the current date
const d = new Date()
// Put the d variable inside the date variable, and set the date in the d variable to the following format
const date = d.toLocaleString('default', /* Where are we e.g. en-gb, ru-ru */{
    day: "2-digit",
    month: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24"
})
// Change the text of the divDate ID in the HTML to what is specified in the date variable
divDate.innerText = date

// function updatingClock() {
//     var currentTime = new Date(),
//         month = currentTime.getMonth() + 1,
//         day = currentTime.getDate(),
//         year = currentTime.getFullYear(),
//         hours = currentTime.getHours(),
//         minutes = currentTime.getMinutes(),
//         seconds = currentTime.getSeconds(),
//         text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
//     // here we get the element with the id of "date" and change the content to the text variable we made above
//     document.getElementById('text').innerHTML = text;
// }

// // here we run the updatingClock function every 1000ms (1 second)
// setInterval(updatingClock, 1000);
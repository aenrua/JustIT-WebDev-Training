/*
1. Click - show and hide menus
      - Create a button "See Food Menu"/ "See Drink Menu"
      - Challenge: .innerText so that the button text changes
*/
let foodMenu = document.getElementById("food") // Define the "food" ID as a foodMenu variable
let drinksMenu = document.getElementById("drinks") // Define the "drinks" ID as a drinksMenu variable
let menuButton = document.getElementById("btn1") // Define the "btn1" ID as a menuButton variable

menuButton.addEventListener("click", function run() { // When the button is clicked:
      // If the drinks menu is displayed, hide the drinks menu, show the food menu and change the button label
      if (drinksMenu.style.display == "block") {
            drinksMenu.style.display = "none"
            foodMenu.style.display = "block"
            menuButton.innerText = "See Drinks Menu"
      }
      // Else hide the food menu, display the drinks menu and change the button label
      else {
            foodMenu.style.display = "none"
            drinksMenu.style.display = "block"
            menuButton.innerText = "See Food Menu"
      }
})

/*
2. Mouse over and out - highlight to the user which link they are currently on
      - will need to change text and background color as minimum
*/
let links = document.querySelectorAll("nav a") // Create an array of all the <a> tags in the <nav> tag and define it as links

for (let link = 0; link < links.length; link++) { // Loop through the array (define each index <a> as link and start at 0; an index has to be less than the total length of the array; go through each index)
      links[link].addEventListener("mouseover", function run() { // For each index in the array, add a function on mouse over
            links[link].style.backgroundColor = "green" // For each index in the array, change the background colour to green
            links[link].style.fontFamily = "Impact" // For each index in the array, change the font family to Impact
      })
}

for (let link = 0; link < links.length; link++) {
      links[link].addEventListener("mouseleave", function run() { // For each index in the array, add a function on mouse leave
            links[link].style.backgroundColor = "" // For each index in the array, change the background colour to default
            links[link].style.fontFamily = "" // For each index in the array, change the background colour to default
      })
}

/*
3. Mouse enter and leave - current openings (work for us)
      text will become larger when entered and return left 

Code on all sheets will need to be altered!
*/
let jobs = document.querySelectorAll(".work>p")

for (let i = 0; i < jobs.length; i++) {
      jobs[i].addEventListener("mouseover", function run() {
            jobs[i].style.fontSize = "2rem"
            jobs[i].style.transition = "1s"
      })
}

for (let i = 0; i < jobs.length; i++) {
      jobs[i].addEventListener("mouseleave", function run() {
            jobs[i].style.fontSize = ""
      })
}

/*
4. Create a Basic form, the text inputs will change background color and 
      text color when keypress event activated - make the form relevant to
      the site.

Think about what we want to target and how we want to achieve this, you may need to combine multiple methods we have learnt in JS to accomplish the end result.
*/
let inputBox = document.getElementsByClassName("textInput")

for (let i = 0; i < inputBox.length; i++) {
      inputBox[i].addEventListener("keypress", function run() {
            inputBox[i].style.backgroundColor = "red"
            inputBox[i].style.color = "white"
      })
}
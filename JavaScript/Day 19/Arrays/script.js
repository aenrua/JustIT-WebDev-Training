// A single variable which holds more than one value
let numbers = [2, 4, 6, 7, 10, 11]

// Each value has a number associated to it called an index number
// Index numbers start from zero
let employees = [
    "Anton Agejev",
    "John",
    "Claire",
    "Amy",
]

// First item = 0
// Last value = total indices - 1
console.log(employees[0])
console.log(employees)
console.log(employees.length) // Displays number of indices

// Replace an index
employees[2] = "Mel"
console.log(employees)

// Add an index at the end
employees.push("Brooke")
console.log(employees)

// Add an index in a specific place
let fruit = [
    "Banana",
    "Apple",
    "Kiwi"
]
fruit.splice(1, 0, "Orange") // Where to start, how many indices to remove, what to add
console.log(fruit)

// Remove last index
employees.pop()
console.log(employees)
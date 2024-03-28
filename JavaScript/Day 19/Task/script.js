/* 1: Create an array of your favourite films/TV shows, up to 5 items. Use an array method to add 2 more items to your array. Use a loop to cycle through the array and log each item to the console. */
let filmsTV = [
    "Ирония судьбы",
    "Blade Runner 2049",
    "Breaking Bad",
    "Narcos",
    "One Punch Man"
]
filmsTV.push("The Last Kingdom", "The Lord of the Rings Trilogy")
for (let i = 0; i <= 6; i++) {
    console.log(filmsTV[i])
}

/* 2: Generate 10 random numbers between 1-100 and log them to the console. */
for (let i = 1; i <= 10; i++) {
    let random = Math.floor(Math.random() * 100) + 1
    console.log(random)
}

/* 3: Create a loop that counts backwards from 20-0. */
for (i = 20; i >= 0; i--) {
    console.log(i)
}

/* 4: Generate 5 random numbers between 1-50. For each number generated, check if the number is divisible by 5 or not. Log whether it is divisible or not to the console. */
for (let i = 1; i <= 5; i++) {
    let randomDivisible = Math.floor(Math.random() * 50) + 1
    if (randomDivisible % 5 == 0) {
        console.log(`${randomDivisible} is divisible by 5`)
    }
    else {
        console.log(`${randomDivisible} is not divisible by 5`)
    }
}
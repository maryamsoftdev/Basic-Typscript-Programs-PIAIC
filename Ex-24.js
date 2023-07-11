"use strict";
let carName = 'subaru';
console.log("Is carName == 'subaru'? I predict true.");
console.log(carName == 'subaru'); // true
console.log("Is carName == 'honda'? I predict false.");
console.log(carName == 'honda'); // false
console.log("Is carName != 'ford'? I predict true.");
console.log(carName != 'ford'); // true
console.log("Is carName != 'subaru'? I predict false.");
console.log(carName != 'subaru'); // false
let cityName = 'New York';
console.log("Is cityName in lowercase equal to 'new york'? I predict true.");
console.log(cityName.toLowerCase() == 'new york'); // true
console.log("Is cityName in lowercase equal to 'new york city'? I predict false.");
console.log(cityName.toLowerCase() == 'new york city'); // false
let number = 10;
console.log("Is number equal to 10? I predict true.");
console.log(number == 10); // true
console.log("Is number not equal to 5? I predict true.");
console.log(number != 5); // true
console.log("Is number greater than 5? I predict true.");
console.log(number > 5); // true
console.log("Is number less than 15? I predict true.");
console.log(number < 15); // true
console.log("Is number greater than or equal to 10? I predict true.");
console.log(number >= 10); // true
console.log("Is number less than or equal to 20? I predict true.");
console.log(number <= 20); // true
let ageOfPerson = 25;
console.log("Is age greater than 18 and less than 30? I predict true.");
console.log(ageOfPerson > 18 && ageOfPerson < 30); // true
console.log("Is age greater than 50 or less than 20? I predict false.");
console.log(ageOfPerson > 50 || ageOfPerson < 20); // false
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes('apple')); // true
console.log("Is 'grape' in the fruits array? I predict false.");
console.log(fruits.includes('grape')); // false
let colors = ['red', 'green', 'blue'];
console.log("Is 'yellow' not in the colors array? I predict true.");
console.log(!colors.includes('yellow')); // true
console.log("Is 'green' not in the colors array? I predict false.");
console.log(!colors.includes('green')); // false

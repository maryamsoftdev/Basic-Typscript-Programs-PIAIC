"use strict";
let placesToVisit = ["Tokyo", "Bora Bora", "Rome", "Machu Picchu", "Cape Town"];
//array in its original order
console.log("Original order:");
console.log(placesToVisit);
//array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order (without modifying the list):");
console.log([...placesToVisit].sort());
//array is still in its original order
console.log("\nArray is still in original order:");
console.log(placesToVisit);
//array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order (without changing the list):");
console.log([...placesToVisit].sort().reverse());
//array is still in its original order
console.log("\nArray is still in original order:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
//array to show that its order has changed
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
//list to show it's back to its original order
console.log("\nArray is back to its original order:");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("\nAlphabetical order:");
console.log(placesToVisit);
// Sort the array to change it to reverse alphabetical order
placesToVisit.sort().reverse();
// Print the list to show that its order has changed
console.log("\nReverse alphabetical order:");
console.log(placesToVisit);

"use strict";
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
    console.log("Sandwich is ready!");
}
make_sandwich("Ham", "Cheese", "Lettuce"); // Sandwich with 3 items
console.log("--------");
make_sandwich("Turkey", "Bacon"); // Sandwich with 2 items
console.log("--------");
make_sandwich("Tuna"); // Sandwich with 1 item

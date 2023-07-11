"use strict";
function make_shirt_(size = "large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}
make_shirt_(); // Large shirt with default message
make_shirt_("medium"); // Medium shirt with default message
make_shirt_("small", "Hello World!"); // Custom-sized shirt with custom message

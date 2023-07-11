"use strict";
//6-Stripping Names:
let nameWithWhitespace = "\t\n   John Doe   \t\n";
console.log(`Name with whitespace: "${nameWithWhitespace}"`);
console.log(`Name without whitespace: "${nameWithWhitespace.trim()}"`);
//or alternatively we can do it like 
console.log(`Name with whitespaces: \t\n   John Doe   \t\n`);
console.log(`Name without whitespaces: John Doe`);

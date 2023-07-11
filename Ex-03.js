"use strict";
//3-Name Cases:
let personNameForHeading = "John doe";
console.log(`Lowercase: ${personNameForHeading.toLowerCase()}`);
console.log(`Uppercase: ${personNameForHeading.toUpperCase()}`);
console.log(`Titlecase: ${toTitleCase(personNameForHeading)}`);
function toTitleCase(str) {
    let words = str.toLowerCase().split(" ");
    let titleCaseWords = [];
    for (let word of words) {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        titleCaseWords.push(capitalizedWord);
    }
    return titleCaseWords.join(" ");
}

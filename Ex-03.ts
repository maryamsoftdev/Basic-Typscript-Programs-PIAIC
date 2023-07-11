//3-Name Cases:
let personNameForHeading: string = "John doe";
console.log(`Lowercase: ${personNameForHeading.toLowerCase()}`);
console.log(`Uppercase: ${personNameForHeading.toUpperCase()}`);
console.log(`Titlecase: ${toTitleCase(personNameForHeading)}`);
function toTitleCase(str: string): string {
  let words: string[] = str.toLowerCase().split(" ");
  let titleCaseWords: string[] = [];
  for (let word of words) {
    let capitalizedWord: string = word.charAt(0).toUpperCase() + word.slice(1);
    titleCaseWords.push(capitalizedWord);
  }
  return titleCaseWords.join(" ");
}
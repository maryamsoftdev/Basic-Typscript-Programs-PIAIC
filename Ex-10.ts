//10-Adding Comments:
//program 1:
console.log(5 + 3); // Addition: 5 + 3 = 8
console.log(12 - 4); // Subtraction: 12 - 4 = 8
console.log(4 * 2); // Multiplication: 4 * 2 = 8
console.log(32 / 4); // Division: 32 / 4 = 8
//program 2
let personName_: string = "John doe";
console.log(`Lowercase: ${personName_.toLowerCase()}`);
console.log(`Uppercase: ${personName_.toUpperCase()}`);
console.log(`Titlecase: ${ForTitleCase(personName_)}`);

function ForTitleCase(str: string): string {
  let words: string[] = str.toLowerCase().split(" ");
  let titleCaseWords: string[] = [];

  for (let word of words) {
    let capitalizedWord: string = word.charAt(0).toUpperCase() + word.slice(1);
//here i have used splite(" ") whih will slip the string whenever a  bl;ank space will come then by upercase methode it will uppercase the forst letter then will join the whole strinf using join("") it will join with a blanck space imsertion
    titleCaseWords.push(capitalizedWord);
  }

  return titleCaseWords.join(" ");
}
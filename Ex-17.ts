//Shrinking Guest List:
let guestList: string[] = ["nabeelah", "maryam", "jahanzaib", "alishba"];
let absentGuest: string = "maryam";
let newInvitee1_: string = "maria";
let newInvitee2: string = "Hadia";
let newInvitee3: string = "Ali";

console.log("We found a new bigger table, now we can invite more guests.");

guestList.unshift(newInvitee1); // Add newInvitee1 to the beginning of the array
const indexToInsert: number = Math.floor(guestList.length / 2); // Insert at the middle index
guestList.splice(indexToInsert, 0, newInvitee2); // Insert newInvitee2 in the middle of the array
guestList.push(newInvitee3); // Add newInvitee3 to the end of the array

console.log("Updated Guest List:");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Hi ${guestList[i]}, you are invited to the party.`);
}

console.log("Apologies, the new dinner table won't arrive in time. We can only invite two people for dinner.");

while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

console.log("Still invited:");
const remainingGuest1 = guestList[0];
const remainingGuest2 = guestList[1];
console.log(`Hi ${remainingGuest1}, you are still invited to the party.`);
console.log(`Hi ${remainingGuest2}, you are still invited to the party.`);

guestList = [];

console.log("Empty guest list:", guestList);

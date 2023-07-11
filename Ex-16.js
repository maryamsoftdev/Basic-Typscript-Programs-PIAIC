"use strict";
//More Guests: 
let guestList__ = ["maryam", "jahanzaib", "alishba"];
let absentGuest__ = "maryam";
let newInvitee1__ = "nabeelah";
let newInvitee2__ = "Hadia";
let newInvitee3__ = "Ali";
console.log("we found a new bigger table now we can invite more guests");
guestList__.unshift(newInvitee1__); //in beginning
const indexToInsert__ = Math.floor(guestList__.length / 2); // Insert at the middle index
guestList__.splice(indexToInsert__, 0, newInvitee2__);
guestList__.push(newInvitee3__); //in last
console.log("Updated Guest List:");
for (let i = 0; i < guestList__.length; i++) {
    console.log(`Hi ${guestList__[i]} you are invited to the party`);
}

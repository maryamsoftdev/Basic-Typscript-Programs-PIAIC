"use strict";
//Changing Guest List: 
let guestList1 = ["maryam", "jahanzaib", "alishba"];
let absentGuest1 = "maryam";
let newInvitee1 = "nabeelah";
let absentGuestIndex1 = guestList1.indexOf(absentGuest1);
guestList1[absentGuestIndex1] = newInvitee1;
console.log(`${absentGuest1} cannot make it`);
console.log("Updated Guest List:");
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Hi ${guestList1[i]} you are invited to the party`);
}

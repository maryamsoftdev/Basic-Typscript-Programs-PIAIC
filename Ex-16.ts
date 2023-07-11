//More Guests: 
let guestList__: string[] = ["maryam", "jahanzaib", "alishba"];
let absentGuest__: string = "maryam";
let newInvitee1__: string = "nabeelah";
let newInvitee2__: string = "Hadia";
let newInvitee3__: string = "Ali";

console.log("we found a new bigger table now we can invite more guests")
guestList__.unshift(newInvitee1__);//in beginning
const indexToInsert__: number = Math.floor(guestList__.length / 2); // Insert at the middle index
guestList__.splice(indexToInsert__, 0, newInvitee2__);
guestList__.push(newInvitee3__);//in last
  console.log("Updated Guest List:");
  for (let i =0; i < guestList__.length; i++){
    console.log(`Hi ${guestList__[i]} you are invited to the party`)
  }


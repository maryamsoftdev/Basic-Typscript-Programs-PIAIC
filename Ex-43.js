"use strict";
function show_magicians__(magicians__) {
    for (let i = 0; i < magicians__.length; i++) {
        console.log(magicians__[i]);
    }
}
function make_great(magicians__) {
    let greatMagicians__ = [];
    for (let i = 0; i < magicians__.length; i++) {
        greatMagicians__.push(magicians__[i] + " the Great");
    }
    return greatMagicians__;
}
let magicianNames__ = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let greatMagicianNames__ = make_great([...magicianNames__]); // Copy of the magicianNames array
show_magicians__(magicianNames__); // Original array with unchanged names
console.log("--------");
show_magicians__(greatMagicianNames__); // Modified array with "the Great" added to each name

"use strict";
function show_magicians_(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great_(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}
let magicianNames_ = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let greatMagicianNames = make_great(magicianNames_);
show_magicians_(greatMagicianNames);

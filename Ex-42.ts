function show_magicians_(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function make_great_(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(magicians[i] + " the Great");
    }
  
    return greatMagicians;
  }
  
  let magicianNames_: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  let greatMagicianNames: string[] = make_great(magicianNames_);
  
  show_magicians_(greatMagicianNames);
  
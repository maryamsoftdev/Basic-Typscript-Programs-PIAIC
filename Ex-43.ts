function show_magicians__(magicians__: string[]): void {
    for (let i = 0; i < magicians__.length; i++) {
      console.log(magicians__[i]);
    }
  }
  
  function make_great(magicians__: string[]): string[] {
    let greatMagicians__: string[] = [];
  
    for (let i = 0; i < magicians__.length; i++) {
      greatMagicians__.push(magicians__[i] + " the Great");
    }
  
    return greatMagicians__;
  }
  
  let magicianNames__: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  let greatMagicianNames__: string[] = make_great([...magicianNames__]); // Copy of the magicianNames array
  
  show_magicians__(magicianNames__); // Original array with unchanged names
  console.log("--------");
  show_magicians__(greatMagicianNames__); // Modified array with "the Great" added to each name
  
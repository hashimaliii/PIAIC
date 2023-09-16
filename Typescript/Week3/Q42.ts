function show_magicians(magicians: string[]): void
{
    for (const magician of magicians) {
      console.log(magician);
    }
}
  
function make_great(magicians: string[]): string[] 
{
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
  
const magicianNames: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];
const greatMagicians = make_great(magicianNames);
show_magicians(greatMagicians);
  
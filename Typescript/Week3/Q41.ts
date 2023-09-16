function show_magicians(magicians: string[]): void 
{
    for (const magician of magicians) 
    {
      console.log(magician);
    }
}

var magicianNames: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];

show_magicians(magicianNames);
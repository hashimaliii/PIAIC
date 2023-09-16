function makeSandwich(...items: string[]): void 
{
    if (items.length === 0) 
    {
      console.log("You ordered an empty sandwich!");
    } 
    else 
    {
      console.log("Sandwich with the following items:");
      for (const item of items)
      {
        console.log(`- ${item}`);
      }
    }
}
  
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich();
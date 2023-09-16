function isInArray(array: string[], item: string): boolean {
    for (const element of array) {
      if (element === item) {
        return true;
      }
    }
    return false;
  }

var favorite_fruits:string[] = ["apple", "mango", "orange"]

if (isInArray(favorite_fruits, "apple"))
{
    console.log("You really like apple!")
}

if (isInArray(favorite_fruits, "mango"))
{
    console.log("You really like mango!")
}

if (isInArray(favorite_fruits, "orange"))
{
    console.log("You really like orange!")
}

if (isInArray(favorite_fruits, "banana"))
{
    console.log("You really like banana!")
}
const myArray: number[] = [1, 2, 3, 4, 5]

const indexOutOfBounds = myArray[10]

try 
{
  const value = myArray[10]
  console.log("Value at index 10:", value)
} 
catch (error) 
{
  console.error("An error occurred:", error.message)
}

const correctedValue = myArray[2]
console.log("Corrected value at index 2:", correctedValue)

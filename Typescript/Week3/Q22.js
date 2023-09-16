var myArray = [1, 2, 3, 4, 5];
var indexOutOfBounds = myArray[10];
try {
    var value = myArray[10];
    console.log("Value at index 10:", value);
}
catch (error) {
    console.error("An error occurred:", error.message);
}
var correctedValue = myArray[2];
console.log("Corrected value at index 2:", correctedValue);

var arrayNumbers = [50, 51, 65, 95, 49, 33, 44];
var max = arrayNumbers[0];
var i = 0;
while (i < arrayNumbers.length) {
    if (arrayNumbers[i] > max) {
        max = arrayNumbers[i];
    }
    i++;
}
console.log("Numbers Array:", arrayNumbers);
console.log("Max Number: ", max);

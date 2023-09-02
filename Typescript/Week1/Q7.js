var arrayNumber = [1, 3, 50, 10, 11];
function sum(arrayNumber) {
    var sum = 0;
    var i = 0;
    while (i < arrayNumber.length) {
        sum += arrayNumber[i];
        i++;
    }
    return sum;
}
console.log("Array is", arrayNumber);
console.log("Sum is", sum(arrayNumber));

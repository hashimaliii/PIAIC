var evenCount = 10;
var i = 1;
var evenCounted = 0;
var evenSum = 0;
while (evenCounted < evenCount) {
    if (i % 2 == 0) {
        evenSum += i;
        evenCounted += 1;
    }
    i++;
}
console.log("First", evenCount, "even sum is:", evenSum);

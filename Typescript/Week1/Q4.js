var evenCount = 10;
var i = 1;
var evenCounted = 0;
while (evenCounted <= evenCount) {
    if (i % 2 == 0) {
        console.log(i);
        evenCounted += 1;
    }
    i += 1;
}

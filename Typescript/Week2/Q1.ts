var evenCount:number = 10;
var i:number = 1;
var evenCounted:number = 0;
var evenSum:number = 0;

while (evenCounted<evenCount) 
{
    if (i%2==0)
    {
        evenSum += i;
        evenCounted += 1;
    }
    i++;
}

console.log("First", evenCount, "even sum is:",evenSum);

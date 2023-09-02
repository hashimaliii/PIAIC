var arrayNumber:number[] = [1, -1, 3, 4, -2, -6];
console.log("Before Remvong Negative Numbers: ", arrayNumber)

var i:number = 0;
while(i<arrayNumber.length)
{
    if (arrayNumber[i] < 0)
    {
        arrayNumber.splice(i, 1);
        i--;
    }
    i++;
}

console.log("After Remvong Negative Numbers: ", arrayNumber)
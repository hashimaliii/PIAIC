var arrayNumber:number[] = [1, 3, 50, 10, 11];

function sum(arrayNumber:number[])
{
    var sum:number = 0;

    var i:number = 0;
    while(i < arrayNumber.length)
    {
        sum += arrayNumber[i];
        i++;
    }
    return sum;
}

console.log("Array is", arrayNumber);
console.log("Sum is", sum(arrayNumber));
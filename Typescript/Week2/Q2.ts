var arrayNumber:number[] = [1, 0, 9, 7, 8, 16, 1, 2];

console.log("Array: ",arrayNumber);
var i:number = 0;
while(i<arrayNumber.length)
{
    if (arrayNumber[i]%2==0)
    {
        console.log(arrayNumber[i]);
    }
    i++;
}
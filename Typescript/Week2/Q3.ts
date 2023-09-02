var arrayNumber:number[] = [1, 0, 9, 7, 8, 16, 1, 2];

console.log("Array Before Removing Even Numbers: ",arrayNumber);
var i:number = 0;
while(i<arrayNumber.length)
{
    if (arrayNumber[i]%2==0)
    {
        arrayNumber.splice(i, 1);
        i--;
    }
    i++;
}
console.log("Array After Removing Even Numbers: ",arrayNumber);
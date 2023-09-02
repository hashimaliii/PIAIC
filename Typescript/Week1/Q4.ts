var evenCount:number = 10;
var i:number = 1;
var evenCounted:number = 0;

while (evenCounted<=evenCount) 
{
    if (i%2==0)
    {
        console.log(i);
        evenCounted += 1;
    }
    i+=1;
}
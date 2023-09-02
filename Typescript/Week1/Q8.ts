var celciusTemp:number[] = [36, 32, 44, 26, 50];

function celciusToFarenheit(farenheitTemp:number[])
{
    var farenheitTemp:number[];

    var i:number = 0;
    while (i<celciusTemp.length)
    {
        farenheitTemp[i] = (celciusTemp[i] * 9/5) + 32;
        i++;
    }

    return farenheitTemp;
}

console.log("Temperature in Celcius: ", celciusTemp);
console.log("Temperature in Farenheit: ",celciusToFarenheit(celciusTemp));
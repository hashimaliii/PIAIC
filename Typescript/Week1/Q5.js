var factNumber = 5;
function factorial(factNumber) {
    if (factNumber < 1) {
        console.log("Invalid Number\nNumber is less than 1");
        return;
    }
    var i = factNumber;
    var factCounted = 1;
    while (i > 0) {
        factCounted *= i;
        i--;
    }
    console.log("Factorial of", factNumber, "is", factCounted);
}
factorial(factNumber);

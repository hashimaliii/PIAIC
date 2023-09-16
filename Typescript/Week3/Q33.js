var numbers = [];
for (var i = 1; i < 10; i++) {
    numbers.push(i);
}
numbers.forEach(function (number) {
    if (number != 1 && number != 2 && number != 3) {
        console.log(number + "th");
    }
    else if (number == 1) {
        console.log(number + "st");
    }
    else if (number == 2) {
        console.log(number + "nd");
    }
    else if (number == 3) {
        console.log(number + "rd");
    }
});

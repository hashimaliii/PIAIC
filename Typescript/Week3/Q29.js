function isInArray(array, item) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (element === item) {
            return true;
        }
    }
    return false;
}
var favorite_fruits = ["apple", "mango", "orange"];
if (isInArray(favorite_fruits, "apple")) {
    console.log("You really like apple!");
}
if (isInArray(favorite_fruits, "mango")) {
    console.log("You really like mango!");
}
if (isInArray(favorite_fruits, "orange")) {
    console.log("You really like orange!");
}
if (isInArray(favorite_fruits, "banana")) {
    console.log("You really like banana!");
}

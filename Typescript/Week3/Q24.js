var myArray = [1, 2, 3, 4, 5];
function isNotInArray(array, item) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (element === item) {
            return false;
        }
    }
    return true;
}
// Tests that evaluate to true
var test1 = 10 === 10;
var test2 = "hello" === "hello";
var test3 = [1, 2, 3].length === 3;
var test4 = { name: "Alice", age: 30 }.age === 30;
var test5 = (2 * 3) > 5;
// Tests that evaluate to false
var test6 = 5 != 5;
var test7 = "world" != "world";
var test8 = 5 >= 7;
var test9 = { name: "Bob", age: 25 }.age > 30;
var test10 = (5 - 1) === 3;
var test11 = "hello".toLowerCase() === "Hello";
var test12 = "hello".toLowerCase() === "Hello" && (2 * 3) > 5;
var test13 = isNotInArray(myArray, 6);
var test14 = isNotInArray(myArray, 4);
console.log("Test 1:", test1);
console.log("Test 2:", test2);
console.log("Test 3:", test3);
console.log("Test 4:", test4);
console.log("Test 5:", test5);
console.log("Test 6:", test6);
console.log("Test 7:", test7);
console.log("Test 8:", test8);
console.log("Test 9:", test9);
console.log("Test 10:", test10);
console.log("Test 11:", test11);
console.log("Test 12:", test12);
console.log("Test 13:", test13);
console.log("Test 14:", test14);

var prevArray = ["orange", "mango", "banana", "sugar", "tea"];
var index = 2;
var value = "water";
function insertion(prevArray, index, value) {
    var newArray = prevArray.splice(index, 0, value);
    return prevArray;
}
console.log("Prev Array", prevArray);
console.log("New Array", insertion(prevArray, index, value));

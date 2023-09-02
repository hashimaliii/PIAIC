var prevArray = ["orange", "mango", "banana", "sugar", "tea"];
var index:number = 2;
var value:string = "water";

function insertion(prevArray:string[], index:number, value:string)
{
    var newArray = prevArray.splice(index, 0, value);

    return prevArray;
}

console.log("Prev Array", prevArray);
console.log("New Array", insertion(prevArray, index, value));

var shoppingCart = ["orange", "mango", "banana", "sugar", "tea"];
var index:number = 2;
var value:string = "water";
var valueToUpdate:string = "mango";

function insert(prevArray:string[], index:number, value:string)
{
    var newArray = prevArray.splice(index, 0, value);

    return prevArray;
}

function remove(prevArray:string[], index:number)
{
    var newArray = prevArray.splice(index, 1);

    return prevArray;
}

function update(prevArray:string[], value:string, valueToUpdate:string)
{
    var found = false;

    for (let i = 0; i < value.length; i++) {
        if (prevArray[i] == valueToUpdate)
        {
            found = true;
            prevArray.splice(i,1,value);
        }
    }
    
    if(found == false)
    {
        console.log("Item not found in the cart!");
    }

    return prevArray;
}

console.log("Array Before Insertion: ", shoppingCart);
console.log("Array After Insertion: ", insert(shoppingCart, index, value));
console.log();
console.log("Array Before Removing: ", shoppingCart);
console.log("Array After Removing: ", remove(shoppingCart, index));
console.log();
console.log("Array Before Updating: ", shoppingCart);
console.log("Array After Updating: ", update(shoppingCart, value, valueToUpdate));
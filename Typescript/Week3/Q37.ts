var size:string = "large"
var printOut:string = "Top G"

function make_shirt(size:string = "large", printOut:string = "I dont like Typescript") {
    console.log("Final Size is", size)
    console.log("Printout Will be", printOut)
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("medium");

// Create a small shirt with a different message
make_shirt("small", "TypeScript is awesome!");
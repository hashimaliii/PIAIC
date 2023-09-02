var radius:number = 10;

function circleArea(radius:number)
{
    var area:number = Math.PI * (radius*radius);
    return area;
}

console.log("Circle Radius: ",radius);
console.log("Circle Area: ",circleArea(radius));
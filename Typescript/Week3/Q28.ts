var age:number = 20

if (age >= 65)
{
    console.log("Person is an elder.")
}
else if (age >= 20 && age < 65)
{
    console.log("Person is an adult.")
}
else if (age >= 13 && age < 20)
{
    console.log("Person is an teenager.")
}
else if (age >= 4 && age < 13)
{
    console.log("Person is an kid.")
}
else if (age >= 2 && age < 4)
{
    console.log("Person is an toddler.")
}
else if (age < 2)
{
    console.log("Person is an baby.")
}
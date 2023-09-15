var guests:string[] = ["Andrew", "Sneako", "Tristan", "Luc"]
var guestsCantMakeIt:string[] = ["Luc"]
var newReplacementGuest:string[] = ["Sheikh Othman"]

guests.forEach(guest=>
    {
        var coming = true;
        guestsCantMakeIt.forEach(guestNotComing=>
            {
                if (guest == guestNotComing)
                {
                    coming = false;
                }
            })
        if (coming)
        {
            console.log(`I would like to invite ${guest} to dinner on which we will talk about our new business`)
        }
        else
        {
            console.log(`I would like to invite ${newReplacementGuest[newReplacementGuest.length-1]} to dinner on which we will talk about our new business`)
            newReplacementGuest.pop()
        }
    })

console.log("We have found a bigger dinner table")
guests.splice(0, 0, "Sheikh Othman")
guests.splice(guests.length/2,0,"Iman Gadzhi")
guests.push("Trump")

guests.forEach(guest=>
    {
       
        console.log(`I would like to invite ${guest} to dinner on which we will talk about our new business`)
        
    })

console.log("You just found out that your new dinner table won’t arrive in time for the dinner\nWe can invite only two peoples")

while(guests.length > 2)
{
    var removedGuest = guests.pop()
    console.log(`${removedGuest} we are sorry we can’t invite you to dinner.`)
}

guests.forEach(guest=>
    {
        console.log(`${guest} you are still invited to dinner.`)
    })

while(guests.length != 0)
{
    guests.pop()
}

console.log(guests)
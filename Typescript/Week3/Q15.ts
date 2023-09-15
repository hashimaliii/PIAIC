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
var users:string[] = ["admin", "eric", "tallal"]

users.forEach(person=>
    {
        if (person == "admin")
        {
            console.log("Hello admin, would you like to see a status report?")
        }
        else
        {
            console.log(`Hello ${person}, thank you for logging in again.`)
        }
    })
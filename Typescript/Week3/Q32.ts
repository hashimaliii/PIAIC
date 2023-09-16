var userNames:string[] = ["alexBomber", "turkishSuicider", "RussianInvader"]
var newUserNames:string[] = ["alexBomber", "GermanHitler"]

newUserNames.forEach(newUserName=>
    {
        var found:boolean = false;
        userNames.forEach(userName=>
            {
                if(userName.toLowerCase() == newUserName.toLowerCase())
                {
                    found = true;
                }
            })

        if (!found)
        {
            console.log(newUserName + ' username is available')
        }
        else
        {
            console.log(newUserName + ' is not available. You need to enter a new username')
        }
    })
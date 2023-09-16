var userNames = ["alexBomber", "turkishSuicider", "RussianInvader"];
var newUserNames = ["alexBomber", "GermanHitler"];
newUserNames.forEach(function (newUserName) {
    var found = false;
    userNames.forEach(function (userName) {
        if (userName.toLowerCase() == newUserName.toLowerCase()) {
            found = true;
        }
    });
    if (!found) {
        console.log(newUserName + ' username is available');
    }
    else {
        console.log(newUserName + ' is not available. You need to enter a new username');
    }
});

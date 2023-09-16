var guests = ["Andrew", "Sneako", "Tristan", "Luc"];
var guestsCantMakeIt = ["Luc"];
var newReplacementGuest = ["Sheikh Othman"];
guests.forEach(function (guest) {
    var coming = true;
    guestsCantMakeIt.forEach(function (guestNotComing) {
        if (guest == guestNotComing) {
            coming = false;
        }
    });
    if (coming) {
        console.log("I would like to invite ".concat(guest, " to dinner on which we will talk about our new business"));
    }
    else {
        console.log("I would like to invite ".concat(newReplacementGuest[newReplacementGuest.length - 1], " to dinner on which we will talk about our new business"));
        newReplacementGuest.pop();
    }
});

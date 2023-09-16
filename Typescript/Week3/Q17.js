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
console.log("We have found a bigger dinner table");
guests.splice(0, 0, "Sheikh Othman");
guests.splice(guests.length / 2, 0, "Iman Gadzhi");
guests.push("Trump");
guests.forEach(function (guest) {
    console.log("I would like to invite ".concat(guest, " to dinner on which we will talk about our new business"));
});
console.log("You just found out that your new dinner table won’t arrive in time for the dinner\nWe can invite only two peoples");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("".concat(removedGuest, " we are sorry we can\u2019t invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("".concat(guest, " you are still invited to dinner."));
});
while (guests.length != 0) {
    guests.pop();
}
console.log(guests);

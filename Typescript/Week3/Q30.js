var users = ["admin", "eric", "tallal"];
users.forEach(function (person) {
    if (person == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(person, ", thank you for logging in again."));
    }
});

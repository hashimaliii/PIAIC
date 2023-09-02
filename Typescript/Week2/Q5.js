var marks = [50, 51, 65, 95, 49, 33, 44];
console.log("Marks Array Before Removing Below 50: ", marks);
var i = 0;
while (i < marks.length) {
    if (marks[i] < 50) {
        marks.splice(i, 1);
        i--;
    }
    i++;
}
console.log("Marks Array After Removing Below 50: ", marks);

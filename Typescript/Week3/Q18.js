var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Romania", "Jail", "Private Island"];
var notSorted = __spreadArray([], placesToVisit, true);
var reverseOrder = __spreadArray([], placesToVisit, true);
notSorted.sort();
reverseOrder.sort().reverse();
notSorted.forEach(function (place) {
    console.log(place);
});
placesToVisit.forEach(function (place) {
    console.log(place);
});
reverseOrder.forEach(function (place) {
    console.log(place);
});
placesToVisit.reverse();
placesToVisit.forEach(function (place) {
    console.log(place);
});
placesToVisit.reverse();
placesToVisit.forEach(function (place) {
    console.log(place);
});
placesToVisit.sort();
placesToVisit.forEach(function (place) {
    console.log(place);
});
placesToVisit.reverse();
placesToVisit.forEach(function (place) {
    console.log(place);
});

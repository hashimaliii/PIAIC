function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
var originalMagicianNames = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];
var greatMagicians = make_great(originalMagicianNames.slice());
show_magicians(originalMagicianNames);
show_magicians(greatMagicians);

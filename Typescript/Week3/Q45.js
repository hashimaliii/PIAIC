function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Process additional options
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
var carInfo = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
console.log(carInfo);

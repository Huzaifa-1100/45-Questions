"use strict";
// Question no 45
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
let answer = storeCarInfo("Toyota", "Grande", { color: "Silver" }, { features: [`Fully automatic`, `Power window`, `Power stearing`, `Airbags`] });
console.log(answer);

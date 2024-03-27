// Question no 45

function storeCarInfo(
  manufacturer: string,
  modelName: string,
  ...extraOption: { [key: string]: any }[]
): object {
  const carInfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraOption),
  };
  return carInfo;
}

let answer = storeCarInfo(
  "Toyota",
  "Grande",
  { color: "Silver" },
  { features: [`Fully automatic`, `Power window`, `Power stearing`, `Airbags`] }
);

console.log(answer);

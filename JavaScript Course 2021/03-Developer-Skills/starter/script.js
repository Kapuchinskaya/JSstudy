// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// function arrayPlusArray(arr1, arr2) {

//   return arrayPlus(arr1) + arrayPlus(arr2);
// }

// const arrayPlus = function (arr) {
//   let arraySum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arraySum += arr[i];
//   }
//   return arraySum;
// };

// console.log(arrayPlusArray([1, 2, 6, 6, 100], [3, 2]));

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     //C) FIX
//     value: Number(prompt('Degrees celsius')),
//   };

//   //B) FIND
//   console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// //A) IDENTIFY
// console.log(measureKelvin());

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`...${arr[i]}C in ${i} days`);
//   }
// };

// printForecast([5157, 21, 2123]);
// printForecast([12, 5, -5, 0, 4]);

var str = "Mr. blue house";
var n = str.search("blue");
console.log(n);
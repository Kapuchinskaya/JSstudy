'use strict';

// const calcAge = function (birthY) {
//   let x = 1;
//   console.log(2037 - birthY);
//   console.log(this);
// };
// calcAge(2000);

// const jonas = {
//   year: 1992,
//   calcAge: function () {
//     console.log(2037 - this.year);
//    // console.log(this);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2018,
// };
// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();
// console.log(matilda);

let ola = {
  age:28
}

let anton = ola;
ola.age = 27;
console.log(ola);
console.log(anton);


// let age = 40;
// let newAge = 41;
//  age = 18;
// console.log(age, newAge);

const olaCopy = Object.assign({},ola);
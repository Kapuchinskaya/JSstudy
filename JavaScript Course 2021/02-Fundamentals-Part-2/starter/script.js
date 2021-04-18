// "use strict";

// // const d1 = 44;
// // const d2 = 23;
// // const d3 = 71;
// // const k1 = 65;
// // const k2 = 54;
// // const k3 = 49;

// // const d1 = 85;
// // const d2 = 54;
// // const d3 = 41;
// // const k1 = 23;
// // const k2 = 34;
// // const k3 = 27;

// // const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // const avD = calcAverage(d1, d2, d3);
// // const avK = calcAverage(k1, k2, k3);
// // console.log(avD, avK);

// // const whoWins = function (av1, av2) {
// //     if (av1 >= 2 * av2) { console.log('Dolphins win!'); }
// //     else if (av2 >= av1 * 2) { console.log('Koalas win!'); }
// //     else { console.log('Noone wins!'); }
// // }

// // whoWins(avD, avK);
// // whoWins(1,3);
// // whoWins(3,1);

// // const friends = ['Michael', 'Peter', 'Steven'];
// // const years = new Array(1991, 1992, 1993);
// // console.log(friends,
// //     years);

// // console.log(friends[0]);
// // console.log(friends.length);
// // console.log(friends[friends.length - 1]);

// // friends[2] = 'Alex';
// // console.log(friends);

// // const jonas = ['Jonas', 'Steven', 1992 + 28, friends]

// // //Упражнение
// // const calcAge = function (birthYear) {
// //     return 2020 - birthYear;
// // }

// // const year = [1991, 1992, 1993];
// // const age0 = calcAge(year[0]);
// // const age1 = calcAge(year[1]);
// // const age2 = calcAge(year[2]);
// // console.log(age0);

// // const ages = [age0, age1, age2];
// // const ages2 = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2])];
// // console.log(ages);
// // console.log(ages2);

// // const friends = ['Michael', 'Peter', 'Steven'];
// // friends.push('Jay');
// // //const newLength =
// // friends.unshift('Leo');
// // //const popped =
// // friends.pop();
// // friends.shift();
// // console.log(friends.indexOf('Steven'));
// // console.log(friends.includes('Bob'));

// // console.log(friends);
// // //console.log(popped);

// // const bill = [125, 555, 44];
// // //1
// // const tips = [
// //     bill[0] > 50 && bill[0] < 300 ? bill[0] * 0.15 : bill[0] * 0.2,
// //     bill[1] > 50 && bill[1] < 300 ? bill[1] * 0.15 : bill[1] * 0.2,
// //     bill[2] > 50 && bill[2] < 300 ? bill[2] * 0.15 : bill[2] * 0.2]

// // console.log(tips);
// // //2
// // const calcTip = billNum => billNum > 50 && billNum < 300 ? billNum * 0.15 : billNum * 0.2;
// // const tips2 = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
// // console.log(tips2);

// // const jonas = {
// //     firstName: 'Jonas',
// //     lastName: 'Smith',
// //     age: 2020 - 1992,
// //     friends: ['a', 'b', 'c']
// // }

// // console.log(jonas.age);
// // console.log(jonas['age']);

// // //преимущество скобок
// // const nameKey = 'Name';
// // console.log(jonas['first' + nameKey]);
// // console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt('What do u want to know ab Jonas? choose firstName / lastName / age');
// // if (jonas[interestedIn]) { console.log(jonas[interestedIn]) } else {
// //     console.log('wrong request')
// // };

// // jonas.location = 'Polska';
// // jonas['job'] = 'IT';
// // console.log(jonas);

// //challenge
// //console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friens is called ${jonas.friends[0]}`);

// // const jonas = {
// //     firstName: 'Jonas',
// //     lastName: 'Smith',
// //     birthYear: 1992,
// //     friends: ['a', 'b', 'c'],
// //     hasDriversLicense: false,
// //     // calcAge: function (birthYear) {
// //     //     return 2020 - birthYear
// //     // }

// //     // calcAge: function() {
// //     //     return 2020-this.birthYear
// //     // }

// //     calcAge: function () {
// //         this.age = 2020 - this.birthYear;
// //         return this.age
// //     },
// //     //challenge
// //     summarizingInfo: function () {
// //         return `${this.firstName} is ${this.calcAge()}-year old, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers lisence`
// //     }

// // }

// // // console.log(jonas.calcAge(jonas.birthYear));
// // // console.log(jonas['calcAge'](jonas.birthYear));

// // console.log(jonas.summarizingInfo());

// // const mark = {
// //     firstName: 'Mark',
// //     lastName: 'Miller',
// //     mass: 78,
// //     height: 1619,
// //     calcBMI: function () {
// //         this.BMI = this.mass / (this.height * this.height);
// //         return this.BMI;
// //     }
// // }

// // const john = {
// //     firstName: 'John',
// //     lastName: 'Smith',
// //     mass: 92,
// //     height: 195,
// //     BMI: 0,
// //     calcBMI: function () {
// //         this.BMI = this.mass / (this.height * this.height);
// //         return this.BMI;
// //     }
// // }
// // console.log(mark);
// // console.log(john);
// // john.calcBMI() > mark.calcBMI()
// //     ? console.log(`${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s BMI (${mark.BMI})!!!`)
// //     : console.log(`${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s BMI (${john.BMI})!!!`);

// // for (let rep = 1; rep <= 10; rep++) {
// //     console.log(`Lifting weight ${rep} times`);
// // }

// // const jonas = [
// //     'Jonas',
// //     'Smith',
// //     1992,
// //     ['a', 'b', 'c'],
// //     'teacher',
// // ];

// // const types = [];
// // const types2 = [];

// // for (let i = 0; i < jonas.length; i++) {
// //     console.log(jonas[i]);

// //     types[i] = typeof jonas[i];
// //     types2.push(typeof jonas[i]);
// // }

// // console.log(types);
// // console.log(types2);

// // const years = [1992, 1993, 1994];
// // const ages = [];
// // for (let i = 0; i < years.length; i++) {
// //     ages[i] = 2020 - years[i];
// // }
// // console.log(years, ages);

// // const types = [];

// // for (let i = 0; i < jonas.length; i++) {
// // if(typeof jonas[i] !== 'string') continue; //или брейк
// // types.push(typeof jonas[i]);

// // }
// // console.log(jonas);
// // console.log(types);

// // const jonas = [
// //     'Jonas',
// //     'Smith',
// //     1992,
// //     ['a', 'b', 'c'],
// //     'teacher',
// // ];

// // for (let i = jonas.length-1; i>=0; i--) {
// //     console.log(jonas[i]);
// // }

// // for (let rep = 1; rep <= 10; rep++) {
// //     console.log(`Lifting weight ${rep} times`);
// // }

// // let rep = 1;
// // while (rep <= 10) {
// //     console.log(`Sitting down ${rep} times`);
// //     rep++;
// // }

// // let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// // while (dice !== 6) {
// //     console.log(`Only ${dice}`);
// //     dice = Math.trunc(Math.random() * 100) + 1;
// //     if (dice === 6) {console.log(`Finally 6!`)}
// // }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   if (bill > 50 && bill < 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   //tips[i] = bills[i] > 50 && bills[i] < 300 ? bills[i] * 0.15 : bills[i] * 0.2;
//   totals.push(bills[i] + tips[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// // let sumArr = 0;
// // let averageArr = 0;
// // const calcAverage = function (arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //         sumArr = sumArr + arr[i];
// //     }
// //     return averageArr = sumArr / arr.length;
// // }

// // calcAverage(totals);
// // console.log(averageArr);

// // const calcAverage = function (arr) {
// //   let sumArr = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sumArr = sumArr + arr[i];
// //   }
// //   return sumArr / arr.length;
// // };
// // console.log(calcAverage(totals));
// // console.log(calcAverage(tips));
// // console.log(calcAverage(bills));

// // console.log("yohooo");
// //

// function numberToString(num) {
//   // Return a string of the number here!
//   return toString(num);
// }
// console.log(numberToString(67));

// function nextHappyYear(year) {
//   // console.log(arrayY);
//   const checkNumbers = function (checkYear) {
//     const arrayY = Array.from(checkYear.toString()).map(Number);
//     if (
//       arrayY[0] !== arrayY[1] &&
//       arrayY[0] !== arrayY[2] &&
//       arrayY[0] !== arrayY[3] &&
//       arrayY[1] !== arrayY[2] &&
//       arrayY[1] !== arrayY[3] &&
//       arrayY[2] !== arrayY[3]
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   let nextHappyY = year + 1;
//   //console.log(nextHappyYear);

//   if (checkNumbers(nextHappyY)) {
    
//     console.log(`${nextHappyY}`);
//     return nextHappyY;
//   } else {
//     while (nextHappyY < 9999) {
//       nextHappyY = nextHappyY + 1;
//       if (checkNumbers(nextHappyY)) {
        
//         console.log(`${nextHappyY}`);
//         return nextHappyY;
//         break;
//       }
//     }
//   }
// }

// nextHappyYear(3555);


let word = "3hey5hello2hi";
console.log(word);
console.log(word[0]);
let symbol = word[0];
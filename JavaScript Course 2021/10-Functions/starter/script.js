'use strict';

// const bookings = [];
// const createBooking = function (  flightNum = 'AA111',  numPassengers = '1',  price = '199' * numPassengers //ES6 def
// ) {
//   /*ES5
//   numPassengers = numPassengers || 1;//short circuting
//   */

//   const booking = {
//     flightNum, //теперь не надо писать flN : flN
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push[booking];
// };

/* 
 if (passenger.passport === '123456789') {
    alert('checked in');
  } else {
    alert('wrong passport');
  }
  */

// createBooking(1,undefined,3);

// const flight = 'AAA';
// const ola = {
//   name: 'olala',
//   passport: '123456789',
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'ZZZ';
//   passenger.name = 'Mrs. ' + passenger.name;
// };
// checkIn(flight, ola);
// console.log(flight);//останется первоначальным AAA
// console.log(ola);//имя изменится на Mrs. olala

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowercase; // / /g - значит все что угодно
// };

// const lowerOrder = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //hirher-order funciton
// const higherOrderFunction = function(str,lo/* lo stands for lowerOrder f */) {
//   console.log(`Original str ${str}`);
//   console.log(`After lowerOrder f ${lo(str)}`);//будет с большими буквами
//   console.log(`As f is an object, it has a name property, so this is a name of lowerOrder and ex of method in a function ${lo.name}`);//выдаст lowerOrder
// }

// higherOrderFunction('JavaScript is the best', lowerOrder)

// const high5 = function() {
//   console.log('hi!');
// }
// const arr = [1,2,3];
// arr.forEach(high5);

// const greet = function (gr) {
//   return function (name) {
//     console.log(`${gr}, ${name}`);
//   };
// };

// const greet2 = gr => name => console.log(`${gr}, ${name}`);

// //const calcAge5 = birthYear => 2020 - birthYear;

// const greeterHey /*это функция, которую ретурнила др ф*/ = greet('hey');
// greeterHey('Ola'); //выдаст хей, ола
// greet('Hello')('kira'); // выведет хэлло кира
// greet2('Hello')('kira');

const someObject = {
  airline: 'Lifthansa',
  iataCode: 'LH',
  bookings: [],
  //tip старый синтакс book: function () {}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`);
    //+добавим метод, чтоб создавал новый объект
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
// console.log(someObject);

// someObject.book(239, 'ola');

const someNewObject = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// //book(23, 'kika');
// const flightData = [99, 'Kira'];
// // book.call(someNewObject, ...flightData);
//  const book = someObject.book;
// // const bookSNO = book.bind(someNewObject);
// // bookSNO(1,'ola')

// const bookSNO999 = book.bind(someNewObject, 999,'me');
// bookSNO999();

// //With Event Listeners
// someObject.planes = 300;
// someObject.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', someObject.buyPlane.bind(someObject));
//this element всегда указывает на элемент, к которому the handler is attached
//здесь someObject.buyPlane - handler, а document.querySelector('.buy') - к чему он аттачт

//Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 100));

// const addVAT = addTax.bind(/*1st arg of bind is THIS*/ null, 0.23);

// const addT = function (rate = 2) {
//   return function (value) {
//     //  console.log(value + value * rate);
//     return value + value * rate;
//   };
// };
// const x = addT(undefined);//!!!
// console.log(x(100));

// {
//   let privateVar = 1;
//   const privateVarToo = 1;
//   var notPrivateVar = 1;
// }
// console.log(privateVar);
// console.log(privateVarToo);
// console.log(notPrivateVar);

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// function songDecoder(song) {
//   const songSplit = song.split('WUB');
//   console.log(songSplit);
//   const finalArr = [];
//   for (const i of songSplit) {
//     if (i !== '') {
//       finalArr.push(i);
//     }
//   }
//  const final = finalArr.join(' ')

//   return final;
// }
// songDecoder('AWUBWUBWUBBWUBWUBWUBC');

// let f;

// const g = function () {
//   const a = 23;
//   console.log('g');
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   console.log('h');
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g(); //46
// f(); //вернет 46, хоть f была создана даже не в ф g(), а в глобале, но ф g() - parent для f
// //reassigning f
// h();
// f();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(
    /*function that will be execited */ function () {
      console.log(`We r now boarding all ${n} passengers`);
      console.log(`There are 3 groups each with ${perGroup} passegers`);
    },
    /*will be executed after a certain time, in milisecunds */ 1000
  );
  console.log(`will start boarding in ${wait} seconds`);
};//пример closure здесь, тк setTimeout ждет 1000 милисекунд, те boardPassengers заканчивает д-е, когда чайлд только начинает
boardPassengers(180, 3);

'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}; //добавляемый объект

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngr, ...otherIngs) {
    console.log(mainIngr);
    console.log(otherIngs);
  },
  openingHours, //добавление объекта в главный
  method() {
    console.log('ursuper');
  },
  orderDelivery: function (
    {
      starterIndex = 0,
      mainIndex = 0,
      time = '20.00' /*этого нет в объекте*/,
    } /* мы начинаем destruction прямо в f*/
  ) {
    console.log(
      `the order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time}`
    );
  },
};

const stringName = '  ';
console.log(stringName.repeat(/*количество раз*/5));

// console.log(stringName.padEnd(/*desirable length*/ 25, /*чем дополнить*/ '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(123456789123456789));

// console.log('o+l+a'.split('+'));//выдаст массив с о л а
// console.log(['Ola', 'Kuchynskaya'].join(/* значок между элментами, например, ' ' */));
// stringName.toLowerCase();

// stringName.toUpperCase();

// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = '   volyas1@gmail.com   \n';
// console.log(email.trim());

// email.toLowerCase().trim();

// const priceGB = '288,98 GBR';
// const priceUS = priceGB.replace('GBR', 'USD').replace(',', '.');
// console.log(priceUS);

// const aaa = 'aaa';
// console.log(aaa.replaceAll('a', 'b'));

// console.log(stringName.startsWith('T'));
// stringName.includes(' ');
// stringName.startsWith(' ');
// stringName.endsWith(' ');

// const checkBaggaage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log(' u r not allowed');
//   } else {
//     console.log(' please ');
//   }
// };
// checkBaggaage('I have a laptop, some food, pocket knife');
// checkBaggaage('Socks and camera');
// checkBaggaage('some snacks and a gun');

//console.log(stringName.slice(/*start parameter, end parameter*/));
// console.log(stringName.slice(-2));
// const menu = new Set(['Pizza', 'Pizza', 'Suchi']); //сет получится только ['Pizza','Suchi']

// menu.size;
// menu.has('Pizza');
// menu.add('Cake');
// menu.delete('Cake');
// for (const order of menu) console.log(order); // Pizza Suchi

//Ex
//const staff = ;
// const staffUniqueNum = new Set(['Waiter', 'Chef', 'Waiter', 'Manager']).size;
// //узнаем, сколько уникальных позиций
// console.log(staffUniqueNum);

// const mapEx = new Map(); //проще всего сразу создать пустой Мар
// mapEx.set('name', 'Italy');
// mapEx.set(1, 'Firenze');
// mapEx.set('cats', ['Pizza', 'Suchi']);
// mapEx.set(true, 'we r open');
// mapEx.set(false, 'we r closed');
// const time = 19;
// mapEx.get(
//   time < 20 && time > 6 ? console.log('OPEN!)') : console.log('CLOSED!(')
// );
//mapEx.delete(1);
//console.log(mapEx);
//const entries = Object.entries(openingHours);

// const quiz = new Map([
//   ['question', 'Are u ok?'],
//   [1, 'Yes'],
//   [2, 'No'],
//   ['correct', 1],
//   [true, 'Super'],
//   [false, 'there-there'],
// ]);
// console.log(quiz);

// const objectName = {};
// const objectToMap = new Map(Object.entries(objectName));
// console.log(objectToMap);

// const answer = 2;
// console.log(quiz.get(quiz.get('correct') === answer));

// // //convert map to an array
// console.log([...quiz]);

// for (const [key, value] of Object.entries(objectName)) {
//   console.log(value);
// }
// let openStr = `We are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// //console.log(restaurant.copeningHours?.fri?.open);
// const days = ['mon', 'fri', 'sat'];
// for (const day of days) {
//   console.log(restaurant.openingHours[day]?.open);
// } //!!! if we want to use the VAR name as the PROPERTY name => use BRACKETS notation [] !!!

// console.log(restaurant.ocrder?.(0, 1) ?? 'method doesnt exist');
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// const pigs = [{ name: 'nif' }, { name: 'naf' }, { name: 'nuf' }];
// console.log(pigs[2]?.name);//nuf

// for (const item/*var*/ of menu/*array*/) console.log(item);

// for (const [i, element] of menu.entries()) {console.log(i);};

// console.log('' || 'ola'); //ola
// console.log(3 || 'ola'); //3
// console.log(0 || true); // true
// console.log(0 || undefined); //undefined- хоть и false, но дальше short circ-g делать некуда

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 1; //установили по дефолту 1 гостя
// restaurant.numGuests = 0;
// restaurant.numGuests = restaurant.numGuests ?? 10;
// console.log(restaurant.numGuests);//будет 0

// restaurant.numGuests = restaurant.numGuests ?? 10;//если restaurant.numGuests не существует, то 10

//restaurant.orderPizza('mushroom', 1,2,3,4,5);

// const add = function(...numbers) {};
// add(1,2,3,34,4,6,7,8,9);//вызов функции
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //1 2 [3,4,5]

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// const secondRest = { ...restaurant, founder: 'Ola'/*новый эл*/, name: 'Italiano Vero' /*изменили старый эл*/};
// console.log(secondRest);
// const arr = [7,8];
// const newArr = [1,2, ...arr]; //соединить массивы

// console.log(arr[0], arr[1]);
// console.log(...arr);

//let str = 'ola';
//let strstr = ();
//console.log(...str);
// const deliveryTime = restaurant.orderDelivery({
//   time : '22.30',
//   starterIndex : 2,
//   mainIndex : 2,
// });

//Mutating vars
//
// ({ a, b } = obj); // обязательно взять в скобки, тк после { JS ожидает code block
// console.log(a, b);//23, 7 (not 111, 999)

// const { name } = restaurant; //переменная будет называться как и пропертя объекта
// let { name: newName } = restaurant; //переменная будет называться иначе
// console.log(newName);
// newName = 'mimi';
// console.log(newName);
// console.log(restaurant.name);

// const {menu = [], starterMenu = []} = restaurant//проперти меню нет, стартерМеню есть
// console.log(menu, starterMenu);//меню будет пустым массивом (не undentified), starterMenu - таким же, как в объекте restaurant

//how to receive 2 return values from a function
//f-n in the object
// order: function(starterIndex,mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];}

// let [starterDish, mainDish] = restaurant.order(2, 0);
// console.log(starterDish, mainDish);

// const arr = [1,2,3];
// // const [x, ,z] = arr;
// // x = 5;
// // console.log(arr);
// // console.log(x,y,z);

// let[z, x] = arr;
// [z,x]=[x,z];
// console.log(arr);

// const nested = [2, 4, [5, 6]];
// const [h, i, [j, k]];

// const [p=1,q=1, r=q] = [8,9] //если мы не знаем длину [8,9], лучше придать какие-либо значения элементам

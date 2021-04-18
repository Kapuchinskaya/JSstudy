// // strict mode нет, тк все модули выполняются by def в стрикт варианте
// Importing module
// import {
//   addToCart,
//   totalPrice as price /*можно изменить имя */,
//   tq,
// } from './shoppingCart.js'; // ./ - значит текущую папку

// import { addToCart } from "./shoppingCart";

// // в html не забывать добавлять тип <script type="module" defer src="script.js"></script>

// addToCart('bread', 5);
// console.log(price, tq);
// // весь код из модуля, который мы импортируем (из dependence-module), будет выполнен первым!

//importing all the exports of importing module at the same time
//создаст объект , содержащий все, что мы импортируем
// import * as ShoppingCart from './shoppingCart.js';
// console.log(`Importing module`);

// ShoppingCart.addToCart('bread', 5); // при таком способе экспорта нужно работать с объектом

// add('chocolate', 4);
// add('apples', 5);
// console.log(cart);
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  //пока все выше - private, но мы return-им то, что хотим сделать public
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2.shippingCost); //undefined - нет доступа
console.log(ShoppingCart2.cart);//(2) [{…}, {…}] - есть доступ

*/

//Export

//CommonJS modules - все еще используется в NodeJs. Просто для ознакомления
//как и в es6 1 файл - 1 модуль
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

// //Import

// const { addToCart } = require('./shoppingCart.js')

//import cloneDeep from './node_modules/lodash-es/cloneDeep';
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

state.user.loggedIn = false;
console.log(stateClone);
console.log(state);

const test = cloneDeep(state);
console.log('state: ' + test);

if (module.hot) {
  module.hot.accept();
}

Promise.resolve('Test').then(x => console.log(x));
import 'core-js/stable';

//
import 'regenerator-runtime/'

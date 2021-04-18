'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //обнулили то, что было до добавления верных мувментс

  const movs = sort /*if is true*/
    ? movements
        .slice() /*создаем копию*/
        .sort((a, b) => a - b)
    : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //нужно создать html, который красиво выглядит => идем в html (удобно в консоли на elements)
    //=> для html эл-та используем темпейт литерал ``, тк оч удобно делить на строки
    const html = `
<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">3 days ago</div>
  <div class="movements__value">${mov}</div>
</div>
`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes} EUR`;
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outcomes)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  //display movements
  displayMovements(currentAccount.movements);

  //display balance
  calcDisplayBalance(currentAccount);

  //displaysummary
  calcDisplaySummary(currentAccount);
};
//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //dusplay ui and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI();

    //display movements
    displayMovements(currentAccount.movements);

    //display balance
    calcDisplayBalance(currentAccount);

    //displaysummary
    calcDisplaySummary(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  //checking whether there is enough money
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //Delete account
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////

// //Coding challenge 1
// // const julia = [3, 5, 2, 12, 7];
// // const kate = [4, 1, 15, 8, 3];
// const julia = [9, 16, 6, 8, 3];
// const kate = [10, 5, 6, 1, 4];
// let juliaCopy = julia.slice();
// juliaCopy.splice(-2);
// juliaCopy.shift();

// const girls = juliaCopy.concat(kate);
// girls.forEach(function (dogs, i) {
//   dogs >= 3
//     ? console.log(`${i}, ${dogs} y.o. is a Big boy`)
//     : console.log(`${i}, ${dogs} y.o. is just a Puppy`);
// });

// const eurToUsd = 1.1;
// const movementsToUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsToUsd = movements.map(mov, i, arr){};
// console.log(movementsToUsd);

// const deposits = movements.filter(function (mov) {
//   return mov > 0; //условие фильтрации
// });
// console.log(deposits); //в новом массиве будут только положительные значения

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   //accumulator~snowbol на 1 месте, а потом curr, i и arr как обычно
//   return acc + cur; //в каждой итерации мы возвращаем апдетед акк + новое каррент валью
// }, /*initial value of acc */ 0);

//maximum value of arrays' elements
// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : (acc = mov)),
//   movements[0]
// );
// console.log(max);
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     mov * eurToUsd;
//   })//как продебажить цепную структуру - не забывать, что есть доступ к массиву!
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const anyDeposits = movements.every(mov => mov > -3000);
// console.log(anyDeposits);

// //separate callback
// const deposit = mov => mov > 0;
// console.log(movements.every(deposit));

// const arr = [[[1, 2], 3], [4, 5, 6], 7, 8];
// console.log(arr.flat(2)); //  -  [1, 2, 3, 4, 5, 6, 7, 8]
// //flat
// const overallBalance /* allAccMovements */ = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// //flatMap
// const overallBalance2 /* allAccMovements */ = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const owners = ['Jonas', 'Zach', 'Martha', 'Adam']; //["Adam", "Jonas", "Martha", "Zach"]
console.log(movements.sort());
console.log(owners.sort());

//return что-нибудь < 0, A, B - keep order
//return > 0, A, B - switch order
//Ascending
movements.sort((a, b /* current and next parameter */) => a - b);
//тк если а>b, это будет +-число
console.log(movements);
//Descending
movements.sort((a, b /* current and next parameter */) => b - a);
console.log(movements);

//manually
console.log([1, 2, 3]);
console.log(new Array(1, 2, 3));

//programmatically
const x = new Array(7); //[empty × 7]
//нельзя применить никаких методов (example)...
console.log(x.map(() => 5)); //[empty × 7] - ничего полезного!
//кроме fill
//console.log(x.fill(1)); //все будут 1
//можно указывать, с какого элемента заполнять
console.log(x.fill(1, 3, 5)); // [empty × 3, 1, 1, empty × 2]
//можно использовать не только на empty arrays
const y = [1, 2, 3, 4, 5, 6, 7];
console.log(y.fill(23, 4, 6)); //[1, 2, 3, 4, 23, 23, 7]

//Array.from() function
const z = Array.from(
  { length: 7 },
  /*map method*/ (/*no arguments, no current element, no current index - nothing! */) =>
    1 // [1,1,1,1,1,1,1]
);

const zz = Array.from(
  { length: 7 },
  /*map method*/ (/*no current element, no current index*/ cur, i) => i + 1 // [1,1,1,1,1,1,1]
); //1234567

const random = Array.from(
  {
    length: 100,
  },
  () => Math.trunc(Math.random() * 100) + 1
);
console.log(random);
const checkcc = new Set(random);
console.log(checkcc);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  console.log(movementsUI.map(el => el.textContent.replace('', 'EUR')));
});

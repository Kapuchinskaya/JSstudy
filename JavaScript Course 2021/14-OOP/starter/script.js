'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// //разница между вызовом обычной ф и constructor f - с использованием сова new
// const ola = new Person('Ola', 1992); //получим объект с данными параметрами

// //вызов проходит 4 шага: (только благодаря тому, что мы вызываем Ф с помощью new operator-a)
// //1. new {} is created - пустой объект
// //2. function is called, "this" = {} (this будет равен этому пустому объекту)
// //3. {} linked tp prototype
// //4. f automatically renurns {}

// // console.log(ola instanceof Person); //можем узнать, был ли создан объект оля с пом Person - constructor f

// //Prototypes
// //добавляем метод

// // console.log(Person.prototype); //{constructor: ƒ} - calcAge: ƒ () + constructor + proto

// Person.prototype.calcAge = function () {
//   console.log(2087 - this.birthYear);
// };

// //теперь мы можем
// ola.calcAge(); //сработает, но сам объект не изменится

// // console.log(ola.__proto__ === Person.prototype); //true
// // console.log(Person.prototype.isPrototypeOf(ola)); //true

// //мы можем также добавлять property (не только методы) с помощью prototype
// // Person.prototype.species = 'Woman';
// // console.log(ola.species); //будет вуман
// // console.log(ola); //не изменится (все те же bDay + name)
// // //проверка
// // console.log(ola.hasOwnProperty('firstName')); // true, species - false

// // console.log(ola.__proto__);//здесь будет species: woman, calcage : f и constructor : f
// // console.log(ola.__proto__.__proto__);//

// // console.dir(Person.prototype.constructor);//с именем ф -  ƒ Person(firstName, birthYear)
// // console.log(Person.prototype.constructor);

// //arr.__proto__ - будут все методы, доступные к массиву
// // console.log(arr.__proto__ === Array.prototype); //true

// // const arr = [3, 3, 6, 6, 9, 9];
// //использование prototype в создании новых методов, например, для массивов
// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique()); //[3, 6, 9]

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log(this.make, this.speed + 10);
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.make, this.speed);
// };

// // Car.prototype.breakW = function () {
// //   console.log(this.make, this.speed - 5);
// // };
// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.make, this.speed);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.break();

// // mercedes.accelerate();
// // mercedes.break();

// /*
//   calcAge() {
//     2094 - this.birthYear;
//   }

//   get age() {
//     return 2020 - this.birthYear;
//   }
// */

// // SET A PROPERTY THAT ALREADY EXISTS
// class PersonCl {
//   //1м делом добавляем конструктор-метод: работает как конструктор ф, но здесь это метод сугубо этого класса
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //fullName - это проперти в этом классе, а также мы делаем такой сеттер
//   //теперь метод сеттера будет выполняться каждый раз, когда мы будет устанавливать fullName как проперти
//   //   set fullName(name) {
//   //     if (name.includes(' ')) this._fullName = name;
//   //     else alert('not a full name');
//   //     //если мы хотим дать сеттеру такое же имя, как у проперти, в самом методе перед названием этой проперти указать _ (так договорились)
//   //     //тогда мы больше не сможем назначать fullName (пропертя станет именоваться _fullName)
//   //     //и тогда нам нужно сделать гетер!!!
//   //   }
//   //   get fullName() {
//   //     //getter и сеттер могут иметь 1 имя
//   //     return this._fullName;
//   //   }

//   //static method (ОСТАЛЬНЫЕ- INSTANCE METHODS (как calcAge, напр))
//   static hey() {
//     console.log(`Hey, ${this.firstName}`);
//     console.log(this);
//   }
// }

// const kira = new PersonCl('Kira', 2018);

// // PersonCl.prototype.greet = function () {
// //   console.log(`hi, ${this.firstName}`);
// // }; // и вызвать, например, console.log(kira.greet());

// // const acc = {
// //   owner: 'Ola',
// //   movements: [100, 200, 300],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },

// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // //getter - полезно, когда хотим получить что-то как проперти, но нужно сделать некоторые расчеты предварительно
// // console.log(
// //   acc.latest /*используем геттер как проперти, не как функцию (метод)*/
// // );

// // acc.latest = 50;//можем устанавливать как обычную пропертю (без вызова функции!!!)
// // console.log(acc.movements); //[...,50]

// Array.from(document.querySelectorAll('hq')); // converts any array-like structure to real array

// PersonCl.hey = function () {
//   console.log('Hey there');
// }; //этот метод не наследуется (not inherited) => он записывается в конструктор, не в proto

// PersonCl.hey(); //выведет в консоль текст

// console.log(kira);

// const PersonProto = {
//   calcAge() {
//     console.log(2094 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },//это не конструктор f - нет слова new!!!, просто чтоб не прописывать руками каждый раз при создании нового объекта
// }; //допустим, это все методы, которые мы хотим, чтоб созданные новые объекты унаследовали

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1992)//будет работать как обычно

// const steven = Object.create(PersonProto); //получим новый объект, linked to a prototype "PersonProto"
// //сейчас steven - {};

// steven.name = 'Steven';
// steven.birthYear = 2002;
// console.log(steven); // {name: "Steven", birthYear: 2002}
// console.log(steven.calcAge()); //92

/* Coding challenge 2 */

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.make, this.speed);
//   }
//   break() {
//     this.speed -= 5;
//     console.log(this.make, this.speed);
//   }

//   get speedUS() {
//     this.speed = this.speed / 1.6;
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//     return this.speed
//   }
// }

// const mini = new Car('mini', 120);
// console.log(mini.make, mini.speedUS);
// mini.accelerate();
// mini.accelerate();
// mini.break();
// mini.break();
// mini.speedUS = 50;

// console.log(mini.speed);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2087 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear); //см видео 213 8 мин
//   this.course = course;
// };

// //!!! чтобы Stuent.object inherit from Person.object
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName}, and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'CS');
// console.log(mike);
// mike.introduce();
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;

// console.dir(mike instanceof Person);

// console.dir(mike instanceof Student);

/* Coding challenge 3 */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.make, this.speed);
// };
// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.make, this.speed);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(this.make, this.speed, this.charge);
// };

// const mini = new EV('Mini', 100, 90);
// mini.chargeBattery(10);
// mini.accelerate();
// mini.accelerate();
// mini.accelerate();
// console.log(mini);

// class PersonCl {
//   //1м делом добавляем конструктор-метод: работает как конструктор ф, но здесь это метод сугубо этого класса
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}`);
//   }

//   get age() {
//     return 2020 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert('not a full name');
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //родительские пар-ры + собственные
//     //Always need to happen 1st
//     super(fullName, birthYear); //не нужно пользоваться call-ом
//     this.couse = course; // но если у нас не будет отдельных пропертей, то и вообще конструктора не надо - она будет вызвана автоматически с родительскими пар-рами
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName}, and I study ${this.course}`);
//   }

// calcAge(){
//   console.log(`Im ${2020-this.birthYear}, but feel 5 years younger`);
// }
// }
// const martha = new StudentCl('Martha Martha', 2012, 'CS');

// const PersonProto = {
//   calcAge() {
//     console.log(2094 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto); //чтоб поддержать chain

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// //создание метода для студентов
// StudentProto.introduce = function () {
//   console.log(`hi,${this.firstName}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Anton', 1993, 'CS');

// jay.introduce();
// jay.calcAge();

//Public fields
//Private fields
//Public methods
//Private methods

// class Account {
//   //THIS IS HOW WE DEFINE PUBLIC FIELDS (instances)
//   locale = navigator.language; // в конце ;. Выглядит как переменная, но ее не надо объявлять (let/const)

//   //они будут во всех instances, они не в прототипе, в отличие от методов
//   //все методы попадут в прототип

//   //THIS IS HOW WE DEFINE PRIVATE FIELDS (instances) - really trully not accessible from the outside
//   #movements = []; //вероятно, что пока только Google Chrome это поддерживает
//   #pin; //we can not define a field in the constructor => чтоб сделать private, нужно это делать вне метода => делаем в шапке и не приравниваем ни к чему

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     //Protected property
//     this.#pin = pin;

//     console.log(`Thank you for opening an account, ${owner}`);
//   }

//   //Public interface (of our object)
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   //ex. of abstraction - method abstracts the fact that withdrawal is a negative movement
//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }

//   _approveLoan(val) {
//     true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan approved');
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// //можем добавлять в созданный массив значения, но НЕ НУЖНО!
// //СЛЕДУЕТ СОЗДАВАТЬ МЕТОДЫ ВНУТРИ!!!
// // acc1.movements.push(250);
// // acc1.movements.push(-140);

// acc1.deposit(250);
// acc1.withdrawal(140);

// acc1.getMovements();

// acc1.deposit(3000).deposit(500).withdrawal(35);
// console.log(acc1.getMovements());

/* Coding challenge 4 */

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.make, this.speed);
//   }
//   break() {
//     this.speed -= 5;
//     console.log(this.make, this.speed);
//     return this;
//   }
// }

// class EVCl extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }
//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     console.log(this.make, this.#charge);
//     return this;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(this.make, this.speed, this.#charge);
//     return this;
//   }
// }

// const rivian = new EVCl('Rivian', 120, 23);
// //rivian.chargeBattery(90).accelerate().break().accelerate().accelerate();
// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .break()
//   .chargeBattery(50)
//   .accelerate();

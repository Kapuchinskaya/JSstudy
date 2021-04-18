'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>
   `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// //AJAX call country 1
// const getCountryAndNeighbourData = function (country) {
//   const request = new XMLHttpRequest(); //old school way of using AJAX
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText); //обрабатываем данные

//     //Render country 1
//     renderCountry(data);

//Get neighbor country (2)
// const [neighbour] = data.borders;
// if (!neighbour) return;
// console.log(neighbour);

// //AJAX call country 2
// const request2 = new XMLHttpRequest(); //old school way of using AJAX
// request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// request2.send();

// request2.addEventListener('load', function () {
//   const data2 = JSON.parse(this.responseText);
//   renderCountry(data2);
// });

//     const neighbours = data.borders;
//     neighbours.forEach(element => {
//       const requestNeighbour = new XMLHttpRequest();
//       requestNeighbour.open(
//         'GET',
//         `https://restcountries.eu/rest/v2/alpha/${element}`
//       );
//       requestNeighbour.send();

//       requestNeighbour.addEventListener('load', function () {
//         const dataNeighbour = JSON.parse(this.responseText);
//         renderCountry(dataNeighbour, 'neighbour');
//       });
//     });
//   });
// };

// getCountryAndNeighbourData('usa');

// setTimeout(() => {
//   console.log('1 sec');
//   setTimeout(() => {
//     console.log('2 sec');
//     setTimeout(() => {
//       console.log('3 sec');
//       setTimeout(() => {
//         console.log('4 sec');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = fetch('https://restcountries.eu/rest/v2/name/belarus');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`{err}`);
//       renderError(`smth went wrong - ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); /*this callback f will be called whatever happens with the promise (fullfilled/rejected)*/
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');
//       //Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`{err}`);
//       renderError(`smth went wrong - ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); /*this callback f will be called whatever happens with the promise (fullfilled/rejected)*/
// };

// btn.addEventListener('click', function () {
//   getCountryData('Australia');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. 
Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   /*curl 'https://geocode.xyz/51.50354,-0.12768?geoit=json' */

//   fetch(`https://geocode.xyz/52.508,13.381?geoit=json`).then(response =>
//     console.log(response)
//   );
// };

// whereAmI(19.037, 72.873);

// //fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)

// console.log('Test start'); //1
// setTimeout(() => console.log('0 sec timer'), 0); //4
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //3
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 1; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end'); //2

/*
Порядок загрузки: 1 4 3 2
Причичны:
Any top-level code (code outside of any callback) will run 1st - 1 и 4 станут 1 и 2

*/

// const lotteryPromise = new Promise(
//   /*executor function*/ function (
//     resolve,
//     reject /* обязательные параметры - функции*/
//   ) {
//     /*здесь будет async behavior that we are trying to handle with a promise
// должна произвести value - the future value of the promise
// */
//     console.log('Lottery draw is happening');
//     setTimeout(function () {
//       if (Math.random() >= 0.5) {
//         resolve('You win'); /* это фактически fullfilled promise */
//       } else {
//         reject(new Error('You lost'));
//       }
//     }, 2000);
//   }
// );

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); // how we consume the promise

// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (
//     resolve /*it's impossible for the timer to fail => we don't need reject */
//   ) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// //consuming the promise
// wait(2)
//   .then((/*we receive no value */) => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1); //creating a chain of async behaviour
//   })
//   .then(() => console.log(`I waited for another 1`));

// /* static methods of a promise constructor, в к-е мы можем поместить resolved/rejected value */
// Promise.resolve('You win').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
//не работает API

// const whereAmI = async function ( country) {
//   try {
//     const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
//     const data = await res.json(); //тк res.json возвращает промис, раньше нужно было return + .then()
//     renderCountry(data[0]);
//     return `You are in ${country}`;
//   } catch (err) {
//     //  console.error(err);
//     renderError(`smth went wrong, ${err.message}`);
//   }
// };

// whereAmI('poland')
//   .then(anyVar => console.log(anyVar))
//   .catch(err => console.error(`${err.message}`))
//   .finally(() => console.log('3: finished getting location'));

// (async function () {
//   try {
//     const countryName = await whereAmI('poland');
//     console.log(countryName);
//   } catch (err) {
//     console.error(`${err.message}`);
//   }
//   console.log('3: finished getting location');
// })();

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`Country not found (${response.status})`);
//     return response.json();
//   });
// };
//3 ф не зависят друг от друга, но будут загружаться по очереди (тк есть await)
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(
//       `https://restcountries.eu/rest/v2/name/${c1}`
//     );
//     const [data2] = await getJSON(
//       `https://restcountries.eu/rest/v2/name/${c2}`
//     );
//     const [data3] = await getJSON(
//       `https://restcountries.eu/rest/v2/name/${c3}`
//     );
//     console.log(data1.capital, data2.capital, data3.capital);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// get3Countries('usa', 'italy', 'switzerland');

//Promise.all combinator f!!! -
//takes an array of promises & returns an array
//теперь ф будут загружаться параллельно
// const data = Promise.all([
//   getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//   getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//   getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
// ]);
// console.log(data.map(d => d[0].capital));

//Promise.race - receives an array of promises and returns a promise =>
//this returned promise is setteled asa 1 of the input promises settles

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/china`),
    getJSON(`https://restcountries.eu/rest/v2/name/spain`),
    getJSON(`https://restcountries.eu/rest/v2/name/belarus`),
  ]);
  console.log(res[0]);
})();

// Promise.allSettled
// Promise.settled() => will return an array of all the settled promises.
// в отличие от Promise.all NEVER short circuits

Promise.any([
 Promise.resolve('Ok'),
  Promise.reject('not Ok'),
  Promise.resolve('Ok'),
  Promise.reject('not Ok'),
]).then(res => console.log(res));
//(4) [{…}, {…}, {…}, {…}]
// 0: {status: "fulfilled", value: "Ok"}
// 1: {status: "rejected", reason: "not Ok"}
// 2: {status: "fulfilled", value: "Ok"}
// 3: {status: "rejected", reason: "not Ok"}

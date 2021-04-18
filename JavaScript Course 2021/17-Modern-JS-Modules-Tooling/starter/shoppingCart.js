//Exporting module
console.log(`Exporting module`);

const shippingCost = 10;
export const cart = [];
//all top-level vars (как сверху) r private => нельзя будет эти переменные вызывать в модуле,
//в который импортировали этот модуль
//нужно отдельно экспортировать с помощью export-a: бывает named & default exports

//ниже - пример named export.
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

//можно много named exports
const totalPrice = 237;
const totalQuantity = 23;

export {
  totalPrice,
  totalQuantity as tq /* можно изменить имя. нужно делать только в 1 месте */,
};

//default exporting - иными словами exporting a value - необходимо указывать то, что хочешь экспортировать, имен нет
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };
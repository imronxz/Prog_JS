// TODO Exporting module
console.log('Exporting module');

const shoppingCost = 10;
export const cart = [];
const totalPrice = 237;
const totalQuantity = 23;

// TODO Exporting module version 1
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// TODO Exporting module version 2
export { shoppingCost, totalPrice, totalQuantity as TQ };

// TODO Exporting default module version 1
export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

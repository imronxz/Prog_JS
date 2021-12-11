/* TODO create a module pattern
const ShoppingCart2: {
    addToCart: (product: any, quantity: any) => void;
    cart: any[];
    totalPrice: number;
    totalQuantity: number;
}
*/
const ShoppingCart2 = (() => {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = (product, quantity) => {
    //     if (quantity > 0) {
    //       console.log(`${quantity} ${product} available`);
    //     } else {
    //       console.log(`Out of stock`);
    //     }
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('Coffee', 2);
ShoppingCart2.addToCart('PIzza', 4);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined

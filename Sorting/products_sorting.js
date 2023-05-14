let products = [
  { product: "sour patch", price: 5.79 },
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Starburst", price: 3.79 },
];

function printProductList(products) {
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].product, products[i].price);
  }
}

products.sort((a, b) => {
  if (a.product < b.product) {
    return -1;
  } else if (a.product == b.product) {
    return 0;
  } else {
    return 1;
  }
});

printProductList(products);
console.log("----------------------");

products.sort((a, b) => a.price - b.price);
printProductList(products);

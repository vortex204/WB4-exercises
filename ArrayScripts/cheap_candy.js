let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

function printCandy(candy) {
  console.log(candy.product, candy.price);
}

function cheapCandy(priceLimit) {
  for (let i = 0; i < products.length; i++) {
    candy = products[i];
    if (candy.price <= priceLimit) {
      printCandy(candy);
    }
  }
}

function candySearch(text) {
  for (let i = 0; i < products.length; i++) {
    candy = products[i];
    if (candy.product.indexOf(text) > -1) {
      printCandy(candy);
    }
  }
}
function hasCandy(text) {
  for (let i = 0; i < products.length; i++) {
    candy = products[i];
    if (candy.product.indexOf(text) > -1) {
      return true;
    }
  }
}
console.log(`\nWhich candies costs less than $4.00?`);
cheapCandy(4);

console.log(`\nWhich candies has "M&M" its name?`);
candySearch("M&M");

console.log(`\nDo we carry "Swedish Fish"?`);
console.log(hasCandy("Swedish Fish") ? "YES" : "NO");

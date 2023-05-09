let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Tea", price: 2.79 },
];

tax = 0.08;
tip = 0.18;

let subTotal = 0;
let total = 0;

for (i = 0; i < lunch.length; i++) {
  subTotal += lunch[i].price;
}
tax = subTotal * tax;
with_tax = subTotal + tax;
tip = with_tax * tip;
total = with_tax + tip;
console.log(`
SUBTOTAL: $${subTotal.toFixed(2)}
TAX:      $${tax.toFixed(2)}
TIP:      $${tip.toFixed(2)}
=================================
TOTAL:    $${total.toFixed(2)} 
`);

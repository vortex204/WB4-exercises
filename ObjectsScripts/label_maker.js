let myInfo = {
  name: "Jeffrey Espinal",
  address: "121 Main Street",
  city: "New York City",
  state: "NY",
  zip: "10001",
};

function printContact(info) {
  console.log(
    `${info.name} \n${info.address} \n${info.city}, ${info.state} ${info.zip}`
  );
}

printContact(myInfo);

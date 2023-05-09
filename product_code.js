function parsePartCode(partCode) {
  let partInfo = {};
  let parts = partCode.split(":");
  partInfo.supplierCode = parts[0];
  let productParts = parts[1].split("-");
  partInfo.productNumber = productParts[0];
  partInfo.size = productParts[1];
  return partInfo;
}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log(
  "Supplier: " +
    part1.supplierCode +
    " Product Number: " +
    part1.productNumber +
    " Size: " +
    part1.size
);

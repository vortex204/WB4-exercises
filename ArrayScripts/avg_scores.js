let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(list) {
  total = 0;
  for (i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total / list.length;
}

mine = getAverage(myScores);
yours = getAverage(yourScores);

console.log("Mine", mine);
console.log("Yours", yours);

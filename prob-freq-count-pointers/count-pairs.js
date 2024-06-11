function arrToSet(arr) {
  const newSet = new Set();
  for (let num of arr) {
    newSet.add(num);
  }
  return newSet;
}

function countPairs(arr, sum) {
  let counter = 0;
  const arrSet = arrToSet(arr);
  for (let num of arr) {
    // if sum-num=num ignore this loop once because there is no duplication in the array
    if (sum - num === num) {
      counter = counter;
    } else if (arrSet.has(sum - num)) {
      counter++;
    }
  }
  // counter is divided by 2 because each pair has two found numbers in the for loop
  return counter / 2;
}

module.exports = countPairs;

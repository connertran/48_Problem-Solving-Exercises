// add whatever parameters you deem necessary
function separatePositive(arr) {
  const negativeArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      const num = arr.splice(i, 1);
      negativeArr.push(num[0]);
    }
  }
  for (let num of negativeArr) {
    arr.push(num);
  }
  return arr;
}

module.exports = separatePositive;

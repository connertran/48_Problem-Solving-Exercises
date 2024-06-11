function countAvg(num1, num2) {
  return (num1 + num2) / 2;
}
// add whatever parameters you deem necessary
function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (countAvg(arr[start], arr[end]) === avg) return true;
    if (countAvg(arr[start], arr[end]) < avg) start++;
    if (countAvg(arr[start], arr[end]) > avg) end--;
  }
  return false;
}

module.exports = averagePair;

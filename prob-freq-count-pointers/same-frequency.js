function createFrequencyCounter(num) {
  let frequencies = {};
  for (let digit of num.toString()) {
    let charCount = frequencies[digit] || 0;
    frequencies[digit] = charCount + 1;
  }
  return frequencies;
}
// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const num1Obj = createFrequencyCounter(num1);
  const num2Obj = createFrequencyCounter(num2);
  for (let digit of num1.toString()) {
    if (num1Obj[digit] !== num2Obj[digit]) {
      return false;
    }
  }
  return true;
}

module.exports = sameFrequency;

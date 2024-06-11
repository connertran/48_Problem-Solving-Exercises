function createFrequencyCounter(word) {
  let frequencies = {};
  for (let char of word) {
    let charCount = frequencies[char] || 0;
    frequencies[char] = charCount + 1;
  }
  return frequencies;
}

// add whatever parameters you deem necessary
function constructNote(str1, str2) {
  if (str1 && !str2) return false;
  const charCountObj1 = createFrequencyCounter(str1);
  const charCountObj2 = createFrequencyCounter(str2);
  for (let char of str1) {
    if (charCountObj1[char] > charCountObj2[char]) return false;
  }
  return true;
}

module.exports = constructNote;

/**
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 *
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

const duplicateCount = (text) => {
  const arr = text.toLowerCase().split('');

  const dubble = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc;
  }, {});
  const filteredCount = Object.entries(dubble).filter(([key, value]) => value > 1).length //?

  return filteredCount;
}

duplicateCount('aabBcde') //?

// Best practikse
function duplicateCountBest(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

duplicateCountBest('aabbcde') //?
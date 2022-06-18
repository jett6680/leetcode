var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      }
    }
  }
  return []
};

var twoSum = function (numbers, target) {
  const map = new Map()

  for(let i = 0; i< numbers.length; i++) {
    map.set(numbers[i], i)
  }

  for(let i = 0; i< numbers.length; i++) {
    const reduceValue = target - numbers[i]
    const mapValue = map.get(reduceValue)
    if(mapValue && mapValue !== i) {
      return [mapValue, i]
    }
  }

  return []
}
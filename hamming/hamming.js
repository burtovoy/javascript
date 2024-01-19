export const compute = (first, second) => {
  const firstArr = first.split('');
  const secondArr = second.split('');
  if (firstArr.length === secondArr.length) {
    const newArr = [];
    firstArr.forEach(function(item) {
      if (firstArr[i] !== secondArr[i]) {
        newArr.push(firstArr[i]);
      }
    })
    return newArr.length
  }
  throw new Error('strands must be of equal length');
};

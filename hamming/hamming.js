export const compute = (first, second) => {
  const firstArr = first.split('');
  const secondArr = second.split('');
  if (firstArr.length === secondArr.length) {
    const newArr = [];
    let i = -1
    firstArr.forEach(function(item) {
      i += 1
      if (item !== secondArr[i]) {
        newArr.push(item);
      }
    })
    return newArr.length
  }
  throw new Error('strands must be of equal length');
};

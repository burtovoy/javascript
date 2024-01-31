//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (int) => {
  if (int.length > 1) {
    const newArr = [];
    let secondArr = [];
    let maxLength = 0;
    int.forEach((ar) => {
      if (ar.length > maxLength) {
        maxLength = ar.length;
      }
    });
    for (let i = 0; i < maxLength; i += 1) {
      for (let j = int.length - 1; j >= 0; j -= 1) {
        if (!(int[j][i] === undefined && secondArr.length === 0)) {
          secondArr.unshift(int[j][i] ?? ' ');
        }
      }
      newArr.push(secondArr.join(''));
      secondArr = [];
    }
    return newArr;
  }
  if (int.length === 1) {
    return int[0].split('');
  }
  return int;
};


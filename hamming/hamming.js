//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (str1, str2) => {
  let count = 0;

  if (str1.length === str2.length) { 
    for (let i = 0; i < str1.length; i++) {
      str1[i] !== str2[i] ? count++ : count;
    }
  } else {
    throw new Error('strands must be of equal length');
  }

  return count;

};

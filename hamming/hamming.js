//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function compute(str1, str2) {
   if(str1.length !== str2.length) {
    throw new Error('strands must be of equal length');
   }
   let sum = 0;
   if(str1.length === str2.length) {
    for(let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) {
        sum;
      } else {
        if(str1[i] !== str2[i]) {
          sum += 1;
        }
      }
    }
    return sum;
   }
  }

compute('G', 'G');

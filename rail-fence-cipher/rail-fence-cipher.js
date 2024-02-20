//
// This is only a SKELETON file for the 'str Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const encode = (string, railsCount) => {
  const rails = Array(railsCount).fill('');
  let rail = 0;
  let reverse = false;
  for (const char in string) {
    rails[rail] += string[char];
    if (!reverse) {
      rail += 1;
    } else if (reverse) {
      rail -= 1;
    }
    if (rail === railsCount - 1 || rail === 0) {
      reverse = !reverse;
    }
  }
  return rails.join('');
};


export const decode = (string, railsCount) => {
  const rails = Array(railsCount).fill('');
  let decoded = '';
  let rail = 0;
  let reverse = false;
  for (const char in string) {
    rails[rail] += '*';
    if (!reverse) {
      rail += 1;
    } else if (reverse) {
      rail -= 1;
    }
    if (rail === railsCount - 1 || rail === 0) {
      reverse = !reverse;
    }
  }
  let charIndex = 0;
  for (const rail in rails) {
    const { length } = rails[rail];
    rails[rail] = string.slice(charIndex, charIndex + length);
    charIndex += length;
  }
  rail = 0;
  reverse = false;
  for (const char in string) {
    decoded += rails[rail].charAt(0);
    rails[rail] = rails[rail].slice(1);
    if (!reverse) {
      rail += 1;
    } else if (reverse) {
      rail -= 1;
    }
    if (rail === railsCount - 1 || rail === 0) {
      reverse = !reverse;
    }
  }
  return decoded;
};
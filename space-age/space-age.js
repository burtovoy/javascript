//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const earthTime = 60 * 60 * 24 * 365.25;

  switch (planet) {
    case 'earth':
      return +(seconds / earthTime / 1).toFixed(2);

    case 'mercury':
      return +(seconds / earthTime /  0.2408467).toFixed(2);

    case 'venus':
      return +(seconds / earthTime / 0.61519726).toFixed(2);

    case 'mars':
      return +(seconds / earthTime / 1.8808158).toFixed(2);

    case 'jupiter':
      return +(seconds / earthTime / 11.862615).toFixed(2);

    case 'saturn':
      return +(seconds / earthTime / 29.447498).toFixed(2);

    case 'uranus':
      return +(seconds / earthTime / 84.016846).toFixed(2);

    case 'neptune':
      return +(seconds / earthTime / 164.79132).toFixed(2);
  };
};
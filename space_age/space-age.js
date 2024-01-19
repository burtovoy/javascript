export const age = (planet, seconds) => {
  let planetAge = 0;
  planet = planet.toLowerCase()
  if (planet === 'earth') {
    planetAge = seconds / 31557600;
  } else if (planet === 'mercury') {
    planetAge = seconds / (31557600 * 0.2408467);
  } else if (planet === 'venus') {
    planetAge = seconds / (31557600 * 0.61519726);
  } else if (planet === 'mars') {
    planetAge = seconds / (31557600 * 1.8808158);
  } else if (planet === 'jupiter') {
    planetAge = seconds / (31557600 * 11.862615);
  } else if (planet === 'saturn') {
    planetAge = seconds / (31557600 * 29.447498);
  } else if (planet === 'uranus') {
    planetAge = seconds / (31557600 * 84.016846);
  } else if (planet === 'neptune') {
    planetAge = seconds / (31557600 * 164.79132);
  }
  planetAge = Number(planetAge.toFixed(2));
  return planetAge;
};

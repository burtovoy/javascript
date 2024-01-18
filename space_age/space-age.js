export const age = (planet, seconds) => {
  let planetAge = 0;
  if (planet.toLowerCase() === 'earth') {
    planetAge = seconds / 31557600;
  } else if (planet.toLowerCase() === 'mercury') {
    planetAge = seconds / (31557600 * 0.2408467);
  } else if (planet.toLowerCase() === 'venus') {
    planetAge = seconds / (31557600 * 0.61519726);
  } else if (planet.toLowerCase() === 'mars') {
    planetAge = seconds / (31557600 * 1.8808158);
  } else if (planet.toLowerCase() === 'jupiter') {
    planetAge = seconds / (31557600 * 11.862615);
  } else if (planet.toLowerCase() === 'saturn') {
    planetAge = seconds / (31557600 * 29.447498);
  } else if (planet.toLowerCase() === 'uranus') {
    planetAge = seconds / (31557600 * 84.016846);
  } else if (planet.toLowerCase() === 'neptune') {
    planetAge = seconds / (31557600 * 164.79132);
  } else {
    console.log('try again');
  }
  planetAge = Number(planetAge.toFixed(2));
  return planetAge;
};

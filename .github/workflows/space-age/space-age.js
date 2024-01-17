//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, actualAge) => {
  const earthYear = 31557600;

  const planetsTime  = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth':1,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132,
  }
  const map = new Map(Object.entries(planetsTime));
  return ((actualAge / (earthYear * (map.get(planet)))).toFixed(2)*1)
};
console.log(age())

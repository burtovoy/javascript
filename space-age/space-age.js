//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export function age (planet, sec) {  
  let yearPlanet = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.00,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };
  const earth1 = 31557600;
  let res = sec / (yearPlanet[planet] * earth1);
  return parseFloat(res.toFixed(2));  
}
age('mercury', 5000000000);



// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
alphabet = alphabet.split('');
const randomIndex = Math.floor(Math.random() * alphabet.length);
const usedNames = [];
const robots = {};
export class Robot {
  #name;

  constructor() {
    this.#name = generateRandomName();
  }

  get name() {
    return this.#name;
  }

  reset() {
    this.#name = generateRandomName();
  }
}
function generateRandomName() {
  let isValid = false;
  while (isValid === false) {
    const letters = [randomChar(), randomChar()].join('');
    let numbers = randomNum(0, 999);
    numbers = numbers < 100 ? "0" +numbers  : numbers;
    const randomName = letters.concat(numbers);
    if (isNameAvailable(randomName)) {
      isValid = true;
      robots[randomName] = true;
      return randomName;
    }
  }
}
function isNameAvailable(robotName) {
  return !robots.hasOwnProperty(robotName);
}
function randomNum(from = 0, to = 0) {
  return Math.floor(Math.random() * to - from) + from;
}
function randomChar() {
  return String.fromCharCode(65 + randomNum(0, 25));
}
Robot.releaseNames = () => {};


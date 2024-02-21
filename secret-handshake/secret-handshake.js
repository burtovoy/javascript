//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  let actions = ['jump', 'close your eyes', 'double blink', 'wink']
  let arr = []
  let newArr = []
  let binary = num.toString(2).split('')
  for (let i = 0; i < 5 - binary.length; i += 1){
arr.push('0')
  }
 arr = arr.concat(binary)
 arr.forEach((number, index) => {
if (arr[0] === '1' && number === '1' && index !== 0){
newArr.push(actions[index-1])
} else if (arr[0] === '0' && number === '1' && index !== 0){
  newArr.unshift(actions[index-1])
}
 })
 return newArr
};

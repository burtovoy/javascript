//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (original, final) => {
    if (original.length !== final.length) {
        throw new Error('strands must be of equal length')
    }
    let counter = 0;
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== final[i]) {
            counter += 1;
        }
    }
    return counter

};

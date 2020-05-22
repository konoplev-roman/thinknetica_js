/**
 * Analog of the 'map' method
 * The 'reduce' method is used
 *
 * For example, each element of the array is multiplied by 2
 */
const analogMap = [0, 1, 2, 3, 4].reduce((array, value) => {
    array.push(value * 2);
    return array;
}, []);

console.log(analogMap);

/**
 * Analog of the 'filter' method
 * The 'reduce' method is used
 *
 * For example, a filter for even array elements is used
 */
const analogFilter = [0, 1, 2, 3, 4].reduce((array, value) => {
    if (value % 2 === 0) {
        array.push(value);
    }
    return array;
}, []);

console.log(analogFilter);

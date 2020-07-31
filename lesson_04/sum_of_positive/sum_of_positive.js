/**
 * Returns sum and number of positive elements in the array
 *
 * @example
 * // returns { count: 5, sum: 357 }
 * sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
 *
 * @param {number[]} array Array of numbers
 * @returns {{count: number, sum: number}} Sum and number of positive elements in the array
 */
function sumOfPositive(array) {
    if (!Array.isArray(array)) {
        throw TypeError('Argument is not an array!');
    }

    const elements = array.filter(el => el > 0);

    return {
        count: elements.length,
        sum: elements.reduce((sum, el) => sum + el, 0)
    };
}

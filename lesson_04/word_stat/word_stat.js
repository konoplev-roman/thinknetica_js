/**
 * Returns an array of objects with a structure describing the words
 * and the sum of codes of all characters of the word
 * (Word - symbols between spaces)
 *
 * @example
 * // returns [
 * //   { word: 'Lorem', code: 511 },
 * //   { word: 'ipsum', code: 558 },
 * //   { word: 'dolor', code: 544 },
 * //   { word: 'sit', code: 336 },
 * //   { word: 'amet.', code: 469 }
 * // ]
 * wordStat('Lorem ipsum dolor sit amet.');
 *
 * @param {string} text
 * @returns {{word: string, code: number}[]} Array of objects with a structure describing the words
 * and the sum of codes of all characters of the word
 * (Word - symbols between spaces)
 */
function wordStat(text) {
    if (typeof text !== 'string' && !(text instanceof String)) {
        throw TypeError('Argument is not a string!');
    }

    return text
        .split(' ')
        .map(word => (
            {
                word: word,
                code: word
                    .split('')
                    .reduce((sum, char) => sum + char.charCodeAt(0), 0)
            }
        ));
}

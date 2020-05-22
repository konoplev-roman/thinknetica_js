/**
 * Returns an array of objects with a structure describing the words
 * and the sum of codes of all characters of the word
 * (Word - symbols between spaces)
 *
 * @example
 * // returns [
 * //   { word: 'Lorem', sum: 511 },
 * //   { word: 'ipsum', sum: 558 },
 * //   { word: 'dolor', sum: 544 },
 * //   { word: 'sit', sum: 336 },
 * //   { word: 'amet.', sum: 469 }
 * // ]
 * textStructure('Lorem ipsum dolor sit amet.');
 *
 * @param {string} text
 * @returns {{word: string, sum: number}[]} Array of objects with a structure describing the words
 * and the sum of codes of all characters of the word
 * (Word - symbols between spaces)
 */
function textStructure(text) {
    return text
        .split(' ')
        .map(word => (
            {
                word: word,
                sum: word
                    .split('')
                    .reduce((sum, char) => sum + char.charCodeAt(0), 0)
            }
        ));
}

console.log(textStructure('Lorem ipsum dolor sit amet.'));

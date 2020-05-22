/**
 * @typedef {Object} EncodeText
 * @property {Word[]} dictionary
 * @property {string} encodedText
 */

/**
 * @typedef {Object} Word
 * @property {string} word
 * @property {number} count
 * @property {string} code
 */

/**
 * Returns an object with a dictionary and encoded text.
 * Accepts text, selects all unique words in it,
 * calculates the number of occurrences for each word and assigns a unique code.
 * Then recodes the text, replacing words from the dictionary with the word code.
 *
 * Word - symbols between spaces.
 * Unique code - random number (preferably in 16 or 36 characters system)
 *
 * @example
 * // returns {
 * //   dictionary: [
 * //     { word: 'Lorem', count: 1, code: '58' },
 * //     { word: 'ipsum', count: 2, code: 'rd' },
 * //     { word: 'dolor.', count: 1, code: 'g7' }
 * //   ],
 * //   encodedText: '58,rd,rd,g7'
 * // }
 * encodeText('Lorem ipsum ipsum dolor.');
 *
 * @param {string} text
 * @returns {EncodeText}
 */
function encodeText(text) {
    const words = text.split(' ');
    const uniqWords = [...new Set(words)];

    const dictionary = [];
    uniqWords.forEach((currentWord) => {
        let code;
        do {
            code = Math.random().toString(32).substr(2, 2);
        } while (dictionary.find(word => word.code === code));

        dictionary.push({
            word: currentWord,
            count: words.filter(word => word === currentWord).length,
            code: code
        });
    });

    return {
        dictionary: dictionary,
        encodedText: words.map(currentWord => dictionary.find(word => word.word === currentWord).code).join(',')
    };
}

console.log(encodeText('Lorem ipsum ipsum dolor.'));

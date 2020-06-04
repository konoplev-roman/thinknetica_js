describe('wordStat', () => {
    it('for "Lorem ipsum dolor sit amet." should return [\n' +
        '  { word: "Lorem", code: 511 },\n' +
        '  { word: "ipsum", code: 558 },\n' +
        '  { word: "dolor", code: 544 },\n' +
        '  { word: "sit", code: 336 },\n' +
        '  { word: "amet.", code: 469 }\n' +
        ']', () => {
        assert.deepEqual(wordStat('Lorem ipsum dolor sit amet.'), [
            { word: 'Lorem', code: 511 },
            { word: 'ipsum', code: 558 },
            { word: 'dolor', code: 544 },
            { word: 'sit', code: 336 },
            { word: 'amet.', code: 469 }
        ]);
    });

    it('for "Etiam erat velit" should return [\n' +
        '  { word: "Etiam", code: 496 }, \n' +
        '  { word: "erat", code: 428 }, \n' +
        '  { word: "velit", code: 548 }\n' +
        ']', () => {
        assert.deepEqual(wordStat('Etiam erat velit'), [
            { word: 'Etiam', code: 496 },
            { word: 'erat', code: 428 },
            { word: 'velit', code: 548 }
        ]);
    });

    it('for "Pellentesque" should return [{ word: "Pellentesque", code: 1271 }]', () => {
        assert.deepEqual(wordStat('Pellentesque'), [{ word: 'Pellentesque', code: 1271 }]);
    });

    it('for "" should return [{ word: "", code: 0 }]', () => {
        assert.deepEqual(wordStat(''), [{ word: '', code: 0 }]);
    });

    it('for 123 should return throw', () => {
        assert.throws(() => { wordStat(123) }, TypeError, 'Argument is not a string!');
    });

    it('for empty arg should return throw', () => {
        assert.throws(() => { wordStat() }, TypeError, 'Argument is not a string!');
    });
});

describe('sumOfPositive', () => {
    it('for [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58] should return { count: 5, sum: 357 }', () => {
        assert.deepEqual(sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]), { count: 5, sum: 357 });
    });

    it('for [28, 37, -20, -47, 22] should return { count: 3, sum: 87 }', () => {
        assert.deepEqual(sumOfPositive([28, 37, -20, -47, 22]), { count: 3, sum: 87 });
    });

    it('for [41, 57] should return { count: 2, sum: 98 }', () => {
        assert.deepEqual(sumOfPositive([28, 37, -20, -47, 22]), { count: 3, sum: 87 });
    });

    it('for [-1] should return { count: 0, sum: 0 }', () => {
        assert.deepEqual(sumOfPositive([-1]), { count: 0, sum: 0 });
    });

    it('for [] should return { count: 0, sum: 0 }', () => {
        assert.deepEqual(sumOfPositive([]), { count: 0, sum: 0 });
    });

    it('for "" should return throw', () => {
        assert.throws(() => { sumOfPositive('') }, TypeError, 'Argument is not an array!');
    });

    it('for empty arg should return throw', () => {
        assert.throws(() => { sumOfPositive() }, TypeError, 'Argument is not an array!');
    });
});

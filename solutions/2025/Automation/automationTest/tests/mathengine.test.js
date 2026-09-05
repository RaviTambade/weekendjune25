
const mathEngine = require('../aut/mathengine');
test('adds 1 + 2 to equal 3', () => {
    expect(mathEngine.sum(1, 2)).toBe(3);
});

test('subtracts 6 - 3 to equal 3', () => {
    expect(mathEngine.subtract(6, 3)).toBe(3);
});

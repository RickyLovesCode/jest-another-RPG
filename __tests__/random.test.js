const checkIfEqual = require('../lib/random.test.js');

Text('check if 10 = 10', () => {
    expect(checkIfEqual(10, 10)).toBe(true);
});
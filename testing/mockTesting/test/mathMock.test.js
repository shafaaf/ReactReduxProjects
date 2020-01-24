const math = require('../src/math');
const app = require('../src/app');

// same as setting jest.fn() to all methods
jest.mock('../src/math.js');

test('calls math.add', () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

test('calls math.subtract', () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

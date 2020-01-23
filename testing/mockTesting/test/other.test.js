const mathjs = require('mathjs');

jest.mock('mathjs');
mathjs.log.mockReturnValueOnce('oi');

test('The mathjs log function', () => {
    const result = mathjs.log(10000, 10);
    expect(mathjs.log).toHaveBeenCalledTimes(1);
    expect(mathjs.log).toHaveBeenCalledWith(10000, 10);
});

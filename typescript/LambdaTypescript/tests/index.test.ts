const dist = require('../dist');

describe('index', () => {
    it("should say 'hello world'", () => {
        dist.HelloWorld();
        dist.HelloName('Aaron');
    });

    it('lambda test1', () => {
        dist.handler({ foo: 'bar' }).then((r) => console.log(r));
    });
});

const emitBitcoinDescriptor = require("./emitter");
const FIXTURES = require("./test/fixtures");

describe("Emitting:", () => {

  FIXTURES.forEach((fixture) => {
    const descriptor = fixture[0];
    const data = fixture[1];
    test(descriptor, () => {
      expect(emitBitcoinDescriptor(data)).toEqual(descriptor);
    });
  });
});

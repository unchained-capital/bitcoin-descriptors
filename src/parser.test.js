const parseBitcoinDescriptor = require("./parser");
const FIXTURES = require("./test/fixtures");

describe("Parsing:", () => {

  FIXTURES.forEach((fixture) => {
    const descriptor = fixture[0];
    const data = fixture[1];
    test(descriptor, () => {
      expect(parseBitcoinDescriptor(descriptor)).toEqual(data);
    });
  });

});

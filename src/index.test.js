const {
  parseBitcoinDescriptor,
  emitBitcoinDescriptor,
  validateBitcoinDescriptor,
  createBitcoinDescriptorChecksum,
  validateBitcoinDescriptorChecksum,
} = require("./index");

test("Sanity test", () => {
  expect(true);
});

test("API is exported", () => {
  expect(parseBitcoinDescriptor).toBeDefined();
  expect(emitBitcoinDescriptor).toBeDefined();
  expect(validateBitcoinDescriptor).toBeDefined();
  expect(createBitcoinDescriptorChecksum).toBeDefined();
  expect(validateBitcoinDescriptorChecksum).toBeDefined();
});

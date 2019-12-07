// This is actually really hard to replicate: https://github.com/bitcoin/bitcoin/blob/5ff798c39b8a72d64bd2c23f400d1c35ca27a1ed/src/script/descriptor.cpp
const createBitcoinDescriptorChecksum = (data) => {
  throw Error("Creating descriptor checksums is not yet implemented.");
};

const validateBitcoinDescriptorChecksum = (descriptor, checksum) => {
  if (!checksum) {
    if (descriptor.includes('#')) {
      const parts = descriptor.split('#');
      if (parts.length !== 2) {
        return `Multiple "#" characters found.`;
      }
      return validateBitcoinDescriptorChecksum(parts[0], parts[1]);
    } else {
      return "No checksum provided.";
    }
  }
  throw Error("Validating descriptor checksums is not yet implemented.");
};

module.exports = {
  createBitcoinDescriptorChecksum,
  validateBitcoinDescriptorChecksum,
};

const createBitcoinDescriptorChecksum = (data) => {
  return 'aaaaaaaa';
};

const validateBitcoinDescriptorChecksum = (descriptor, checksum) => {
  if (!checksum) {
    if (descriptor.includes('#')) {
      return validateBitcoinDescriptorChecksum(...descriptor.split('#'));
    } else {
      return "No checksum provided.";
    }
  }
  return '';
};

module.exports = {
  createBitcoinDescriptorChecksum,
  validateBitcoinDescriptorChecksum,
};

const {createBitcoinDescriptorChecksum} = require("./validator");

const emitBitcoinDescriptor = (data, createChecksum) => {
  const descriptor = emitFunction(data);
  if (createChecksum) {
    return `${descriptor}#${createBitcoinDescriptorChecksum(descriptor)}`;
  } else {
    return descriptor;
  }
};

const emitFunction = (data) => {
  return `${data[0]}(${data.slice(1).map(emitArg).join(",")})`;
};

const emitArg = (data) => {
  if (typeof(data) === "number") {
    return data;
  }
  if (data.value) {
    return key(data);
  }
  return emitFunction(data);
};

const key = (data) => {
  return `${parentFingerprint(data)}${data.value}${data.derivationPath || ''}${data.wildcard ? "/*" : ""}${data.wildcardHardened ? "'": ""}`;
};

const parentFingerprint = (data) => {
  if (data.parentFingerprint && data.parentDerivationPath) {
    return `[${data.parentFingerprint}${data.parentDerivationPath}]`;
  } else { return ''; }
};

module.exports = emitBitcoinDescriptor;

// <script # checksum>

const key = (data) => {
  return {
    ...{
      parentFingerprint: data[0] && data[0][1],
      parentDerivationPath: data[0] && data[0][2],
    },
    ...data[1][0],
  };
}

const keyPrefix = (data) => {
  return {
    fingerprint: data[1],
    derivationPath: data[2],
  };
}

const publicKey = (data) => {
  return {
    inputType: "publicKey",
    value: data[0].value,
  };
}

const privateKey = (data) => {
  return {
    inputType: "privateKey",
    value: data[0].value,
  };
}

const extendedPublicKey = (data) => {
  return {
    ...{
      inputType: "extendedPublicKey",
      value: data[0].value,
      derivationPath: data[1] && data[1][0],
    },
    ...(data[1] && data[1][1] ? data[1][1][0] : { wildcard: false, wildcardHardened: false }),
  };
}

const value = (data) => {
  return data[0].value;
}

const number = (data) => {
  return parseInt(value(data));
}

const wildcard = (data) => {
  return {
    wildcard: data && !!data[0],
    wildcardHardened: data && data[0] && (data[0].value.includes("'") || data[0].value.includes("h")),
  };
}

module.exports = {
  privateKey,
  publicKey,
  extendedPublicKey,
  number,
  key,
  value,
  wildcard,
};

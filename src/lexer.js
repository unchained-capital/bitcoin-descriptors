const moo = require("moo");

// Order matters
const lexer = moo.compile({
  extendedPublicKey: /[xyzYZtuvUV]pub[a-zA-Z0-9]+/, // what about length?
  address: /(?:[1nm32]|bc1|tb1)[a-kmzA-HJNPZ1-9]+/, // no l, I, O, or 0
  privateKey: /[KL5c9][a-kmzA-HJNPZ1-9]+/, // no l, I, O, or 0
  publicKey: /0(?:[23][a-f0-9]{64}|4[a-f0-9]{128})/,
  functionName: /(?:sortedmulti|w?sh|w?pkh|pk|multi|combo|addr|raw)/,
  fingerprint: /[a-f0-9]{8}/,
  checksum: /[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{8}/, // https://github.com/bitcoin/bitcoin/blob/5ff798c39b8a72d64bd2c23f400d1c35ca27a1ed/src/script/descriptor.cpp#L116
  number: /[0-9]+/,
  hex: /[a-f0-9]+/,
  derivationPath: /(?:\/[0-9]+['h]?)+/,
  wildcard: /\/\*['h]?/,
  '(': /\(/,
  ')': /\)/,
  '[': /\[/,
  ']': /\]/,
  ',': /,/,
  '#': /#/,
});

module.exports = lexer;

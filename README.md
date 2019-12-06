Bitcoin Descriptors
===================

This library parses and validates [bitcoin descriptor strings](https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md).

Installation
------------

TBD -- this package has not been released to NPM yet.

Usage
-----

Parse bitcoin descriptor strings into a plain Javascript objects:

```javascript
const {parseBitcoinDescriptor} = require("bitcoin-descriptors");

console.log(parseBitcoinDescriptor("pk(0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798)"));
// ['pk', { inputType: "publicKey", value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", ...}]

console.log(parseBitcoinDescriptor("wsh(multi(1,xpub661MyMwAqRbcFW31YEwpkMuc5THy2PSt5bDMsktWQcFF8syAmRUapSCGu8ED9W6oDMSgv6Zz8idoc4a6mr8BDzTJY47LJhkJ8UB7WEGuduB/1/0/*,xpub69H7F5d8KSRgmmdJg2KhpAK8SR3DjMwAdkxj3ZuxV27CprR9LgpeyGmXUbC6wb7ERfvrnKZjXoUmmDznezpbZb7ap6r1D3tgFxHmwMkQTPH/0/0/*))"));
// ['wsh',
//   [ 'multi',
//      1,
//     { inputType: "extendedPublicKey", value: "xpub661MyMwAqRbcFW31YEwpkMuc5THy2PSt5bDMsktWQcFF8syAmRUapSCGu8ED9W6oDMSgv6Zz8idoc4a6mr8BDzTJY47LJhkJ8UB7WEGuduB", derivationPath: "/1/0", wildcard: true, ...}
//     { inputType: "extendedPublicKey", value: "xpub69H7F5d8KSRgmmdJg2KhpAK8SR3DjMwAdkxj3ZuxV27CprR9LgpeyGmXUbC6wb7ERfvrnKZjXoUmmDznezpbZb7ap6r1D3tgFxHmwMkQTPH", derivationPath: "/0/0", wildcard: true, ...}
//   ]
// ]
```

Developers
----------

This library relies on the excellent [nearley parser](https://nearley.js.org/) and [moo lexer](https://github.com/no-context/moo).   See

* The lexer's [token definitions](src/lexer.js)
* The parser's [original grammar](src/grammar.ne) and the [compiled grammar](src/grammar.js), produced by `neatleyc`.

The following command will re-compile the grammar from its original definition:

```
$ npm run compile
```

Each example provided in the [bitcoin descriptor spec](https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md) has been turned into a [unit test](src/parser.test.js).  Run the full test-suite:

```
$ npm run test
```

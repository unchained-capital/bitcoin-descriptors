module.exports = [
  [
    "pk(0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798)",
    [
      "pk",
      {
        inputType: "publicKey",
        value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        parentFingerprint: null,
        parentDerivationPath: null,
      }
    ]
  ],


  [
    "pkh(02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5)",
    [
      "pkh",
      {
        inputType: "publicKey",
        value: "02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5",
        parentFingerprint: null,
        parentDerivationPath: null,
      }
    ]
  ],

  [
    "wpkh(02f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9)",
    [
      "wpkh",
      {
        inputType: "publicKey",
        value: "02f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
        parentFingerprint: null,
        parentDerivationPath: null,
      }
    ]
  ],

  [
    "combo(0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798)",
    [
      "combo",
      {
        inputType: "publicKey",
        value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        parentFingerprint: null,
        parentDerivationPath: null,
      }
    ]
  ],

  [
    "pk(0429b3e0919adc41a316aad4f41444d9bf3a9b639550f2aa735676ffff25ba3898d6881e81d2e0163348ff07b3a9a3968401572aa79c79e7edb522f41addc8e6ce)",
    [
      "pk",
      {
        inputType: "publicKey",
        value: "0429b3e0919adc41a316aad4f41444d9bf3a9b639550f2aa735676ffff25ba3898d6881e81d2e0163348ff07b3a9a3968401572aa79c79e7edb522f41addc8e6ce",
        parentFingerprint: null,
        parentDerivationPath: null,
      }
    ]
  ],

  [
    "sh(wpkh(03fff97bd5755eeea420453a14355235d382f6472f8568a18b2f057a1460297556))",
    [
      "sh",
      [
        "wpkh",
        {
          inputType: "publicKey",
          value: "03fff97bd5755eeea420453a14355235d382f6472f8568a18b2f057a1460297556",
          parentFingerprint: null,
          parentDerivationPath: null,
        }
      ]
    ]
  ],

  [
    "sh(wsh(pkh(02e493dbf1c10d80f3581e4904930b1404cc6c13900ee0758474fa94abe8c4cd13)))",
    [
      "sh",
      [
        "wsh", 
        [
          "pkh",
          {
            inputType: "publicKey",
            value: "02e493dbf1c10d80f3581e4904930b1404cc6c13900ee0758474fa94abe8c4cd13",
            parentFingerprint: null,
            parentDerivationPath: null,
          }
        ]
      ]
    ]
  ],

  [
    "multi(1,022f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4,025cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc)",
    [
      "multi",
      1,
      {
        inputType: "publicKey",
        value: "022f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
        parentFingerprint: null,
        parentDerivationPath: null,
      },
      {
        inputType: "publicKey",
        value: "025cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
        parentFingerprint: null,
        parentDerivationPath: null,
      },
    ]
  ],

  [
    "sh(multi(2,022f01e5e15cca351daff3843fb70f3c2f0a1bdd05e5af888a67784ef3e10a2a01,03acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe))",
    [
      "sh",
      [
        "multi",
        2,
        {
          inputType: "publicKey",
          value: "022f01e5e15cca351daff3843fb70f3c2f0a1bdd05e5af888a67784ef3e10a2a01",
          parentFingerprint: null,
          parentDerivationPath: null,
        },
        {
          inputType: "publicKey",
          value: "03acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
          parentFingerprint: null,
          parentDerivationPath: null,
        },
      ]
    ]
  ],

  [
    "sh(sortedmulti(2,03acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe,022f01e5e15cca351daff3843fb70f3c2f0a1bdd05e5af888a67784ef3e10a2a01))",
    [
      "sh",
      [
        "sortedmulti",
        2,
        {
          inputType: "publicKey",
          value: "03acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
          parentFingerprint: null,
          parentDerivationPath: null,
        },
        {
          inputType: "publicKey",
          value: "022f01e5e15cca351daff3843fb70f3c2f0a1bdd05e5af888a67784ef3e10a2a01",
          parentFingerprint: null,
          parentDerivationPath: null,
        },
      ]
    ]
  ],

  [
    "wsh(multi(2,03a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7,03774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb,03d01115d548e7561b15c38f004d734633687cf4419620095bc5b0f47070afe85a))",
    [
      "wsh",
      [
        "multi",
        2,
        {
          inputType: "publicKey",
          value: "03a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7",
          parentFingerprint: null,
          parentDerivationPath: null,
        },
        {
          inputType: "publicKey",
          value: "03774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
          parentFingerprint: null,
          parentDerivationPath: null,
        },
        {
          inputType: "publicKey",
          value: "03d01115d548e7561b15c38f004d734633687cf4419620095bc5b0f47070afe85a",
          parentFingerprint: null,
          parentDerivationPath: null,
        },
      ]
    ]
  ],

  [
    "sh(wsh(multi(1,03f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8,03499fdf9e895e719cfd64e67f07d38e3226aa7b63678949e6e49b241a60e823e4,02d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e)))",
    [
      "sh",
      [
        "wsh",
        [
          "multi",
          1,
          {
            inputType: "publicKey",
            value: "03f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
            parentFingerprint: null,
            parentDerivationPath: null,
          },
          {
            inputType: "publicKey",
            value: "03499fdf9e895e719cfd64e67f07d38e3226aa7b63678949e6e49b241a60e823e4",
            parentFingerprint: null,
            parentDerivationPath: null,
          },
          {
            inputType: "publicKey",
            value: "02d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
            parentFingerprint: null,
            parentDerivationPath: null,
          },
        ]
      ]
    ]
  ],

  [
    "pk(xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8)",
    [
      "pk",
      {
        inputType: "extendedPublicKey",
        value: "xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8",
        parentFingerprint: null,
        parentDerivationPath: null,
        derivationPath: null,
        wildcard: false,
        wildcardHardened: false,
      }
    ]
  ],

  [
    "pkh(xpub68Gmy5EdvgibQVfPdqkBBCHxA5htiqg55crXYuXoQRKfDBFA1WEjWgP6LHhwBZeNK1VTsfTFUHCdrfp1bgwQ9xv5ski8PX9rL2dZXvgGDnw/1'/2)",
    [
      "pkh",
      {
        inputType: "extendedPublicKey",
        value: "xpub68Gmy5EdvgibQVfPdqkBBCHxA5htiqg55crXYuXoQRKfDBFA1WEjWgP6LHhwBZeNK1VTsfTFUHCdrfp1bgwQ9xv5ski8PX9rL2dZXvgGDnw",
        parentFingerprint: null,
        parentDerivationPath: null,
        derivationPath: "/1'/2",
        wildcard: false,
        wildcardHardened: false,
      }
    ]
  ],

  [
    "pkh([d34db33f/44'/0'/0']xpub6ERApfZwUNrhLCkDtcHTcxd75RbzS1ed54G1LkBUHQVHQKqhMkhgbmJbZRkrgZw4koxb5JaHWkY4ALHY2grBGRjaDMzQLcgJvLJuZZvRcEL/1/*)",
    [
      "pkh",
      {
        inputType: "extendedPublicKey",
        value: "xpub6ERApfZwUNrhLCkDtcHTcxd75RbzS1ed54G1LkBUHQVHQKqhMkhgbmJbZRkrgZw4koxb5JaHWkY4ALHY2grBGRjaDMzQLcgJvLJuZZvRcEL",
        parentFingerprint: "d34db33f",
        parentDerivationPath: "/44'/0'/0'",
        derivationPath: "/1",
        wildcard: true,
        wildcardHardened: false,
      }
    ]
  ],

  [
    "wsh(multi(1,xpub661MyMwAqRbcFW31YEwpkMuc5THy2PSt5bDMsktWQcFF8syAmRUapSCGu8ED9W6oDMSgv6Zz8idoc4a6mr8BDzTJY47LJhkJ8UB7WEGuduB/1/0/*,xpub69H7F5d8KSRgmmdJg2KhpAK8SR3DjMwAdkxj3ZuxV27CprR9LgpeyGmXUbC6wb7ERfvrnKZjXoUmmDznezpbZb7ap6r1D3tgFxHmwMkQTPH/0/0/*))",
    [
      "wsh",
      [
        "multi",
        1,
        {
          inputType: "extendedPublicKey",
          value: "xpub661MyMwAqRbcFW31YEwpkMuc5THy2PSt5bDMsktWQcFF8syAmRUapSCGu8ED9W6oDMSgv6Zz8idoc4a6mr8BDzTJY47LJhkJ8UB7WEGuduB",
          parentFingerprint: null,
          parentDerivationPath: null,
          derivationPath: "/1/0",
          wildcard: true,
          wildcardHardened: false,
        },
        {
          inputType: "extendedPublicKey",
          value: "xpub69H7F5d8KSRgmmdJg2KhpAK8SR3DjMwAdkxj3ZuxV27CprR9LgpeyGmXUbC6wb7ERfvrnKZjXoUmmDznezpbZb7ap6r1D3tgFxHmwMkQTPH",
          parentFingerprint: null,
          parentDerivationPath: null,
          derivationPath: "/0/0",
          wildcard: true,
          wildcardHardened: false,
        }
      ]
    ]
  ],

  [
    "wsh(sortedmulti(1,xpub661MyMwAqRbcFW31YEwpkMuc5THy2PSt5bDMsktWQcFF8syAmRUapSCGu8ED9W6oDMSgv6Zz8idoc4a6mr8BDzTJY47LJhkJ8UB7WEGuduB/1/0/*,xpub69H7F5d8KSRgmmdJg2KhpAK8SR3DjMwAdkxj3ZuxV27CprR9LgpeyGmXUbC6wb7ERfvrnKZjXoUmmDznezpbZb7ap6r1D3tgFxHmwMkQTPH/0/0/*))",
    [
      "wsh",
      [
        "sortedmulti",
        1,
        {
          inputType: "extendedPublicKey",
          value: "xpub661MyMwAqRbcFW31YEwpkMuc5THy2PSt5bDMsktWQcFF8syAmRUapSCGu8ED9W6oDMSgv6Zz8idoc4a6mr8BDzTJY47LJhkJ8UB7WEGuduB",
          parentFingerprint: null,
          parentDerivationPath: null,
          derivationPath: "/1/0",
          wildcard: true,
          wildcardHardened: false,
        },
        {
          inputType: "extendedPublicKey",
          value: "xpub69H7F5d8KSRgmmdJg2KhpAK8SR3DjMwAdkxj3ZuxV27CprR9LgpeyGmXUbC6wb7ERfvrnKZjXoUmmDznezpbZb7ap6r1D3tgFxHmwMkQTPH",
          parentFingerprint: null,
          parentDerivationPath: null,
          derivationPath: "/0/0",
          wildcard: true,
          wildcardHardened: false,
        }
      ]
    ]
  ],


  [
    "raw(ababab)",
    [
      "raw",
      "ababab",
    ]
  ],


  // [
  //   "addr(1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2)",
  //   [
  //     "addr",
  //     {
  //       inputType: "address",
  //       value: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
  //       parenetFingerprint: null,
  //       parenetDerivationPath: null,
  //     }
  //   ]
  // ],

  // [
  //   "pk(5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ)",
  //   [
  //     "pk",
  //     {
  //       inputType: "privateKey",
  //       value: "5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ",
  //       parentFingerprint: null,
  //       parentDerivationPath: null,
  //     }
  //   ]
  // ],

];

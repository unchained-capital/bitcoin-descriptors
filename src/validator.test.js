const validateBitcoinDescriptor = require("./validator");

describe("Validating", () => {

  test("missing, empty, or otherwise obviously bad descriptor", () => {
    expect(validateBitcoinDescriptor()).toMatch(/no descriptor/i);
    expect(validateBitcoinDescriptor(null)).toMatch(/no descriptor/i);
    expect(validateBitcoinDescriptor([])).toMatch(/empty descriptor/i);
    expect(validateBitcoinDescriptor({})).toMatch(/no function/i);
    expect(validateBitcoinDescriptor("")).toMatch(/no descriptor/i);
    expect(validateBitcoinDescriptor("foo")).toMatch(/no function/i);
    expect(validateBitcoinDescriptor(0)).toMatch(/no descriptor/i);
    expect(validateBitcoinDescriptor(1)).toMatch(/no function/i);
  });

  describe("key function", () => {

    test("with missing, empty, or otherwise bad key descriptor", () => {
      expect(validateBitcoinDescriptor(["pk"])).toMatch(/requires at least one argument/i);
      expect(validateBitcoinDescriptor(["pk", null])).toMatch(/no key descriptor/i);
      expect(validateBitcoinDescriptor(["pk", []])).toMatch(/empty key descriptor/i);
      expect(validateBitcoinDescriptor(["pk", {}])).toMatch(/empty key descriptor/i);
      expect(validateBitcoinDescriptor(["pk", ""])).toMatch(/no key descriptor/i);
      expect(validateBitcoinDescriptor(["pk", "foo"])).toMatch(/invalid key descriptor/i);
      expect(validateBitcoinDescriptor(["pk", 0])).toMatch(/no key descriptor/i);
      expect(validateBitcoinDescriptor(["pk", 1])).toMatch(/invalid key descriptor/i);
      expect(validateBitcoinDescriptor(["pk", 1])).toMatch(/invalid key descriptor/i);
    });


    test("with valid key", () => {
      expect(validateBitcoinDescriptor([
        "pk", 
        {value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"}
      ])).toEqual("");
    });

    test("with multiple valid keys", () => {
      expect(validateBitcoinDescriptor([
        "pk", 
        {value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"},
        {value: "03fff97bd5755eeea420453a14355235d382f6472f8568a18b2f057a1460297556"}
      ])).toMatch(/accepts only a single argument/i);
    });


    test("with valid script", () => {
      expect(validateBitcoinDescriptor([
        "pk", 
        ["wpkh", 
         {value: "03fff97bd5755eeea420453a14355235d382f6472f8568a18b2f057a1460297556"}
        ]
      ])).toMatch(/empty key descriptor/i);
    });

  });

  describe("script function", () => {

    test("with missing, empty, or otherwise bad script descriptor", () => {
      expect(validateBitcoinDescriptor(["sh"])).toMatch(/requires at least one argument/i);
      expect(validateBitcoinDescriptor(["sh", null])).toMatch(/no descriptor/i);
      expect(validateBitcoinDescriptor(["sh", []])).toMatch(/empty descriptor/i);
      expect(validateBitcoinDescriptor(["sh", {}])).toMatch(/no function/i);
      expect(validateBitcoinDescriptor(["sh", ""])).toMatch(/no descriptor/i);
      expect(validateBitcoinDescriptor(["sh", "foo"])).toMatch(/no function/i);
      expect(validateBitcoinDescriptor(["sh", 0])).toMatch(/no descriptor/i);
      expect(validateBitcoinDescriptor(["sh", 1])).toMatch(/no function/i);
    });


    test("with valid script", () => {
      expect(validateBitcoinDescriptor(
        ["sh",
         ["wpkh",
          {value: "03fff97bd5755eeea420453a14355235d382f6472f8568a18b2f057a1460297556"}
         ]
        ])).toEqual("");
    });

    test("with multiple valid scripts", () => {
      expect(validateBitcoinDescriptor(
        ["sh",
         ["wpkh",
          {value: "03fff97bd5755eeea420453a14355235d382f6472f8568a18b2f057a1460297556"}
         ],
         ["wpkh",
          {value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"}
         ],
        ])).toMatch(/accepts only a single argument/);
    });

    test("with valid key", () => {
      expect(validateBitcoinDescriptor(["sh", {value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"}])).toMatch(/no function/i);
    });

  });

  describe("multisig function", () => {


    test("with missing, empty, or otherwise bad arguments", () => {
      expect(validateBitcoinDescriptor(["multi"])).toMatch(/requires at least one argument/i);
      expect(validateBitcoinDescriptor(["multi", null])).toMatch(/requires at least two arguments/i);
      expect(validateBitcoinDescriptor(["multi", null, null])).toMatch(/first argument.+must be.+required keys/i);
      expect(validateBitcoinDescriptor(["multi", "f", null])).toMatch(/first argument.+must be.+required keys/i);
      expect(validateBitcoinDescriptor(["multi", [], null])).toMatch(/first argument.+must be.+required keys/i);
      expect(validateBitcoinDescriptor(["multi", {}, null])).toMatch(/first argument.+must be.+required keys/i);
      expect(validateBitcoinDescriptor(["multi", 0, null])).toMatch(/cannot be zero/i);
      expect(validateBitcoinDescriptor(["multi", 1, null])).toMatch(/no key descriptor/i);
      expect(validateBitcoinDescriptor(["multi", 1, []])).toMatch(/empty key descriptor/i);
      expect(validateBitcoinDescriptor(["multi", 1, {}])).toMatch(/empty key descriptor/i);
      expect(validateBitcoinDescriptor(["multi", 1, ""])).toMatch(/no key descriptor/i);
      expect(validateBitcoinDescriptor(["multi", 1, "foo"])).toMatch(/invalid key descriptor/i);
      expect(validateBitcoinDescriptor(["multi", 1, 0])).toMatch(/no key descriptor/i);
      expect(validateBitcoinDescriptor(["multi", 1, 1])).toMatch(/invalid key descriptor/i);
    });

    
    test("1-of-1 with valid key", () => {
      expect(validateBitcoinDescriptor([
        "multi", 
        1,
        {value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"}
      ])).toEqual("");
    });

    test("1-of-2 with valid key", () => {
      expect(validateBitcoinDescriptor([
        "multi", 
        1,
        {value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"},
        {value: "03fff97bd5755eeea420453a14355235d382f6472f8568a18b2f057a1460297556"},
      ])).toEqual("");
    });

    test("2-of-2 with valid key", () => {
      expect(validateBitcoinDescriptor([
        "multi", 
        2,
        {value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"},
        {value: "03fff97bd5755eeea420453a14355235d382f6472f8568a18b2f057a1460297556"},
      ])).toEqual("");
    });

    test("3-of-2 with valid key", () => {
      expect(validateBitcoinDescriptor([
        "multi", 
        3,
        {value: "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"},
        {value: "03fff97bd5755eeea420453a14355235d382f6472f8568a18b2f057a1460297556"},
      ])).toMatch(/cannot exceed/i);
    });

  });

  describe("function not allowed inside WSH", () => {

    test("when outside WSH", () => {
      expect(validateBitcoinDescriptor([
        "sh",
        [
          "wpkh",
          {
            value: "02e493dbf1c10d80f3581e4904930b1404cc6c13900ee0758474fa94abe8c4cd13",
          }
        ]
      ])).toEqual("");
    });

    test("when inside WSH", () => {
      expect(validateBitcoinDescriptor([
        "sh",
        [
          "wsh",
          [
            "wpkh",
            {
              value: "02e493dbf1c10d80f3581e4904930b1404cc6c13900ee0758474fa94abe8c4cd13",
            }
          ]
        ]
      ])).toMatch(/cannot nest.+within.+wsh/i);
    });
  });

  describe("function only allowed at top-level", () => {

    test("when at top-level", () => {
      expect(validateBitcoinDescriptor([
        "combo",
        {
          value: "02e493dbf1c10d80f3581e4904930b1404cc6c13900ee0758474fa94abe8c4cd13",
        }
      ])).toEqual("");
    });

    test("when not at top-level", () => {
      expect(validateBitcoinDescriptor([
        "sh",
        [
          "combo",
          {
            value: "02e493dbf1c10d80f3581e4904930b1404cc6c13900ee0758474fa94abe8c4cd13",
          }
        ]
      ])).toMatch(/only appear at top-level/i);
    });

  });

  describe("raw", ()  => {

    test("with missing, empty, or otherwise bad argument", () => {
      expect(validateBitcoinDescriptor(["raw"])).toMatch(/requires at least one argument/i);
      expect(validateBitcoinDescriptor(["raw", null])).toMatch(/no script descriptor/i);
      expect(validateBitcoinDescriptor(["raw", []])).toMatch(/invalid script descriptor/i);
      expect(validateBitcoinDescriptor(["raw", {}])).toMatch(/invalid script descriptor/i);
      expect(validateBitcoinDescriptor(["raw", 0])).toMatch(/no script descriptor/i);
      expect(validateBitcoinDescriptor(["raw", 1])).toMatch(/invalid script descriptor/i);
    });

    test("with valid hex", ()  => {
      expect(validateBitcoinDescriptor([
        "raw",
        "ababab"
      ])).toEqual("");
    });

    test("with multiple valid hex", ()  => {
      expect(validateBitcoinDescriptor([
        "raw",
        "ababab",
        "cdcdcd",
      ])).toMatch(/accepts only a single argument/i);
    });

  });

});

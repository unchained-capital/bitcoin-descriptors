const FUNCTIONS_ALLOWED_AT_TOP_LEVEL_ONLY = [
  'sh',
  'combo',
  'addr',
  'hex',
];

const FUNCTIONS_NOT_ALLOWED_INSIDE_WSH = [
  'wsh',
  'wpkh',
];

const MULTISIG_FUNCTIONS = [
  "multi",
  "sortedmulti",
];

const KEY_FUNCTIONS = [
  'pk',
  'pkh',
  'wpkh',
  'combo',
];

const SCRIPT_FUNCTIONS = [
  'sh',
  'wsh',
];

const ALL_FUNCTIONS = MULTISIG_FUNCTIONS.concat(KEY_FUNCTIONS).concat(SCRIPT_FUNCTIONS).concat(['addr', 'raw']);

const validateBitcoinDescriptor = (data, nonTop, inWSH) => {
  if (!data) {
    return "No descriptor";
  }

  if (typeof(data) !== "object") {
    return "No function call.";
  }

  if (data.length == 0) {
    return "Empty descriptor.";
  }
  const functionName = data[0];

  if (!functionName) {
    return "No function call.";
  }

  if (! ALL_FUNCTIONS.includes(functionName)) {
    return `Invalid function name: "${functionName}"`;
  }
  
  if (inWSH) {
    if (FUNCTIONS_NOT_ALLOWED_INSIDE_WSH.includes(functionName)) {
      return `Cannot nest function "${functionName}" within function "wsh".`;
    }
  }

  if (functionName === 'wsh') {
    inWSH = true;
  }

  if (nonTop) {
    if (FUNCTIONS_ALLOWED_AT_TOP_LEVEL_ONLY.includes(functionName)) {
      return `Function "${functionName}" can only appear at top-level."`;
    }
  }

  if (data.length === 1) {
    return `Function "${functionName}" requires at least one argument.`;
  }

  if (MULTISIG_FUNCTIONS.includes(functionName)) {
    if (data.length < 3) {
      return `Function "${functionName}" requires at least two arguments.`;
    }
    const requiredKeys = data[1];
    const totalKeys = (data.length - 2);
    if (typeof(requiredKeys) !== "number") {
      return `The first argument to function "${functionName}" must be the number of required keys.`;
    }
    if (requiredKeys === 0) {
      return `The number of required keys in function "${functionName}" cannot be zero.`;
    }
    if (requiredKeys > totalKeys) {
      return `The number of required keys in function "${functionName}" cannot exceed the number of given keys.`;
    }
    for (let i=0; i < totalKeys; i++) {
      const key = data[i+2];
      const error = validateKey(key);
      if (error !== '') {
        return error;
      }
    }
  } else {

    if (data.length > 2) {
      return `Function "${functionName}" accepts only a single argument."`;
    }

    if (SCRIPT_FUNCTIONS.includes(functionName)) {
      return validateBitcoinDescriptor(data[1], true, inWSH);
    } else {
      if (KEY_FUNCTIONS.includes(functionName)) {
        const error = validateKey(data[1]);
        if (error !== '') {
          return error;
        }
      } else {
        if (functionName === "addr") {
        } else {
          // raw
          if (!data[1]) {
            return "No script descriptor";
          }
          if (typeof(data[1]) !== "string") {
            return "Invalid script descriptor";
          }
        }
      }
    }
  }
  return '';
};

const validateKey = (data) => {
  if (!data) {
    return "No key descriptor";
  }

  if (typeof(data) !== "object") {
    return "Invalid key descriptor.";
  }

  if (!data.value) {
    return "Empty key descriptor.";
  }

  return "";
};

module.exports = validateBitcoinDescriptor;

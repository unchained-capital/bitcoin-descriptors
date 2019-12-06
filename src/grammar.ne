@{% 
const lexer = require("./lexer"); 
const {
  key,
  publicKey,
  extendedPublicKey,
  privateKey,
  value,
  number,
  wildcard,
} = require("./postprocessors"); 
%}

@lexer lexer

descriptor -> script ("#" %checksum):? {% function(data) { return data[0]; } %}

script -> functionName "(" scriptArg scriptAdditionalArg:* ")" {% function(data) { return [data[0], data[2][0], ...data[3].map(function(arg) {return arg[1][0];})]; } %}

scriptAdditionalArg -> "," scriptArg

scriptArg -> script
  | key
  | number
  | %address
  | %hex

key -> keyPrefix:? keyBody {% key %}

keyPrefix -> "[" fingerprint derivationPath "]"

keyBody -> %privateKey
  | publicKey
  | extendedPublicKey

extendedPublicKey -> %extendedPublicKey (derivationPath (wildcard):?):? {% extendedPublicKey %}
publicKey -> %publicKey {% publicKey %}
privateKey -> %privateKey {% privateKey %}
functionName -> %functionName {% value %}
fingerprint -> %fingerprint {% value %}
number -> %number {% number %}
derivationPath -> %derivationPath {% value %}
wildcard -> %wildcard {% wildcard %}

// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
 
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
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "descriptor$ebnf$1$subexpression$1", "symbols": [{"literal":"#"}, (lexer.has("checksum") ? {type: "checksum"} : checksum)]},
    {"name": "descriptor$ebnf$1", "symbols": ["descriptor$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "descriptor$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "descriptor", "symbols": ["script", "descriptor$ebnf$1"], "postprocess": function(data) { return data[0]; }},
    {"name": "script$ebnf$1", "symbols": []},
    {"name": "script$ebnf$1", "symbols": ["script$ebnf$1", "scriptAdditionalArg"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "script", "symbols": ["functionName", {"literal":"("}, "scriptArg", "script$ebnf$1", {"literal":")"}], "postprocess": function(data) { return [data[0], data[2][0], ...data[3].map(function(arg) {return arg[1][0];})]; }},
    {"name": "scriptAdditionalArg", "symbols": [{"literal":","}, "scriptArg"]},
    {"name": "scriptArg", "symbols": ["script"]},
    {"name": "scriptArg", "symbols": ["key"]},
    {"name": "scriptArg", "symbols": ["number"]},
    {"name": "scriptArg", "symbols": [(lexer.has("address") ? {type: "address"} : address)]},
    {"name": "scriptArg", "symbols": [(lexer.has("hex") ? {type: "hex"} : hex)]},
    {"name": "key$ebnf$1", "symbols": ["keyPrefix"], "postprocess": id},
    {"name": "key$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "key", "symbols": ["key$ebnf$1", "keyBody"], "postprocess": key},
    {"name": "keyPrefix", "symbols": [{"literal":"["}, "fingerprint", "derivationPath", {"literal":"]"}]},
    {"name": "keyBody", "symbols": [(lexer.has("privateKey") ? {type: "privateKey"} : privateKey)]},
    {"name": "keyBody", "symbols": ["publicKey"]},
    {"name": "keyBody", "symbols": ["extendedPublicKey"]},
    {"name": "extendedPublicKey$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["wildcard"]},
    {"name": "extendedPublicKey$ebnf$1$subexpression$1$ebnf$1", "symbols": ["extendedPublicKey$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "extendedPublicKey$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "extendedPublicKey$ebnf$1$subexpression$1", "symbols": ["derivationPath", "extendedPublicKey$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "extendedPublicKey$ebnf$1", "symbols": ["extendedPublicKey$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "extendedPublicKey$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "extendedPublicKey", "symbols": [(lexer.has("extendedPublicKey") ? {type: "extendedPublicKey"} : extendedPublicKey), "extendedPublicKey$ebnf$1"], "postprocess": extendedPublicKey},
    {"name": "publicKey", "symbols": [(lexer.has("publicKey") ? {type: "publicKey"} : publicKey)], "postprocess": publicKey},
    {"name": "privateKey", "symbols": [(lexer.has("privateKey") ? {type: "privateKey"} : privateKey)], "postprocess": privateKey},
    {"name": "functionName", "symbols": [(lexer.has("functionName") ? {type: "functionName"} : functionName)], "postprocess": value},
    {"name": "fingerprint", "symbols": [(lexer.has("fingerprint") ? {type: "fingerprint"} : fingerprint)], "postprocess": value},
    {"name": "number", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": number},
    {"name": "derivationPath", "symbols": [(lexer.has("derivationPath") ? {type: "derivationPath"} : derivationPath)], "postprocess": value},
    {"name": "wildcard", "symbols": [(lexer.has("wildcard") ? {type: "wildcard"} : wildcard)], "postprocess": wildcard}
]
  , ParserStart: "descriptor"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();

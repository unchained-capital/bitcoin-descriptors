const {Grammar, Parser} = require("nearley");
const grammar = require("./grammar");

const parseBitcoinDescriptor = (descriptor) => {
  const parser = new Parser(Grammar.fromCompiled(grammar));
  parser.feed(descriptor);
  return handleResults(parser.results);
}

const handleResults = (results) => {
  if (results.length === 0) {
    console.error("Unable to parse incomplete input");
    return [];
  }
  if (results.length > 1) {
    console.error("Ambiguous result!");
  }
  return handleAST(results[0]);
}

const handleAST = (ast) => {
  return ast;
}

module.exports = parseBitcoinDescriptor;

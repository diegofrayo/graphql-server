const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const resolver = new GraphQLScalarType({
  name: 'Date',
  description: 'Scalar to represent Dates objects',
  serialize(value) {
    // console.log('serialize', typeof value, value);
    return new Date(value); // value sent to the client
  },
  parseValue(value) {
    // console.log('parseValue', typeof value, value);
    return new Date(value); // value from the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // console.log('parseLiteral', typeof ast.value, ast.value);
      return new Date(ast.value); // ast value is always in string format
    }
    return null;
  },
});

const scheme = 'scalar Date';

module.exports = {
  scheme,
  resolver: {
    Date: resolver,
  },
};

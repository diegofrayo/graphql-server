const GraphQLJSON = require('graphql-type-json');

module.exports = {
  scheme: 'scalar JSON',
  resolver: {
    JSON: GraphQLJSON,
  },
};

const date = require('./date');
const json = require('./json');

module.exports = {
  schemes: [date.scheme, json.scheme],
  resolvers: {
    ...date.resolver,
    ...json.resolver,
  },
};

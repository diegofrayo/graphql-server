const { ApolloServer, AuthenticationError } = require('apollo-server-express');

// schemes
const typeDefs = require('./schemes');

// resolvers
const resolvers = require('./resolvers');

// scalars
const scalars = require('./scalars');

// api
const api = {};

// create graphql server
const server = new ApolloServer({
  typeDefs: [...typeDefs, ...scalars.schemes],
  resolvers: {
    Query: {
      ...resolvers.queries,
    },
    Mutation: {
      ...resolvers.mutations,
    },
    ...scalars.resolvers,
  },
  context: req => ({ ...req, api }),
});

module.exports = server;

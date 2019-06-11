const { gql } = require('apollo-server-express');

const btUser = require('./baby/user');

const rootQuery = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    ${btUser.queries}
  }

  type Mutation {
    ${btUser.mutations}
  }
`;

module.exports = [rootQuery, btUser.type];

const { gql } = require('apollo-server-express');

module.exports = {
  type: gql`
    type BtUser {
      id: ID!
      name: String!
      email: String!
      password: String!
      image: String!
      jwt: String!
      createdAt: Date!
      updatedAt: Date!
    }

    input BtUserInput {
      email: String!
      name: String
      password: String
    }
  `,

  queries: `
    btUsers: [BtUser]!
    btUserById(id: String): BtUser
  `,

  mutations: `
    btSignIn(email: String!, password: String!): BtUser!
  `,
};

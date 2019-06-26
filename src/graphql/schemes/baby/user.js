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

    type BtBlock {
      id: String!
      name: String!
    }

    input BtUserInput {
      email: String!
      name: String
      password: String
    }
  `,

  queries: `
    btUsers: [BtUser]!
    btUserById(id: String!): BtUser
    btBlocksByUser(userId: String!): [BtBlock]!
  `,

  mutations: `
    btSignIn(email: String!, password: String!): BtUser!
    btAddBlock(id: String!, name: String!): BtBlock!
    btRemoveBlock(blockId: String!): BtBlock!
  `,
};

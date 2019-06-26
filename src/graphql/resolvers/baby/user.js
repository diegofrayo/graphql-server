const { AuthenticationError } = require('apollo-server-express');

let blocks = ['sleep', 'bottle', 'breastfeeding', 'food', 'meds'].map((name, index) => {
  return { id: `${index}`, name };
});

module.exports = {
  queries: {
    btUserById(root, args, context, info) {
      return {};
    },

    btUsers(root, args, context, info) {
      return [];
    },

    btBlocksByUser() {
      return blocks;
    },
  },

  mutations: {
    btSignIn(root, args, context, info) {
      return {
        id: '123',
        email: 'diegofrayo@gmail.com',
        name: 'Diego Rayo',
        image: 'url',
        createdAt: new Date(),
        updatedAt: new Date(),
        jwt: 'jwt',
      };
    },

    btAddBlock(root, args) {
      blocks.push(args);
      return args;
    },

    btRemoveBlock(root, args) {
      const removedBlock = blocks.filter(block => block.id === args.blockId)[0];

      blocks = blocks.filter(block => block.id !== args.blockId);

      return removedBlock;
    },
  },
};

const { AuthenticationError } = require('apollo-server-express');

module.exports = {
  queries: {
    btUserById(root, args, context, info) {
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

    btUsers(root, args, context, info) {
      return [];
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
  },
};

const btUser = require('./baby/user');

module.exports = {
  queries: {
    ...btUser.queries,
  },
  mutations: {
    ...btUser.mutations,
  },
};

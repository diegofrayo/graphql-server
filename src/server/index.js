const express = require('express');

const routes = require('./routes');
const middlewares = require('./middlewares');
const graphql = require('./../graphql');

module.exports = {
  init: () => {
    // create server
    const app = express();

    // apply middlewares
    app.use(...middlewares);

    // apply routes
    routes(app);

    // apply graphql middleware
    graphql.applyMiddleware({ app });

    // init server
    app.listen({ port: 4000 }, () => {
      console.log(`Server started! 🚀 => http://localhost:4000`);
    });
  },
};

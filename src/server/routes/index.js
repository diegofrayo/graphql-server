const tests = require('./tests');

module.exports = app => {
  app.use(tests.path, tests.routes);
};

const bodyParser = require('body-parser');

module.exports = [bodyParser.json({ limit: '5mb', extended: true })];

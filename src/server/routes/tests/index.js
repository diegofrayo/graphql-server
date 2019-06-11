const express = require('express');
const router = express.Router();

router.post('/reset', (req, res) => {
  res.status(200).json({ success: true });
});

module.exports = {
  path: '/tests',
  routes: router,
};
